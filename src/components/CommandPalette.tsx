import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Sun, Moon, Copy, Download, ExternalLink } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  toggleTheme: () => void;
  currentTheme: 'dark' | 'light';
  onShowToast: (msg: string) => void;
}

export default function CommandPalette({ isOpen, onClose, toggleTheme, currentTheme, onShowToast }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const items = [
    { label: 'Go to Home', section: '#home', category: 'Navigation', icon: <ArrowRight size={15} /> },
    { label: 'Go to Tech Stack', section: '#skills', category: 'Navigation', icon: <ArrowRight size={15} /> },
    { label: 'Go to Experience', section: '#experience', category: 'Navigation', icon: <ArrowRight size={15} /> },
    { label: 'Go to Education & Milestones', section: '#about', category: 'Navigation', icon: <ArrowRight size={15} /> },
    { label: 'Go to Featured Projects', section: '#projects', category: 'Navigation', icon: <ArrowRight size={15} /> },
    { label: 'Go to Freelance Services', section: '#freelance', category: 'Navigation', icon: <ArrowRight size={15} /> },
    { label: 'Go to Contact', section: '#contact', category: 'Navigation', icon: <ArrowRight size={15} /> },
    {
      label: 'Copy Email Address',
      category: 'Actions',
      icon: <Copy size={15} />,
      action: () => {
        navigator.clipboard.writeText('divyapawar8791@gmail.com');
        onShowToast('Email address copied to clipboard!');
      }
    },
    {
      label: `Switch to ${currentTheme === 'dark' ? 'Light' : 'Dark'} Theme`,
      category: 'Actions',
      icon: currentTheme === 'dark' ? <Sun size={15} /> : <Moon size={15} />,
      action: () => {
        toggleTheme();
        onShowToast(`Switched to ${currentTheme === 'dark' ? 'Light' : 'Dark'} theme`);
      }
    },
    {
      label: 'Download Resume (PDF)',
      category: 'Actions',
      icon: <Download size={15} />,
      action: () => {
        window.open('/Divya_Pawar_Resume.pdf', '_blank');
        onShowToast('Opening Resume PDF...');
      }
    },
    {
      label: 'Open GitHub Profile',
      category: 'Links',
      icon: <ExternalLink size={15} />,
      action: () => window.open('https://github.com/DIVYA-PAWAR-03', '_blank')
    },
    {
      label: 'Open LinkedIn Profile',
      category: 'Links',
      icon: <ExternalLink size={15} />,
      action: () => window.open('https://linkedin.com/in/Divyapawar31', '_blank')
    }
  ];

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: typeof items[0]) => {
    if (item.section) {
      window.location.hash = item.section;
    } else if (item.action) {
      item.action();
    }
    onClose();
    setQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
      e.preventDefault();
      handleSelect(filteredItems[selectedIndex]);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 999, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '15vh' }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.65)',
              backdropFilter: 'blur(8px)',
            }}
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18 }}
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: '560px',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '16px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
              overflow: 'hidden',
              zIndex: 1000,
            }}
          >
            {/* Input Header */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '16px 20px', gap: '12px', borderBottom: '1px solid var(--bg-shade)' }}>
              <Search size={18} style={{ color: 'var(--text-muted)' }} />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Type a command or search section..."
                autoFocus
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-sans)',
                }}
              />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', background: 'var(--bg-shade)', padding: '2px 8px', borderRadius: '6px', fontFamily: 'var(--font-mono)' }}>
                ESC
              </span>
            </div>

            {/* Results List */}
            <div style={{ maxHeight: '340px', overflowY: 'auto', padding: '8px' }}>
              {filteredItems.length === 0 ? (
                <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  No commands found matching "{query}"
                </div>
              ) : (
                filteredItems.map((item, idx) => (
                  <div
                    key={item.label}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      backgroundColor: idx === selectedIndex ? 'var(--bg-shade-hover)' : 'transparent',
                      color: idx === selectedIndex ? 'var(--text-primary)' : 'var(--text-secondary)',
                      transition: 'background-color 0.15s ease',
                      fontSize: '0.9rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className="accent-link">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {item.category}
                    </span>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
