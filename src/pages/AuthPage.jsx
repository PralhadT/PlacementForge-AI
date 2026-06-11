import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './AuthPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ full_name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    const payload = isLogin 
      ? { email: formData.email, password: formData.password }
      : formData;

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Save user info (in real app, save JWT token here)
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/dashboard');
      } else {
        setError(data.error || 'Authentication failed');
      }
    } catch (err) {
      setError('Failed to connect to the server. Is the Flask backend running?');
    }
  };

  return (
    <div className="auth-container">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      
      <Card className="auth-card">
        <div className="auth-header text-center">
          <h2 className="auth-title">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p className="auth-subtitle">
            {isLogin ? 'Log in to continue your preparation' : 'Start your journey to dream placements'}
          </p>
        </div>

        {error && <div style={{ color: 'var(--status-danger)', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group">
              <User size={20} className="input-icon" />
              <input type="text" name="full_name" placeholder="Full Name" className="premium-input box-3d-inset" value={formData.full_name} onChange={handleInputChange} required={!isLogin} />
            </div>
          )}
          
          <div className="input-group">
            <Mail size={20} className="input-icon" />
            <input type="email" name="email" placeholder="Email Address" className="premium-input box-3d-inset" value={formData.email} onChange={handleInputChange} required />
          </div>
          
          <div className="input-group">
            <Lock size={20} className="input-icon" />
            <input type="password" name="password" placeholder="Password" className="premium-input box-3d-inset" value={formData.password} onChange={handleInputChange} required />
          </div>

          {isLogin && (
            <div className="auth-forgot">
              <a href="#">Forgot Password?</a>
            </div>
          )}

          <Button type="submit" className="w-full mt-4" size="lg">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </Button>
        </form>

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <div className="auth-social">
          <Button variant="secondary" className="w-full social-btn">
            Continue with Google
          </Button>
        </div>

        <div className="auth-toggle text-center">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button className="btn-link" onClick={() => { setIsLogin(!isLogin); setError(''); }}>
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default AuthPage;
