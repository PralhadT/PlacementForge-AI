import React from 'react';
import { Bot, User, Zap } from 'lucide-react';
import './AIShowcase.css';

const AIShowcase = () => {
  return (
    <section className="ai-showcase">
      <div className="container">
        <div className="ai-layout">
          <div className="ai-content">
            <h2 className="section-title">Interact with <span className="text-gradient">AI Mentors</span></h2>
            <p className="section-subtitle" style={{ marginLeft: 0 }}>
              Experience real-time interview feedback, personalized skill gap analysis, and instant resume reviews.
            </p>
            
            <ul className="ai-features-list">
              <li><Zap size={20} className="list-icon" /> Instant Resume Scoring (ATS)</li>
              <li><Zap size={20} className="list-icon" /> Live Audio/Video Mock Interviews</li>
              <li><Zap size={20} className="list-icon" /> Actionable Improvement Feedback</li>
            </ul>
          </div>
          
          <div className="ai-visual">
            <div className="chat-ui glass">
              <div className="chat-header">
                <Bot size={24} className="bot-icon" />
                <div>
                  <h4>PlacementForge AI</h4>
                  <span className="status-online">Online</span>
                </div>
              </div>
              <div className="chat-body">
                <div className="message bot-message">
                  <p>I've analyzed your resume. Your ATS score is 72/100. Let's work on improving the "Experience" section.</p>
                </div>
                <div className="message user-message">
                  <p>Sure, what should I add?</p>
                </div>
                <div className="message bot-message">
                  <p>Try using stronger action verbs and quantify your achievements. For example, instead of "fixed bugs", use "reduced bug rate by 20%".</p>
                </div>
              </div>
              <div className="chat-input-area">
                <div className="chat-input">Type your message...</div>
                <div className="chat-send"><Zap size={16}/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIShowcase;
