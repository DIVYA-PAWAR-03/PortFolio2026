import { useState } from 'react';
import { ExternalLink, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

// Inline brand SVG (not available in lucide-react v1)
const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const allProjects = [
  // ── Featured (always visible) ──────────────────────────────────
  {
    title: "Bloombox – Digital Bouquet Editor",
    description: "A Canva-inspired creative bouquet builder featuring drag-and-drop mechanics, customization of envelopes, letters, and custom floral arrangements.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Fabric.js"],
    liveLink: "https://bloom-box-five.vercel.app",
    githubLink: "https://github.com/DIVYA-PAWAR-03/BloomBox",
    stats: ["45% UX improvement", "60% design time reduction"],
    featured: true,
    svgIllustration: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
        <rect width="400" height="200" rx="16" fill="url(#flowerGrad)" />
        <circle cx="200" cy="100" r="45" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="200" cy="100" r="30" fill="rgba(255,255,255,0.12)" />
        <circle cx="170" cy="80" r="14" fill="#fb7185" opacity="0.85" />
        <circle cx="170" cy="80" r="4" fill="#fef08a" />
        <circle cx="230" cy="90" r="12" fill="#c084fc" opacity="0.85" />
        <circle cx="230" cy="90" r="3" fill="#fef08a" />
        <circle cx="195" cy="120" r="15" fill="#38bdf8" opacity="0.85" />
        <circle cx="195" cy="120" r="4" fill="#fef08a" />
        <path d="M170 94 Q190 140 200 160" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
        <path d="M230 102 Q210 140 200 160" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
        <path d="M195 135 L200 160" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
        <path d="M185 155 C195 152 205 152 215 155 L208 163 L218 170 C208 170 192 170 182 170 L192 163 Z" fill="#fb7185" />
        <defs>
          <linearGradient id="flowerGrad" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1e1b4b" /><stop offset="1" stopColor="#311042" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    title: "LinkedIn Post Maker",
    description: "An AI-powered rich-text editor tailored for LinkedIn content creator ecosystems, offering theme selectors, user previews, and instant downloads.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Rich Editor"],
    liveLink: "https://linkedin-post-maker.vercel.app",
    githubLink: "https://github.com/DIVYA-PAWAR-03/linkedin-post-maker",
    stats: ["40% faster content generation", "+30% shareability"],
    featured: true,
    svgIllustration: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
        <rect width="400" height="200" rx="16" fill="url(#postGrad)" />
        <rect x="80" y="30" width="240" height="140" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        <circle cx="110" cy="55" r="12" fill="#38bdf8" />
        <rect x="130" y="48" width="80" height="6" rx="3" fill="#64748b" />
        <rect x="130" y="58" width="50" height="4" rx="2" fill="#475569" />
        <rect x="100" y="80" width="200" height="5" rx="2.5" fill="#f8fafc" />
        <rect x="100" y="92" width="180" height="5" rx="2.5" fill="#f8fafc" />
        <rect x="100" y="104" width="120" height="5" rx="2.5" fill="#38bdf8" />
        <line x1="100" y1="135" x2="300" y2="135" stroke="#334155" strokeWidth="1" />
        <circle cx="115" cy="148" r="6" fill="#64748b" />
        <circle cx="180" cy="148" r="6" fill="#64748b" />
        <circle cx="245" cy="148" r="6" fill="#64748b" />
        <defs>
          <linearGradient id="postGrad" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0f172a" /><stop offset="1" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    title: "AI-Powered Migraine Trigger Tracker",
    description: "An intelligent healthcare dashboard that cross-references user lifestyle, sleep cycles, and environmental metrics to forecast migraine onset using machine learning.",
    tags: ["Python", "Machine Learning", "Streamlit", "FastAPI", "IoT Data"],
    liveLink: "https://frontend-migraine.vercel.app",
    githubLink: "https://github.com/DIVYA-PAWAR-03/Frontend-Migraine",
    stats: ["High predictive accuracy", "NLP dataset labeling"],
    featured: true,
    svgIllustration: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
        <rect width="400" height="200" rx="16" fill="url(#migraineGrad)" />
        <path d="M 50 150 L 350 150" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <path d="M 50 100 L 350 100" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <path d="M 50 50 L 350 50" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <path d="M50 130 Q 100 60 140 120 T 220 90 T 300 140 L 350 120" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M50 110 Q 120 140 180 80 T 260 120 T 350 70" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
        <circle cx="220" cy="90" r="5" fill="#f43f5e" />
        <circle cx="220" cy="90" r="10" stroke="#f43f5e" strokeWidth="1.5" opacity="0.5">
          <animate attributeName="r" values="5;15;5" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite" />
        </circle>
        <defs>
          <linearGradient id="migraineGrad" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#180f1a" /><stop offset="1" stopColor="#2d0b1e" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    title: "Free Minimal Resume Builder",
    description: "A fast-loading, mobile-friendly resume editing platform focused on quick structured entries, print previews, and high layout accessibility.",
    tags: ["React", "Vite", "Responsive Design", "Web Printing"],
    liveLink: "https://free-minimal-resume-builderr.vercel.app",
    githubLink: "https://github.com/DIVYA-PAWAR-03/free-minimal-resume-build",
    stats: ["50% resume creation boost", "+35% device accessibility"],
    featured: true,
    svgIllustration: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
        <rect width="400" height="200" rx="16" fill="url(#resumeGrad)" />
        <rect x="50" y="30" width="110" height="140" rx="6" fill="#1e293b" />
        <rect x="60" y="45" width="90" height="10" rx="2" fill="#334155" />
        <rect x="60" y="65" width="90" height="8" rx="2" fill="#059669" />
        <circle cx="68" cy="95" r="4" fill="#64748b" />
        <circle cx="68" cy="115" r="4" fill="#64748b" />
        <circle cx="68" cy="135" r="4" fill="#64748b" />
        <rect x="80" y="92" width="70" height="6" rx="2" fill="#475569" />
        <rect x="80" y="112" width="70" height="6" rx="2" fill="#475569" />
        <rect x="80" y="132" width="70" height="6" rx="2" fill="#475569" />
        <rect x="180" y="20" width="170" height="160" rx="4" fill="#ffffff" />
        <rect x="195" y="35" width="60" height="8" fill="#1e293b" />
        <rect x="195" y="47" width="100" height="4" fill="#94a3b8" />
        <line x1="195" y1="58" x2="335" y2="58" stroke="#cbd5e1" strokeWidth="1" />
        <rect x="195" y="68" width="40" height="6" fill="#10b981" />
        <rect x="195" y="80" width="140" height="4" fill="#e2e8f0" />
        <rect x="195" y="88" width="140" height="4" fill="#e2e8f0" />
        <rect x="195" y="112" width="40" height="6" fill="#10b981" />
        <rect x="195" y="124" width="140" height="4" fill="#e2e8f0" />
        <defs>
          <linearGradient id="resumeGrad" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#064e3b" /><stop offset="1" stopColor="#022c22" />
          </linearGradient>
        </defs>
      </svg>
    )
  },

  // ── Extra Projects (shown after "Show More") ───────────────────
  {
    title: "BraveSpeak – Awareness Platform",
    description: "A responsive social-awareness website built with React & Tailwind CSS to highlight legal rights, real stories, and support resources. Gained 1 GitHub star and 2 forks.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Accessibility"],
    liveLink: "https://brave-speak.vercel.app",
    githubLink: "https://github.com/DIVYA-PAWAR-03/BraveSpeak",
    stats: ["⭐ 1 Star", "🍴 2 Forks", "Hacktoberfest 2025"],
    featured: false,
    svgIllustration: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
        <rect width="400" height="200" rx="16" fill="url(#braveGrad)" />
        <circle cx="200" cy="85" r="38" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.3)" strokeWidth="1.5" />
        <path d="M200 55 L210 78 L235 78 L216 93 L223 117 L200 102 L177 117 L184 93 L165 78 L190 78 Z" fill="#ef4444" opacity="0.8" />
        <rect x="80" y="145" width="240" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="100" y="158" width="200" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
        <rect x="120" y="169" width="160" height="4" rx="2" fill="rgba(255,255,255,0.04)" />
        <defs>
          <linearGradient id="braveGrad" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1c0a0a" /><stop offset="1" stopColor="#3b0f0f" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    title: "Magic Notes App",
    description: "A simple and handy note-taking app that helps you quickly capture, edit, and organize thoughts in one place. Built with clean HTML/CSS/JS. Has 2 forks from community.",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    liveLink: "https://divya-pawar-03.github.io/Magic-notes/",
    githubLink: "https://github.com/DIVYA-PAWAR-03/Magic-notes",
    stats: ["🍴 2 Forks", "MIT License", "Hacktoberfest 2024"],
    featured: false,
    svgIllustration: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
        <rect width="400" height="200" rx="16" fill="url(#notesGrad)" />
        <rect x="70" y="30" width="130" height="150" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <rect x="82" y="48" width="106" height="8" rx="3" fill="#f59e0b" />
        <rect x="82" y="65" width="90" height="4" rx="2" fill="#475569" />
        <rect x="82" y="75" width="100" height="4" rx="2" fill="#475569" />
        <rect x="82" y="85" width="70" height="4" rx="2" fill="#475569" />
        <rect x="82" y="105" width="106" height="8" rx="3" fill="#10b981" />
        <rect x="82" y="120" width="95" height="4" rx="2" fill="#475569" />
        <rect x="82" y="130" width="80" height="4" rx="2" fill="#475569" />
        <rect x="82" y="148" width="106" height="8" rx="3" fill="#8b5cf6" />
        <rect x="200" y="50" width="130" height="80" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.08)" strokeWidth="1" transform="rotate(-6 200 50)" />
        <rect x="210" y="62" width="100" height="6" rx="3" fill="#f59e0b" transform="rotate(-6 210 62)" />
        <rect x="210" y="75" width="85" height="4" rx="2" fill="#475569" transform="rotate(-6 210 75)" />
        <rect x="210" y="85" width="75" height="4" rx="2" fill="#475569" transform="rotate(-6 210 85)" />
        <circle cx="350" cy="160" r="22" fill="#f59e0b" opacity="0.8" />
        <path d="M342 160 L348 166 L360 154" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="notesGrad" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0c0a1e" /><stop offset="1" stopColor="#1a1040" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    title: "Flower Website",
    description: "A beautifully crafted flower-lovers landing page — my first full website featuring product showcases, elegant layouts, and smooth visual presentation for floral businesses.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    liveLink: "https://flower-website-one-beta.vercel.app",
    githubLink: "https://github.com/DIVYA-PAWAR-03/flower-website",
    stats: ["First full website", "GitHub Pages hosted"],
    featured: false,
    svgIllustration: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
        <rect width="400" height="200" rx="16" fill="url(#flowerWebGrad)" />
        <circle cx="130" cy="90" r="28" fill="rgba(244,114,182,0.15)" />
        <circle cx="200" cy="75" r="35" fill="rgba(244,114,182,0.15)" />
        <circle cx="270" cy="90" r="28" fill="rgba(244,114,182,0.15)" />
        {[130, 200, 270].map((cx, i) => {
          const cy = i === 1 ? 75 : 90;
          const r = i === 1 ? 18 : 14;
          const petals = [0,60,120,180,240,300];
          return petals.map((angle, j) => {
            const rad = (angle * Math.PI) / 180;
            const px = cx + Math.cos(rad) * (r + 5);
            const py = cy + Math.sin(rad) * (r + 5);
            return <ellipse key={`${i}-${j}`} cx={px} cy={py} rx="7" ry="11" fill="#f472b6" opacity="0.75" transform={`rotate(${angle} ${px} ${py})`} />;
          });
        })}
        {[130, 200, 270].map((cx, i) => (
          <circle key={i} cx={cx} cy={i === 1 ? 75 : 90} r={i === 1 ? 10 : 8} fill="#fef08a" />
        ))}
        <rect x="60" y="148" width="280" height="30" rx="6" fill="rgba(0,0,0,0.3)" />
        <rect x="70" y="156" width="80" height="6" rx="3" fill="rgba(244,114,182,0.6)" />
        <rect x="160" y="156" width="60" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
        <rect x="230" y="156" width="60" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
        <defs>
          <linearGradient id="flowerWebGrad" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1a0a2e" /><stop offset="1" stopColor="#2d1040" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    title: "Potens Intern Frontend Task",
    description: "A professional frontend assignment completed during the Potens internship hiring process — demonstrates component architecture, state management and pixel-perfect implementation.",
    tags: ["TypeScript", "React", "Vite", "Component Design"],
    liveLink: "",
    githubLink: "https://github.com/DIVYA-PAWAR-03/potens-intern-frontend-divya-pawar",
    stats: ["Internship assignment", "Clean architecture"],
    featured: false,
    svgIllustration: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
        <rect width="400" height="200" rx="16" fill="url(#potensGrad)" />
        <rect x="50" y="40" width="300" height="120" rx="10" fill="#0f172a" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" />
        <rect x="50" y="40" width="300" height="28" rx="10" fill="rgba(99,102,241,0.15)" />
        <circle cx="72" cy="54" r="5" fill="#ef4444" opacity="0.7" />
        <circle cx="88" cy="54" r="5" fill="#f59e0b" opacity="0.7" />
        <circle cx="104" cy="54" r="5" fill="#10b981" opacity="0.7" />
        <rect x="65" y="83" width="60" height="5" rx="2" fill="#6366f1" />
        <rect x="65" y="95" width="270" height="4" rx="2" fill="#334155" />
        <rect x="65" y="105" width="230" height="4" rx="2" fill="#334155" />
        <rect x="65" y="120" width="60" height="5" rx="2" fill="#06b6d4" />
        <rect x="65" y="132" width="200" height="4" rx="2" fill="#334155" />
        <rect x="65" y="142" width="170" height="4" rx="2" fill="#334155" />
        <defs>
          <linearGradient id="potensGrad" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0f0c29" /><stop offset="1" stopColor="#1a1560" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
];

