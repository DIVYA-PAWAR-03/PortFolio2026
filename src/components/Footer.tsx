import { ArrowUp, Terminal } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <Terminal size={18} />
            <span>Divya Pawar</span>
          </div>
          <p className="footer-tagline">Crafting responsive, high-performance web experiences.</p>
        </div>

        <div className="footer-links-group">
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#freelance">Freelance</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Divya Pawar. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop} 
            className="scroll-to-top-btn"
            aria-label="Scroll to top"
            title="Scroll to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
