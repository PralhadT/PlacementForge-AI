import React from 'react';
import { Target, Brain, FileText, Video, Compass, Code } from 'lucide-react';
import Card from '../ui/Card';
import './FeaturesGrid.css';

const features = [
  {
    icon: <Code size={24} className="feature-icon" />,
    title: 'DSA Tracker',
    description: 'Track solved problems, monitor your LeetCode progress, and master topics step-by-step.',
  },
  {
    icon: <Target size={24} className="feature-icon" />,
    title: 'Aptitude Practice',
    description: 'Extensive questions for Quantitative, Logical Reasoning, and Verbal Ability.',
  },
  {
    icon: <Brain size={24} className="feature-icon" />,
    title: 'Interview Preparation',
    description: 'Curated technical and company-specific questions with AI feedback.',
  },
  {
    icon: <FileText size={24} className="feature-icon" />,
    title: 'Resume Analyzer',
    description: 'AI-driven resume review, ATS scoring, and targeted improvement suggestions.',
  },
  {
    icon: <Video size={24} className="feature-icon" />,
    title: 'Mock Interview Simulator',
    description: 'AI HR interviews, behavioral questions, and communication evaluation.',
  },
  {
    icon: <Compass size={24} className="feature-icon" />,
    title: 'Career Roadmap Generator',
    description: 'Personalized preparation plans, weekly goals, and skill recommendations.',
  }
];

const FeaturesGrid = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Everything You Need to <span className="text-gradient">Succeed</span></h2>
          <p className="section-subtitle">A complete ecosystem powered by artificial intelligence to accelerate your placement preparation.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <Card key={index} hoverEffect className="feature-card">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
