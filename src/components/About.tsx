import { BookOpen, GraduationCap, Award, Landmark } from 'lucide-react';

export default function About() {
  const education = [
    {
      institution: "Ajeenkya D Y Patil SOE",
      degree: "BE in Computer Science",
      location: "Pune, IN",
      period: "Jul 2026 Graduating",
      grade: "SGPA: 9.78",
      details: "Focusing on Software Engineering, Advanced Web Technologies, Database Systems, and Algorithms.",
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
      details: "Completed high school secondary education with strong performance in Mathematics and Science.",
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
      desc: "Developed a functional solution within a strict 36-hour timeline, collaborating with backend and frontend teammates."
    }
  ];

  return (
    <section id="about" className="section">
      <h2 className="reveal">Education & Achievements</h2>
      
      <div className="about-grid">
        {/* Education Timeline */}
        <div className="education-column reveal">
          <h3 className="section-subtitle">Academic Roadmap</h3>
          <div className="timeline">
            {education.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h4 className="timeline-title">{item.degree}</h4>
                      <span className="timeline-org">{item.institution}</span>
                    </div>
                    <div className="timeline-meta">
                      <span className="timeline-date">{item.period}</span>
                      <span className="timeline-grade">{item.grade}</span>
                    </div>
                  </div>
                  <p className="timeline-desc">{item.details}</p>
                  <div className="timeline-location">📍 {item.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Side Column */}
        <div className="achievements-column reveal">
          <h3 className="section-subtitle">Milestones & Competitions</h3>
          
          <div className="achievements-list">
            {achievements.map((item, index) => (
              <div key={index} className="achievement-card glass-card">
                <div className="achievement-header">
                  <div className="achievement-icon">
                    <Award size={24} className="accent-glow" />
                  </div>
                  <div>
                    <h4 className="achievement-title">{item.title}</h4>
                    <span className="achievement-badge">{item.role}</span>
                  </div>
                </div>
                <p className="achievement-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="about-motto-card glass-card">
            <h4 className="motto-title">My Professional Outlook</h4>
            <p className="motto-text">
              "I aim to build high-performance, accessible user interfaces that make software feel intuitive. Balancing academic precision (9.78 SGPA) with practical development experience allows me to tackle complex problems with clean, scalable architectures."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
