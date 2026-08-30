import { Sparkles, ArrowRight, Laptop, Paintbrush, Zap, FileCode } from 'lucide-react';

export default function Freelance() {
  const services = [
    {
      title: "Custom Web App Development",
      desc: "Building high-performance React and Next.js applications tailored to specific business workflows, incorporating role-based access, API routing, and state management.",
      icon: <Laptop className="service-icon" size={24} />
    },
    {
      title: "Figma-to-React Engineering",
      desc: "Translating static designs (Figma, Canva, Adobe XD) into pixel-perfect, accessible, and responsive components with smooth animations and layout transitions.",
      icon: <Paintbrush className="service-icon" size={24} />
    },
    {
      title: "Speed & Performance Auditing",
      desc: "Diagnosing slow rendering pipelines, setting up lazy loading, code-splitting, query memoization, and optimizing bundles to dramatically improve lighthouse scores.",
      icon: <Zap className="service-icon" size={24} />
    },
    {
      title: "API & Backend Integrations",
      desc: "Connecting React applications with Node.js/Express servers, MySQL/MongoDB databases, and standard third-party services (Auth, Payment Gateways, CMS).",
      icon: <FileCode className="service-icon" size={24} />
    }
  ];

  return (
    <section id="freelance" className="section">
      <div className="reveal">
        <h2>Freelancing & Collaborations</h2>
        <p className="section-description">
          Need a dedicated developer to bring a project to life or accelerate your product development? I provide professional frontend freelance services.
        </p>
      </div>

      <div className="freelance-layout">
        {/* Availability Card */}
        <div className="availability-card glass-card reveal">
          <div className="availability-header">
            <span className="availability-badge">● Available for Hire</span>
            <h3 className="availability-title">Let's build something beautiful together</h3>
          </div>
          <p className="availability-text">
            I work closely with clients to understand product requirements, draft structured code, and deploy fast, accessible frontends. Whether you need a simple portfolio, a complex SaaS dashboard, or performance improvements, I'm ready to collaborate.
          </p>
          <div className="availability-cta">
            <a href="#contact" className="btn btn-primary">
              Discuss Your Project <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass-card reveal" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Freelance Projects Showcase - Placeholder */}
      <div className="freelance-showcase-section reveal">
        <h3 className="showcase-subtitle">Freelance Works & Deployments</h3>
        <div className="freelance-showcase-grid">
          <div className="project-placeholder-card glass-card">
            <div className="placeholder-badge">NDA / In Production</div>
            <div className="placeholder-content">
              <Sparkles size={28} className="placeholder-sparkle" />
              <h4>SaaS Analytics Platform</h4>
              <p>Built a responsive dashboard featuring data filtering, CSV exports, and dynamic role management.</p>
              <span className="placeholder-tech">Next.js · TypeScript · Chart.js</span>
            </div>
          </div>
          <div className="project-placeholder-card glass-card">
            <div className="placeholder-badge">Active Development</div>
            <div className="placeholder-content">
              <Sparkles size={28} className="placeholder-sparkle" />
              <h4>E-Commerce Floral Shop</h4>
              <p>Integrating Bloombox bouquet editor functionality directly into a customized retail shopping cart system.</p>
              <span className="placeholder-tech">React · Zustand · Fabric.js</span>
            </div>
          </div>
        </div>
        <div className="showcase-note">
          <p>
            💡 <em>Note: Some client projects are protected by NDAs and cannot be shown publicly. If you would like to discuss similar case studies, please reach out directly.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
