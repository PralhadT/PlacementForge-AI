import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const navigate = useNavigate();
  
  return (
    <section style={{ padding: '120px 0', textAlign: 'center', position: 'relative' }}>
      <div className="orb orb-3" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.3 }}></div>
      <div className="container">
        <div className="glass" style={{ padding: '4rem 2rem', borderRadius: 'var(--radius-lg)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Your Dream Placement <span className="text-gradient">Starts Today</span></h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
              Join thousands of students who have transformed their careers with our AI-powered preparation platform.
            </p>
            <Button size="lg" variant="primary" onClick={() => navigate('/login')}>
              Start Free <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
