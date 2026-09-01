import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Freelance from './components/Freelance';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import Toast from './components/Toast';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Ambient mouse position tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll reveal hook — activates .reveal elements as they enter viewport
  useScrollReveal();

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <>
      {/* Ambient cursor glow */}
      <div className="cursor-glow" aria-hidden="true" />

      <Navbar 
        currentTheme={theme} 
        toggleTheme={toggleTheme} 
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      <main>
        <Hero onShowToast={showToast} />
        <Skills />
        <Experience />
        <About />
        <Projects />
        <Testimonials />
        <Freelance />
        <Contact onShowToast={showToast} />
      </main>

      <Footer />

      {/* Command Palette Modal */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        toggleTheme={toggleTheme}
        currentTheme={theme}
        onShowToast={showToast}
      />

      {/* Floating Toast Notification */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage(null)}
      />
    </>
  );
}

export default App;
