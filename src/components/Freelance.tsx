import { ArrowRight, Laptop, Paintbrush, Zap, FileCode, Lightbulb } from 'lucide-react';

export default function Freelance() {
  const services = [
    {
      title: "Custom Web App Development",
      desc: "Building high-performance React and Next.js applications tailored to specific business workflows, incorporating role-based access, API routing, and state management.",
      icon: <Laptop size={20} />
    },
    {
      title: "Figma-to-React Engineering",
      desc: "Translating static designs (Figma, Canva, Adobe XD) into pixel-perfect, accessible, and responsive components with smooth animations and layout transitions.",
      icon: <Paintbrush size={20} />
    },
    {
      title: "Speed & Performance Auditing",
      desc: "Diagnosing slow rendering pipelines, setting up lazy loading, code-splitting, query memoization, and optimizing bundles to dramatically improve lighthouse scores.",
      icon: <Zap size={20} />
    },
    {
      title: "API & Backend Integrations",
      desc: "Connecting React applications with Node.js/Express servers, MySQL/MongoDB databases, and standard third-party services (Auth, Payment Gateways, CMS).",
      icon: <FileCode size={20} />
    }
  ];

  return (
    <section id="freelance" className="section">
      <div className="reveal">
        <div className="section-tag">Services & Client Work</div>
        <h2>Freelance & Collaborations</h2>
      </div>

      <div className="availability-card glass-card reveal">
        <div className="availability-badge">● Available for Hire</div>
        <h3 className="availability-title">Let's build scalable web applications</h3>
        <p style={{ marginTop: '0.5rem', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
          I work closely with clients and teams to understand product requirements, draft clean structured code, and deploy fast frontends.
        </p>
        <a href="#contact" className="btn btn-primary">
          Discuss Your Project <ArrowRight size={16} />
        </a>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card glass-card reveal" style={{ animationDelay: `${index * 60}ms` }}>
            <div className="service-icon-wrapper">
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="reveal" style={{ marginTop: '2.5rem' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 600 }}>Client Work Highlights</h3>
        <div className="services-grid">
          <div className="service-card glass-card">
            <div className="impact-pill" style={{ marginBottom: '0.5rem' }}>NDA / In Production</div>
            <h3 className="service-title">SaaS Analytics Dashboard</h3>
            <p className="service-desc">Responsive analytics platform with real-time data filtering, CSV export, and RBAC.</p>
            <div style={{ marginTop: '0.75rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>Next.js · TypeScript · Chart.js</div>
          </div>
          <div className="service-card glass-card">
            <div className="impact-pill" style={{ marginBottom: '0.5rem' }}>Active Development</div>
            <h3 className="service-title">E-Commerce Floral Shop</h3>
            <p className="service-desc">Integrating custom bouquet editor functionality into retail checkout flows.</p>
            <div style={{ marginTop: '0.75rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>React · Zustand · Fabric.js</div>
          </div>
        </div>
        <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <Lightbulb size={16} className="accent-link" style={{ flexShrink: 0 }} />
          <span>Some client projects are protected under NDAs. Reach out directly for references.</span>
        </div>
      </div>
    </section>
  );
}
