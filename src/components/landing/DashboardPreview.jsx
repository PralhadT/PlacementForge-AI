import React from 'react';
import { Target, TrendingUp, Code, Brain } from 'lucide-react';
import './DashboardPreview.css';

const DashboardPreview = () => {
  return (
    <section className="dashboard-preview-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Your <span className="text-gradient">Command Center</span></h2>
          <p className="section-subtitle">Track your progress across all domains with our premium student dashboard.</p>
        </div>
        
        <div className="mock-dashboard box-3d">
          <div className="mock-sidebar">
            <div className="mock-logo">PlacementForge</div>
            <div className="mock-nav-item active"><Target size={18}/> Overview</div>
            <div className="mock-nav-item"><Code size={18}/> DSA Tracker</div>
            <div className="mock-nav-item"><Brain size={18}/> Interviews</div>
          </div>
          <div className="mock-main">
            <div className="mock-header">
              <div className="mock-search box-3d-inset">Search topics...</div>
              <div className="mock-profile">JD</div>
            </div>
            <div className="mock-content">
              <div className="mock-widgets-top">
                <div className="mock-widget stat box-3d">
                  <span className="stat-icon"><TrendingUp size={24}/></span>
                  <div className="stat-info">
                    <h4>Current Streak</h4>
                    <h2>14 Days</h2>
                  </div>
                </div>
                <div className="mock-widget stat box-3d">
                  <span className="stat-icon code"><Code size={24}/></span>
                  <div className="stat-info">
                    <h4>Problems Solved</h4>
                    <h2>128 <span className="stat-total">/ 400</span></h2>
                  </div>
                </div>
                <div className="mock-widget stat box-3d">
                  <span className="stat-icon brain"><Brain size={24}/></span>
                  <div className="stat-info">
                    <h4>Readiness</h4>
                    <h2 className="text-success">High</h2>
                  </div>
                </div>
              </div>
              <div className="mock-widgets-main">
                <div className="mock-widget chart box-3d">
                  <h4 style={{marginBottom: '1rem'}}>Activity Heatmap</h4>
                  <div className="heatmap-grid">
                    {Array.from({length: 40}).map((_, i) => (
                      <div key={i} className={`heat-cell level-${Math.floor(Math.random() * 4)}`}></div>
                    ))}
                  </div>
                </div>
                <div className="mock-widget list box-3d">
                  <h4 style={{marginBottom: '1rem'}}>Recent Progress</h4>
                  <ul className="progress-list">
                    <li><span className="dot success"></span> Arrays & Hashing</li>
                    <li><span className="dot warning"></span> Dynamic Programming</li>
                    <li><span className="dot danger"></span> Graph Traversal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