const INITIAL_COUNT = 4;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? allProjects : allProjects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="section">
      <div className="reveal">
        <h2>Personal Creations</h2>
        <p className="section-description">
          A selection of production-ready applications and GitHub projects built to solve real design, data, and productivity challenges.
        </p>
      </div>

      <div className="projects-grid">
        {visibleProjects.map((proj, index) => (
          <div
            key={proj.title}
            className="project-card-container reveal"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="project-card glass-card">
              {/* SVG Illustration */}
              <div className="project-illustration-wrapper">
                {proj.svgIllustration}
              </div>

              {/* Info content */}
              <div className="project-body">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.description}</p>

                <div className="project-impact-tags">
                  {proj.stats.map((stat, sIdx) => (
                    <span key={sIdx} className="project-stat-tag">
                      <Sparkles size={12} className="tag-sparkle" /> {stat}
                    </span>
                  ))}
                </div>

                <div className="project-tech-tags">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {proj.liveLink ? (
                    <a
                      href={proj.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn btn-view"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="project-btn btn-view btn-disabled" aria-disabled="true">
                      Private / Internal
                    </span>
                  )}
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn btn-git"
                  >
                    GitHub <GithubIcon size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less */}
      <div className="projects-actions-row">
        <button
          className="btn btn-secondary show-more-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? (
            <><ChevronUp size={18} /> Show Less</>
          ) : (
            <><ChevronDown size={18} /> Show More Projects ({allProjects.length - INITIAL_COUNT} more)</>
          )}
        </button>

        <a
          href="https://github.com/DIVYA-PAWAR-03"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary view-github-btn"
        >
          <GithubIcon size={18} /> View All on GitHub
        </a>
      </div>
    </section>
  );
}
