import React from 'react';
import './HowItWorks.css';

const steps = [
  { num: '01', title: 'Create Profile', desc: 'Sign up and set your baseline skills.' },
  { num: '02', title: 'Select Target Role', desc: 'Choose from Software Engineer, Data Scientist, etc.' },
  { num: '03', title: 'AI Generates Roadmap', desc: 'Get a personalized plan tailored to your goal.' },
  { num: '04', title: 'Practice Daily', desc: 'Solve DSA, take mock interviews, and build skills.' },
  { num: '05', title: 'Track Progress', desc: 'Monitor your growth through our premium dashboard.' },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Your Path to <span className="text-gradient">Success</span></h2>
        </div>
        
        <div className="timeline-container">
          {steps.map((step, index) => (
            <div key={index} className="timeline-step">
              <div className="step-marker">
                <span className="step-num">{step.num}</span>
              </div>
              <div className="step-content glass">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
