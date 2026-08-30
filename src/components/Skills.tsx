import { useState } from 'react';
import { Code, Layout, Database, Wrench, Sparkles, Search } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend & UI',
      icon: <Layout size={20} />,
      skills: ['React JS', 'Redux', 'Zustand', 'Zod', 'Next.js', 'React Native', 'Tailwind CSS', 'Bootstrap', 'HTML', 'XML', 'JSON']
    },
    {
      id: 'languages',
      title: 'Languages',
      icon: <Code size={20} />,
      skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'Java']
    },
    {
      id: 'backend',
      title: 'Backend & Databases',
      icon: <Database size={20} />,
      skills: ['Node.js', 'Express.js', 'SQL', 'MySQL', 'MongoDB']
    },
    {
      id: 'aiml',
      title: 'AI / ML Capabilities',
      icon: <Sparkles size={20} />,
      skills: ['Prompt Engineering', 'Data Annotation', 'AI Model Evaluation']
    },
    {
      id: 'seo',
      title: 'SEO & Analytics',
      icon: <Search size={20} />,
      skills: ['SEO Principles', 'SEO Web Development', 'Google Analytics', 'Google Search Console']
    },
    {
      id: 'tools',
      title: 'Tools & Platform',
      icon: <Wrench size={20} />,
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Cursor', 'AWS EC2', 'Agile Methodology', 'Figma', 'Canva', 'WordPress', 'Linux', 'Windows']
    }
  ];

  const filteredCategories = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="reveal">
        <h2>Technical Expertise</h2>
        <p className="section-description">
          A comprehensive breakdown of my programming languages, frameworks, developer tools, and specialized technical practices.
        </p>
      </div>

      {/* Tabs / Filter Controls */}
      <div className="skills-filter reveal">
        <button 
          className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All Tech Stack
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <span className="btn-icon-span">{cat.icon}</span>
            {cat.title}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredCategories.map((cat, index) => (
          <div 
            key={cat.id} 
            className="skill-category-card glass-card reveal"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="card-header-with-icon">
              <div className="skill-cat-icon">{cat.icon}</div>
              <h3 className="skill-cat-title">{cat.title}</h3>
            </div>
            <div className="skill-tags">
              {cat.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-tag-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
