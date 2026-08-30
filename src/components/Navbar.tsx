import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react';

interface NavbarProps {
  currentTheme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Navbar({ currentTheme, toggleTheme }: NavbarProps) {
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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="nav-logo">
          <Terminal size={22} className="float-animation" />
          <span>Divya.dev</span>
        </a>

        {/* Desktop Links */}
        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li>
            <a href="#home" className="nav-link" onClick={closeMobileMenu}>Home</a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={closeMobileMenu}>Education & Achievements</a>
          </li>
          <li>
            <a href="#skills" className="nav-link" onClick={closeMobileMenu}>Skills</a>
          </li>
          <li>
            <a href="#experience" className="nav-link" onClick={closeMobileMenu}>Experience</a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={closeMobileMenu}>Projects</a>
          </li>
          <li>
            <a href="#freelance" className="nav-link" onClick={closeMobileMenu}>Freelance</a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a>
          </li>
        </ul>

        <div className="nav-actions">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label="Toggle visual theme"
          >
            {currentTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
