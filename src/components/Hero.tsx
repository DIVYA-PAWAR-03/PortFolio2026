import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Mail, CheckCircle2, GraduationCap, Code2, Trophy, Copy, Check } from 'lucide-react';
import profileImg from '../assets/profile.png';
import TerminalWidget from './TerminalWidget';

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

interface HeroProps {
  onShowToast: (msg: string) => void;
}

export default function Hero({ onShowToast }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Software Engineer", "React & Next.js Specialist", "UI/UX Architect", "AI Systems Builder"];
  const email = "divyapawar8791@gmail.com";

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    onShowToast("Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="hero-container section">
      <div className="hero-grid">
        {/* Profile Card Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="hero-profile-row"
        >
          <div className="avatar-frame">
            <img 
              src={profileImg} 
              alt="Divya Pawar" 
              className="avatar-img"
            />
          </div>
          <div className="hero-intro">
            <h1 className="hero-name">
              Divya Pawar
              <CheckCircle2 size={20} className="verified-icon" aria-label="Verified Engineer" />
            </h1>

            {/* Dynamic Role Flipper */}
            <div style={{ height: '26px', overflow: 'hidden', position: 'relative', marginTop: '2px' }}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="hero-role"
                  style={{ position: 'absolute', inset: 0 }}
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <button 
              type="button" 
              onClick={handleCopyEmail} 
              className="email-copy-btn"
              title="Copy Email Address"
            >
              <Mail size={14} />
              <span>{email}</span>
              {copied ? <Check size={14} className="accent-link" /> : <Copy size={13} />}
            </button>
          </div>
        </motion.div>

        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="hero-content"
        >
          <p className="hero-description">
            Computer Science Engineering undergraduate (SGPA: 9.78) specializing in engineering high-performance React &amp; Next.js web applications, scalable dashboard architectures, and intuitive digital experiences. Driven by clean code design, modern UI engineering, and sub-second web performance.
          </p>

          <div className="hero-quick-stats">
            <div className="stat-pill">
              <GraduationCap size={15} />
              <span><strong>BE CSE</strong> · 9.78 SGPA</span>
            </div>
            <div className="stat-pill">
              <Code2 size={15} />
              <span><strong>React / Next.js</strong> Specialist</span>
            </div>
            <div className="stat-pill">
              <Trophy size={15} />
              <span><strong>SIH 2025</strong> Semi-Finalist</span>
            </div>
          </div>

          <div className="hero-actions-row">
            <a href="#projects" className="btn btn-primary">
              Explore Projects <ArrowRight size={16} />
            </a>
            <a 
              href="/Divya_Pawar_Resume.pdf" 
              download="Divya_Pawar_Resume.pdf" 
              className="btn btn-secondary"
              onClick={() => onShowToast("Resume download started!")}
            >
              Get Resume <Download size={16} />
            </a>

            <div className="hero-socials">
              <a 
                href="https://github.com/DIVYA-PAWAR-03" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/Divyapawar31" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

          {/* Interactive Code Terminal Playground */}
          <TerminalWidget onShowToast={onShowToast} />
        </motion.div>
      </div>
    </section>
  );
}
