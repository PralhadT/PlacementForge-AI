import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Code, Brain, Target } from 'lucide-react';
import Button from '../ui/Button';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">
            <Sparkles size={16} className="badge-icon" />
            <span>AI-Powered Preparation</span>
          </div>
          <h1 className="hero-title">
            Crack Placements with <br />
            <span className="text-gradient">Intelligent Preparation</span>
          </h1>
          <p className="hero-subtitle">
            Master DSA, Aptitude, Interviews, Resume Building, and Career Planning from one premium platform designed for modern engineering students.
          </p>
          <div className="hero-actions">
            <Button size="lg" className="hero-btn-primary" onClick={() => navigate('/login')}>
              Start Preparing <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </Button>
            <Button variant="secondary" size="lg" onClick={() => navigate('/dashboard')}>
              Explore Features
            </Button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Questions</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Companies</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>AI Learning</p>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="isometric-container">
            <div className="dashboard-preview-3d box-3d">
              <div className="preview-header">
                <div className="dots">
                  <span></span><span></span><span></span>
                </div>
                <div className="preview-title">PlacementForge AI</div>
              </div>
              <div className="preview-body">
                <div className="preview-sidebar box-3d-inset">
                  <Code size={16} className="side-icon active" />
                  <Brain size={16} className="side-icon" />
                  <Target size={16} className="side-icon" />
                </div>
                <div className="preview-content">
                  <div className="preview-top-row">
                    <div className="preview-stat-card box-3d-inset">
                      <div className="stat-value text-success">85%</div>
                      <div className="stat-label">ATS Score</div>
                    </div>
                    <div className="preview-stat-card box-3d-inset">
                      <div className="stat-value text-gradient">24</div>
                      <div className="stat-label">Day Streak</div>
                    </div>
                  </div>
                  <div className="preview-main-card box-3d-inset">
                    <div className="mock-chart">
                      <div className="bar" style={{height: '40%'}}></div>
                      <div className="bar" style={{height: '70%'}}></div>
                      <div className="bar" style={{height: '50%'}}></div>
                      <div className="bar" style={{height: '90%'}}></div>
                      <div className="bar" style={{height: '60%'}}></div>
                    </div>
                    <div className="mock-code">
                      <code>def two_sum(nums, target):</code>
                      <code>  seen = {}</code>
                      <code>  for i, num in enumerate(nums):</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
