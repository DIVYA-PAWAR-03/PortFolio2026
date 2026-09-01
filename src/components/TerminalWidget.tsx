import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check, Code2, FileJson } from 'lucide-react';

interface TerminalWidgetProps {
  onShowToast: (msg: string) => void;
}

export default function TerminalWidget({ onShowToast }: TerminalWidgetProps) {
  const [activeTab, setActiveTab] = useState<'bio' | 'stack' | 'config'>('bio');
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: 'bio', label: 'developer.json', icon: <FileJson size={13} /> },
    { id: 'stack', label: 'tech-stack.ts', icon: <Code2 size={13} /> },
    { id: 'config', label: 'terminal.sh', icon: <Terminal size={13} /> }
  ];

  const codeSnippets = {
    bio: `{
  "name": "Divya Pawar",
  "role": "Frontend & Software Engineer",
  "education": "BE Computer Science (9.78 SGPA)",
  "status": "Available for Software Engineering & Freelance",
  "location": "Pune, MH, India"
}`,
    stack: `export const coreStack = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
  state: ["Zustand", "Redux Toolkit", "React Query"],
  architecture: ["REST APIs", "Component Systems", "Web Vitals"]
};`,
    config: `#!/bin/bash
echo "Installing Developer Environment..."
npm i react@19 next typescript
echo "Status: 100% Ready to build scalable frontends."`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    onShowToast('Snippet copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="glass-card"
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'var(--bg-secondary)',
        marginTop: '1.5rem',
      }}
    >
      {/* Terminal Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 16px',
          background: 'var(--bg-shade)',
        }}
      >
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--text-muted)', opacity: 0.4 }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--text-muted)', opacity: 0.4 }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--text-muted)', opacity: 0.4 }} />
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '6px' }}>
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                background: activeTab === t.id ? 'var(--card-hover-bg)' : 'transparent',
                color: activeTab === t.id ? 'var(--text-primary)' : 'var(--text-muted)',
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.15s ease',
              }}
            >
              {t.icon}
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopyCode}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
          title="Copy Code Snippet"
        >
          {copied ? <Check size={14} className="accent-link" /> : <Copy size={14} />}
        </button>
      </div>

      {/* Code Display Area */}
      <motion.pre
        key={activeTab}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.15 }}
        style={{
          padding: '16px 20px',
          margin: 0,
          fontFamily: 'var(--font-mono)',
          fontSize: '0.825rem',
          lineHeight: '1.6',
          color: 'var(--text-secondary)',
          overflowX: 'auto',
        }}
      >
        <code>{codeSnippets[activeTab]}</code>
      </motion.pre>
    </div>
  );
}
