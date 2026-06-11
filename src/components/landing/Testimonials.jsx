import React from 'react';
import Card from '../ui/Card';

const Testimonials = () => {
  const testimonials = [
    { name: "Rahul S.", role: "SDE at Amazon", content: "PlacementForge's AI mock interviews were exactly what I needed. The feedback on my communication and technical answers helped me crack my dream company." },
    { name: "Sneha M.", role: "Data Scientist at Google", content: "The Resume Analyzer pointed out exactly why I wasn't getting shortlisted. Fixed those issues, and my interview call rate skyrocketed." },
    { name: "Arjun K.", role: "Final Year Student", content: "The DSA roadmap is structured so perfectly. Tracking my LeetCode progress inside the dashboard keeps me motivated every day." }
  ];

  return (
    <section style={{ padding: '100px 0' }}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Trusted by <span className="text-gradient">Top Students</span></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {testimonials.map((t, i) => (
            <Card key={i} hoverEffect>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>"{t.content}"</p>
              <div>
                <h4 style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{t.name}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--accent-primary)' }}>{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
