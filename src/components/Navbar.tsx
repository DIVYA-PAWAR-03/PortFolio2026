import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Command } from 'lucide-react';

interface NavbarProps {
  currentTheme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenCommandPalette: () => void;
}

const LogoIcon = () => (
  <svg 
    width="34" 
    height="34" 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="logo-icon-svg"
  >
    <defs>
      <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="var(--accent-blue)" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
      <linearGradient id="logo-bg-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.16" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.08" />
      </linearGradient>
    </defs>
    <rect 
      x="1" 
      y="1" 
      width="38" 
      height="38" 
      rx="10" 
      fill="url(#logo-bg-grad)" 
      stroke="url(#logo-grad)" 
      strokeWidth="1.5" 
    />
    {/* Letter D */}
    <path 
      d="M 12 11 H 20 C 23.5 11 26 13.2 26 17.5 C 26 21.8 23.5 24 20 24 H 12 V 11 Z" 
      stroke="var(--text-primary)" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    {/* Letter P */}
    <path 
      d="M 19 19 H 26 C 28.5 19 30 20.8 30 23.2 C 30 25.6 28.5 27.5 26 27.5 H 19 V 29.5" 
      stroke="url(#logo-grad)" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

export default function Navbar({ currentTheme, toggleTheme, onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="nav-logo" aria-label="Divya Pawar Portfolio">
          <LogoIcon />
          <span className="logo-brand-text">
            Divya<span className="logo-accent-dot">.</span>Pawar
          </span>
        </a>

        {/* Desktop Links */}
        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li>
            <a href="#home" className="nav-link" onClick={closeMobileMenu}>Home</a>
          </li>
          <li>
            <a href="#skills" className="nav-link" onClick={closeMobileMenu}>Tech Stack</a>
          </li>
          <li>
            <a href="#experience" className="nav-link" onClick={closeMobileMenu}>Experience</a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={closeMobileMenu}>Education</a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={closeMobileMenu}>Projects</a>
          </li>
          <li>
            <a href="#testimonials" className="nav-link" onClick={closeMobileMenu}>Impact</a>
          </li>
          <li>
            <a href="#freelance" className="nav-link" onClick={closeMobileMenu}>Freelance</a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a>
          </li>
        </ul>

        <div className="nav-actions">
          {/* Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            className="theme-toggle"
            aria-label="Open Command Palette"
            title="Open Command Palette (⌘K)"
            style={{ width: 'auto', padding: '0 10px', borderRadius: '8px', fontSize: '0.8rem', gap: '5px' }}
          >
            <Command size={14} />
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>⌘K</span>
          </button>

          <button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label="Toggle visual theme"
          >
            {currentTheme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
