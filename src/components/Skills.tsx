import { useState } from 'react';
import { Code, Layout, Database, Wrench, Sparkles, Search } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend & UI',
      icon: <Layout size={18} />,
      skills: ['React JS', 'Redux', 'Zustand', 'Zod', 'Next.js', 'React Native', 'Tailwind CSS', 'Bootstrap', 'HTML', 'XML', 'JSON']
    },
    {
      id: 'languages',
      title: 'Languages',
      icon: <Code size={18} />,
      skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'Java']
    },
    {
      id: 'backend',
      title: 'Backend & Databases',
      icon: <Database size={18} />,
      skills: ['Node.js', 'Express.js', 'SQL', 'MySQL', 'MongoDB']
    },
    {
      id: 'aiml',
      title: 'AI / ML Capabilities',
      icon: <Sparkles size={18} />,
      skills: ['Prompt Engineering', 'Data Annotation', 'AI Model Evaluation']
    },
    {
      id: 'seo',
      title: 'SEO & Analytics',
      icon: <Search size={18} />,
      skills: ['SEO Principles', 'SEO Web Development', 'Google Analytics', 'Search Console']
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      icon: <Wrench size={18} />,
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Cursor', 'AWS EC2', 'Agile', 'Figma', 'Linux', 'Windows']
    }
  ];

  const filteredCategories = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="reveal">
        <div className="section-tag">Tech Stack</div>
        <h2>Technical Expertise</h2>
      </div>

      {/* Tabs / Filter Controls */}
      <div className="skills-filter reveal">
        <button 
          className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All Stack
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.icon}
            <span>{cat.title}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredCategories.map((cat, index) => (
          <div 
            key={cat.id} 
            className="skill-category-card glass-card reveal"
            style={{ animationDelay: `${index * 50}ms` }}
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
