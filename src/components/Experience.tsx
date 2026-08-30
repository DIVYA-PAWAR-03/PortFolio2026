import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

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
        <h2>Work Experience</h2>
        <p className="section-description">
          A review of my internship tenures and hands-on contributions to professional development teams.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card glass-card reveal">
            <div className="experience-header-grid">
              <div className="experience-info">
                <div className="experience-icon-box">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="experience-title">{exp.role}</h3>
                  <span className="experience-company">{exp.company}</span>
                </div>
              </div>
              
              <div className="experience-meta">
                <div className="meta-item">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
                <div className="meta-item">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <div className="experience-impact-pills">
              {exp.impacts.map((imp, idx) => (
                <span key={idx} className="impact-pill">
                  {imp}
                </span>
              ))}
            </div>

            <ul className="experience-details-list">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="details-list-item">
                  <CheckCircle size={16} className="bullet-icon" />
                  <p>{bullet}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
