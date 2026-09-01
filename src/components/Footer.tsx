import { ArrowUp } from 'lucide-react';

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
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Divya Pawar. Built with clean minimalism.
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
