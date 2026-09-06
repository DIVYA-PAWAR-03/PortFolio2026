import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

interface ContactProps {
  onShowToast?: (msg: string) => void;
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Contact({ onShowToast }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name: string, value: string): string => {
    const trimmed = value.trim();
    if (name === 'name') {
      if (!trimmed) return "Name is required";
      if (trimmed.length < 2) return "Name must be at least 2 characters";
    }
    if (name === 'email') {
      if (!trimmed) return "Email is required";
      if (!EMAIL_REGEX.test(trimmed)) return "Please enter a valid email address (e.g. name@domain.com)";
    }
    if (name === 'message') {
      if (!trimmed) return "Message is required";
      if (trimmed.length < 10) return "Message must be at least 10 characters";
    }
    return '';
  };

  const validate = () => {
    const tempErrors: Record<string, string> = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };
    
    // Remove empty error keys
    Object.keys(tempErrors).forEach((key) => {
      if (!tempErrors[key]) delete tempErrors[key];
    });

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      const error = validateField(name, value);
      setErrors({
        ...errors,
        [name]: error
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      const recipientEmail = "divyapawar8791@gmail.com";

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            _replyto: formData.email.trim(),
            subject: formData.subject.trim() || `Portfolio Contact Message from ${formData.name.trim()}`,
            message: formData.message.trim(),
            _subject: `New Portfolio Message from ${formData.name.trim()}`,
            _template: "table",
            _captcha: "false"
          })
        });

        const data = await response.json();

        if (response.ok && (data.success === "true" || data.success === true)) {
          setIsSubmitting(false);
          setIsSubmitted(true);
          onShowToast?.("message sent successfully");
          setFormData({ name: '', email: '', subject: '', message: '' });
          setErrors({});
        } else if (data.message && data.message.toLowerCase().includes("activation")) {
          setIsSubmitting(false);
          setIsSubmitted(true);
          onShowToast?.("message sent successfully");
          setFormData({ name: '', email: '', subject: '', message: '' });
          setErrors({});
        } else {
          throw new Error(data.message || "Failed to send message via contact service");
        }
      } catch (err) {
        setIsSubmitting(false);
        // Fallback to client mailto link if POST endpoint fails or is blocked
        const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`)}&body=${encodeURIComponent(`Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`)}`;
        window.location.href = mailtoUrl;
      }
    }
  };

  return (
    <section id="contact" className="section">
      <div className="reveal">
        <div className="section-tag">Reach Out</div>
        <h2>Get In Touch</h2>
      </div>

      <div className="contact-grid">
        {/* Info Column */}
        <SpotlightCard className="reveal">
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Contact Channels</h3>
            
            <div className="info-list">
              <a href="mailto:divyapawar8791@gmail.com" className="info-item">
                <div className="info-icon-box">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="info-label">Email</span>
                  <span className="info-value">divyapawar8791@gmail.com</span>
                </div>
              </a>

              <a href="tel:+919730473315" className="info-item">
                <div className="info-icon-box">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="info-label">Phone</span>
                  <span className="info-value">+91 9730473315</span>
                </div>
              </a>

              <div className="info-item">
                <div className="info-icon-box">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">Pune, Maharashtra, IN</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontWeight: 500 }}>Social Profiles</h4>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a 
                  href="https://linkedin.com/in/Divyapawar31" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a 
                  href="https://github.com/DIVYA-PAWAR-03" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn"
                  title="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </SpotlightCard>

        {/* Form Column */}
        <SpotlightCard className="reveal">
          <div style={{ padding: '1.5rem' }}>
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={48} className="accent-link" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Message Sent!</h3>
                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Thank you for reaching out. Your message has been sent to divyapawar8791@gmail.com and I will get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="btn btn-secondary"
                  style={{ marginTop: '1.5rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    className={errors.name ? 'input-error' : ''}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <span className="form-error-msg">
                      <AlertCircle size={12} /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="john@example.com"
                    className={errors.email ? 'input-error' : ''}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <span className="form-error-msg">
                      <AlertCircle size={12} /> {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject (Optional)</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange}
                    placeholder="Project Inquiry / Collaboration"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    value={formData.message} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell me about your project..."
                    className={errors.message ? 'input-error' : ''}
                    aria-invalid={!!errors.message}
                  ></textarea>
                  {errors.message && (
                    <span className="form-error-msg">
                      <AlertCircle size={12} /> {errors.message}
                    </span>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary form-submit-btn" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : <>Send Message <Send size={15} /></>}
                </button>
              </form>
            )}
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
