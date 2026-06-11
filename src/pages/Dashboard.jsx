import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Code, 
  Target, 
  Brain, 
  FileText, 
  Video, 
  Compass,
  User,
  Settings,
  Bell,
  Search,
  LogOut
} from 'lucide-react';
import Card from '../components/ui/Card';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userData, setUserData] = useState(null);
  const [stats, setStats] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      const userStr = localStorage.getItem('user');
      if (!userStr) {
        navigate('/login');
        return;
      }
      
      const user = JSON.parse(userStr);
      try {
        const response = await fetch(`http://localhost:5000/api/dashboard/${user.id}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data.user);
          setStats(data.stats);
        }
      } catch (err) {
        console.error("Failed to fetch stats", err);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const navItems = [
    { id: 'dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { id: 'dsa', icon: <Code size={20} />, label: 'DSA Tracker' },
    { id: 'aptitude', icon: <Target size={20} />, label: 'Aptitude' },
    { id: 'interview', icon: <Brain size={20} />, label: 'Interview Prep' },
    { id: 'resume', icon: <FileText size={20} />, label: 'Resume Analyzer' },
    { id: 'mock', icon: <Video size={20} />, label: 'Mock Interviews' },
    { id: 'roadmap', icon: <Compass size={20} />, label: 'Career Roadmap' },
  ];

  if (!userData || !stats) {
    return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Dashboard...</div>;
  }

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h3>PlacementForge AI</h3>
        </div>
        
        <nav className="sidebar-nav">
          {navItems.map(item => (
            <button 
              key={item.id}
              className={`nav-btn ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="nav-btn">
            <User size={20} />
            <span>Profile</span>
          </button>
          <button className="nav-btn">
            <Settings size={20} />
            <span>Settings</span>
          </button>
          <button className="nav-btn" onClick={handleLogout} style={{ color: 'var(--status-danger)' }}>
            <LogOut size={20} />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header box-3d">
          <div className="search-bar box-3d-inset">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search problems, companies..." />
          </div>
          <div className="header-actions">
            <button className="icon-btn">
              <Bell size={20} />
              <span className="badge-dot"></span>
            </button>
            <div className="user-avatar box-3d-inset">
              <User size={20} />
            </div>
          </div>
        </header>

        <div className="dashboard-content">
          <div className="dashboard-welcome">
            <h2>Welcome back, {userData.full_name || userData.email.split('@')[0]}!</h2>
            <p>Your interview readiness score is <strong className="text-success">{stats.interview_readiness}%</strong>. Keep going!</p>
          </div>

          <div className="dashboard-widgets-grid">
            <Card className="widget-card">
              <h4>Daily Streak</h4>
              <div className="streak-display">
                <span className="streak-num">{stats.streak_days}</span>
                <span className="streak-text">Days</span>
              </div>
            </Card>
            
            <Card className="widget-card">
              <h4>DSA Progress</h4>
              <div className="progress-display">
                <div className="progress-bar-bg box-3d-inset">
                  <div className="progress-bar-fill" style={{ width: `${(stats.dsa_solved / stats.dsa_total) * 100}%` }}></div>
                </div>
                <span>{stats.dsa_solved} / {stats.dsa_total} Solved</span>
              </div>
            </Card>

            <Card className="widget-card">
              <h4>Resume Strength</h4>
              <div className="progress-display">
                <div className="progress-bar-bg box-3d-inset">
                  <div className="progress-bar-fill success" style={{ width: `${stats.ats_score}%` }}></div>
                </div>
                <span>{stats.ats_score} / 100 ATS Score</span>
              </div>
            </Card>

            <Card className="widget-card">
              <h4>Aptitude Score</h4>
              <div className="progress-display">
                <div className="progress-bar-bg box-3d-inset">
                  <div className="progress-bar-fill warning" style={{ width: '55%' }}></div>
                </div>
                <span>Intermediate</span>
              </div>
            </Card>
          </div>

          <div className="dashboard-main-sections">
            <Card className="activity-section">
              <h3 style={{ marginBottom: '1rem' }}>Weekly Goals</h3>
              <ul className="goals-list">
                <li>
                  <input type="checkbox" checked readOnly className="box-3d-inset" />
                  <span>Solve 10 Medium LeetCode problems</span>
                </li>
                <li>
                  <input type="checkbox" className="box-3d-inset" />
                  <span>Complete AI Mock Interview</span>
                </li>
                <li>
                  <input type="checkbox" className="box-3d-inset" />
                  <span>Revise OS & DBMS Concepts</span>
                </li>
              </ul>
            </Card>

            <Card className="recommendation-section">
              <h3 style={{ marginBottom: '1rem' }}>AI Recommendations</h3>
              <div className="recommendation-item box-3d-inset">
                <div className="rec-icon box-3d"><Code size={16} /></div>
                <div>
                  <h5>Review Dynamic Programming</h5>
                  <p>You struggled with "Coin Change" yesterday.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
