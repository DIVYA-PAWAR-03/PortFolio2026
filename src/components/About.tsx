import { BookOpen, GraduationCap, Landmark, MapPin, Trophy } from 'lucide-react';

export default function About() {
  const education = [
    {
      institution: "Ajeenkya D Y Patil SOE",
      degree: "BE in Computer Science",
      location: "Pune, IN",
      period: "Jul 2026 Graduating",
      grade: "SGPA: 9.78",
      details: "Focusing on Software Engineering, Web Architecture, Database Systems, and Algorithms.",
      icon: <GraduationCap size={18} />
    },
    {
      institution: "Ashok Polytechnic",
      degree: "Diploma in Computer Science",
      location: "A.nagar, IN",
      period: "May 2022 Completed",
      grade: "Percentage: 85.66%",
      details: "Gained core fundamentals in programming, operating systems, networking, and data structures.",
      icon: <Landmark size={18} />
    },
    {
      institution: "N.E.S Shrirampur",
      degree: "10th SSC",
      location: "A.nagar, IN",
      period: "Mar 2019 Completed",
      grade: "Percentage: 81.20%",
      details: "Completed secondary school education with strong performance in Mathematics and Science.",
      icon: <BookOpen size={18} />
    }
  ];

  const achievements = [
    {
      title: "Smart India Hackathon (SIH) 2025",
      role: "Semi-Finalist",
      desc: "Recognized at national level for engineering a prototype solving a critical government-aligned problem statement."
    },
    {
      title: "Smart India Hackathon (SIH) 2024",
      role: "Participant",
      desc: "Developed a functional web solution within a strict 36-hour hackathon timeline."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="reveal">
        <div className="section-tag">Education & Milestones</div>
        <h2>Academic Roadmap</h2>
      </div>
      
      <div className="timeline reveal">
        {education.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">{item.degree}</h3>
                  <span className="timeline-org">{item.institution}</span>
                </div>
                <div className="timeline-meta">
                  <div>{item.period}</div>
                  <div className="accent-link">{item.grade}</div>
                </div>
              </div>
              <p className="timeline-desc">{item.details}</p>
              <div className="timeline-impacts">
                <span className="impact-pill">
                  <MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  {item.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal" style={{ marginTop: '3rem' }}>
        <div className="section-tag">Honors & Competitions</div>
        <h2>Achievements</h2>
        
        <div className="achievements-list">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-card glass-card">
              <div className="achievement-header">
                <div className="timeline-icon">
                  <Trophy size={18} />
                </div>
                <div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <span className="achievement-badge">{item.role}</span>
                </div>
              </div>
              <p className="timeline-desc" style={{ marginTop: '0.5rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
