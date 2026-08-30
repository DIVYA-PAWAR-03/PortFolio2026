import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, BookOpen, AlertCircle } from 'lucide-react';

// Inline brand SVGs (not available in lucide-react v1)
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for that field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate form submission to backend
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="reveal">
        <h2>Get In Touch</h2>
        <p className="section-description">
          Have an exciting project, freelance opportunity, or just want to say hi? Drop me a message and I'll get back to you within 24 hours.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Info Card */}
        <div className="contact-info-column reveal">
          <div className="contact-info-card glass-card">
            <h3 className="contact-info-title">Contact Channels</h3>
            
            <div className="info-list">
              <a href="mailto:divyapawar8791@gmail.com" className="info-item">
                <div className="info-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="info-label">Email Me</span>
                  <span className="info-value">divyapawar8791@gmail.com</span>
                </div>
              </a>

              <a href="tel:+919730473315" className="info-item">
                <div className="info-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="info-label">Call / WhatsApp</span>
                  <span className="info-value">+91 9730473315</span>
                </div>
              </a>

              <div className="info-item">
                <div className="info-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">Pune, Maharashtra, IN</span>
                </div>
              </div>
            </div>

            <div className="contact-socials-group">
              <h4 className="socials-subtitle">Direct Networks</h4>
              <div className="socials-flex">
                <a 
                  href="https://linkedin.com/in/Divyapawar31" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn-round"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/DIVYA-PAWAR-03" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn-round"
                  title="GitHub"
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://stackoverflow.com/users/divya-pawar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn-round"
                  title="Stack Overflow"
                >
                  <BookOpen size={18} />
                  <span>StackOverflow</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="contact-form-column reveal">
          <div className="contact-form-card glass-card">
            {isSubmitted ? (
              <div className="submission-success-area">
                <CheckCircle size={56} className="success-icon-check float-animation" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out, Divya. I will review your query and get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="btn btn-secondary"
                  style={{ marginTop: '1.5rem' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      className={errors.name ? 'input-error' : ''}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="error-msg"><AlertCircle size={12} /> {errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      className={errors.email ? 'input-error' : ''}
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="error-msg"><AlertCircle size={12} /> {errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject (Optional)</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange}
                    placeholder="Freelance Project Discussion"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    value={formData.message} 
                    onChange={handleChange}
                    className={errors.message ? 'input-error' : ''}
                    placeholder="Tell me about your project, timeline, and expectations..."
                  ></textarea>
                  {errors.message && <span className="error-msg"><AlertCircle size={12} /> {errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary form-submit-btn" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
