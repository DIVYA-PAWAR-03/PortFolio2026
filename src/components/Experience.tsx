import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "SEVYSIS PVT. LTD.",
      role: "Technical Intern",
      period: "Feb 2025 – May 2025",
      location: "Remote, IN",
      impacts: ["+30% Maintainability", "+25% Responsiveness", "-35% Load Time"],
      bullets: [
        "Developed scalable React.js applications with reusable component architecture, integrating RESTful APIs, secure authentication, and dynamic state management (Zustand/Redux).",
        "Implemented enterprise-level features including role-based access control (RBAC), protected routing, advanced search, filtering, client-side pagination, and complex interactive dashboards.",
        "Optimized frontend performance using lazy loading, code splitting, memoization techniques, and efficient rendering practices, working closely in an Agile team."
      ]
    },
    {
      company: "DIV AND SECTION PVT. LTD.",
      role: "Web Developer Intern",
      period: "Aug 2021 – Sep 2021",
      location: "Remote, IN",
      impacts: ["-50% Manual Work", "+45% Efficiency"],
      bullets: [
        "Developed a robust college management system using Java, Hibernate, JDBC, and MySQL, successfully reducing manual clerical operations.",
        "Implemented role-based database access, designed relational tables, and optimized backend query workflows to boost response times and workflow efficiency."
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="reveal">
        <div className="section-tag">Career Journey</div>
        <h2>Work Experience</h2>
      </div>

      <div className="timeline reveal">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">
              <Briefcase size={18} />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">{exp.role}</h3>
                  <span className="timeline-org">{exp.company}</span>
                </div>
                <div className="timeline-meta">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end', marginTop: '2px' }}>
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="timeline-impacts" style={{ marginTop: '0.75rem' }}>
                {exp.impacts.map((imp, idx) => (
                  <span key={idx} className="impact-pill">
                    {imp}
                  </span>
                ))}
              </div>

              <ul style={{ listStyle: 'none', marginTop: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={15} className="accent-link" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <p style={{ fontSize: '0.9rem' }}>{bullet}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
