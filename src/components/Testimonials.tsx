import { Quote, Sparkles } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Divya is an outstanding frontend developer. Her attention to detail in translating UI mockups into responsive, fast-loading React components exceeded our expectations.",
      author: "Engineering Lead",
      role: "Sevysis Pvt. Ltd.",
      highlight: "+35% Performance Optimization"
    },
    {
      quote: "Working with Divya on hackathon projects was fantastic. She writes clean, modular TypeScript code and consistently delivers production-ready components under pressure.",
      author: "Hackathon Teammate",
      role: "SIH 2025 Semi-Finalist Team",
      highlight: "National Hackathon Finalist"
    },
    {
      quote: "Delivered our custom web application workflow on schedule with clean state management and intuitive interface interactions. Highly recommended for React projects.",
      author: "Client Project Manager",
      role: "Freelance SaaS Client",
      highlight: "Pixel-Perfect Delivery"
    }
  ];

  return (
    <section id="testimonials" className="section">
      <div className="reveal">
        <div className="section-tag">Endorsements</div>
        <h2>Recommendations & Impact</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
        {testimonials.map((item, idx) => (
          <SpotlightCard key={idx} className="reveal">
            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
              <div>
                <Quote size={20} className="accent-link" style={{ marginBottom: '0.75rem', opacity: 0.8 }} />
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                  "{item.quote}"
                </p>
              </div>

              <div style={{ marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid var(--bg-shade)' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>{item.author}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.role}</div>
                <div className="impact-pill" style={{ marginTop: '0.5rem', width: 'fit-content' }}>
                  <Sparkles size={11} style={{ display: 'inline', marginRight: '4px' }} />
                  {item.highlight}
                </div>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
