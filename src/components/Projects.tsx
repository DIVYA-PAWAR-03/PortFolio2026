import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, Star, GitFork, Sparkles } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import ProjectModal from './ProjectModal';
import type { ProjectDetail } from './ProjectModal';

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const allProjects: (ProjectDetail & { category: string; featured: boolean; isForkStat?: boolean })[] = [
  {
    title: "Bloombox – Digital Bouquet Editor",
    description: "Canva-inspired creative bouquet builder featuring drag-and-drop mechanics, customization of envelopes, letters, and custom floral arrangements.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Fabric.js"],
    liveLink: "https://bloom-box-five.vercel.app",
    githubLink: "https://github.com/DIVYA-PAWAR-03/BloomBox",
    stats: ["45% UX improvement", "60% design time reduction"],
    category: "web",
    featured: true
  },
  {
    title: "LinkedIn Post Maker",
    description: "AI-powered rich-text editor tailored for LinkedIn content creator ecosystems, offering theme selectors, user previews, and instant downloads.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Rich Editor"],
    liveLink: "https://linkedin-post-maker.vercel.app",
    githubLink: "https://github.com/DIVYA-PAWAR-03/linkedin-post-maker",
    stats: ["40% faster content generation", "+30% shareability"],
    category: "web",
    featured: true
  },
  {
    title: "AI-Powered Migraine Trigger Tracker",
    description: "Intelligent healthcare dashboard that cross-references user lifestyle, sleep cycles, and environmental metrics to forecast migraine onset using ML.",
    tags: ["Python", "Machine Learning", "Streamlit", "FastAPI", "IoT Data"],
    liveLink: "https://frontend-migraine.vercel.app",
    githubLink: "https://github.com/DIVYA-PAWAR-03/Frontend-Migraine",
    stats: ["High predictive accuracy", "NLP dataset labeling"],
    category: "ai",
    featured: true
  },
  {
    title: "Free Minimal Resume Builder",
    description: "Fast-loading, mobile-friendly resume editing platform focused on quick structured entries, print previews, and high layout accessibility.",
    tags: ["React", "Vite", "Responsive Design", "Web Printing"],
    liveLink: "https://free-minimal-resume-builderr.vercel.app",
    githubLink: "https://github.com/DIVYA-PAWAR-03/free-minimal-resume-build",
    stats: ["50% resume creation boost", "+35% device accessibility"],
    category: "tools",
    featured: true
  },
  {
    title: "BraveSpeak – Awareness Platform",
    description: "Responsive social-awareness website built with React & Tailwind CSS to highlight legal rights, real stories, and support resources.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Accessibility"],
    liveLink: "https://brave-speak.vercel.app",
    githubLink: "https://github.com/DIVYA-PAWAR-03/BraveSpeak",
    stats: ["1 Star", "2 Forks", "Hacktoberfest 2025"],
    isForkStat: true,
    category: "web",
    featured: false
  },
  {
    title: "Magic Notes App",
    description: "Handy note-taking app that helps you quickly capture, edit, and organize thoughts in one place. Built with clean HTML/CSS/JS.",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    liveLink: "https://divya-pawar-03.github.io/Magic-notes/",
    githubLink: "https://github.com/DIVYA-PAWAR-03/Magic-notes",
    stats: ["2 Forks", "MIT License", "Hacktoberfest 2024"],
    isForkStat: true,
    category: "tools",
    featured: false
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'web' | 'ai' | 'tools'>('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Applications' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'tools', label: 'Developer Tools' },
  ];

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  const INITIAL_COUNT = 4;
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="section">
      <div className="reveal">
        <div className="section-tag">Selected Work</div>
        <h2>Featured Projects</h2>
      </div>

      {/* Filter Tabs */}
      <div className="skills-filter reveal" style={{ marginBottom: '1.75rem' }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id as any)}
            className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
            style={{ position: 'relative' }}
          >
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((proj) => (
            <motion.div
              key={proj.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <SpotlightCard
                onClick={() => setSelectedProject(proj)}
                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                  <div>
                    <div className="project-header">
                      <h3 className="project-title">{proj.title}</h3>
                      <div className="project-links" onClick={(e) => e.stopPropagation()}>
                        {proj.liveLink && (
                          <a
                            href={proj.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-icon"
                            title="Live Demo"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                        <a
                          href={proj.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-icon"
                          title="Source Code"
                        >
                          <GithubIcon size={16} />
                        </a>
                      </div>
                    </div>

                    <p className="project-desc">{proj.description}</p>
                  </div>

                  <div>
                    <div className="project-stats" style={{ marginBottom: '0.85rem' }}>
                      {proj.stats?.map((stat, sIdx) => (
                        <span key={sIdx} className="impact-pill">
                          {proj.isForkStat && sIdx === 0 ? (
                            <Star size={11} style={{ display: 'inline', marginRight: '3px' }} />
                          ) : proj.isForkStat && sIdx === 1 ? (
                            <GitFork size={11} style={{ display: 'inline', marginRight: '3px' }} />
                          ) : (
                            <Sparkles size={11} style={{ display: 'inline', marginRight: '3px' }} />
                          )}
                          {stat}
                        </span>
                      ))}
                    </div>

                    <div className="project-tags">
                      {proj.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Actions */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem', justifyContent: 'center' }}>
        {filteredProjects.length > INITIAL_COUNT && (
          <button
            className="btn btn-secondary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <><ChevronUp size={16} /> Show Less</>
            ) : (
              <><ChevronDown size={16} /> Show More ({filteredProjects.length - INITIAL_COUNT} more)</>
            )}
          </button>
        )}

        <a
          href="https://github.com/DIVYA-PAWAR-03"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <GithubIcon size={16} /> All Repositories on GitHub
        </a>
      </div>

      {/* Case Study Detail Modal Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
