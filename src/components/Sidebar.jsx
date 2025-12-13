import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

import selfImg from '../assets/images/self.jpg';

const Sidebar = ({ activeTab, onTabChange }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const tabs = [
    { id: 'home', icon: 'fa fa-home', label: 'Home' },
    { id: 'experience', icon: 'fa fa-briefcase', label: 'Experience' },
    { id: 'education', icon: 'fa fa-graduation-cap', label: 'Education' },
    { id: 'publications', icon: 'fa fa-book', label: 'Publications' },
    { id: 'projects', icon: 'fa fa-cubes', label: 'Projects' },
    { id: 'skills', icon: 'fa fa-code', label: 'Skills' },
    { id: 'contact', icon: 'fa fa-envelope-o', label: 'Contact' }
  ];

  return (

    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`glass-panel sidebar-glass-panel ${isMobileMenuOpen ? 'mobile-open' : 'mobile-closed'}`}
    >

      <div className="sidebar-mobile-header">

        <div className="profile-section" style={{ textAlign: 'center' }}>
          <div style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            overflow: 'hidden',
            margin: '0 auto 1.5rem',
            border: '2px solid var(--accent-primary)',
            boxShadow: '0 0 20px var(--accent-primary)'
          }}>
            <img src={selfImg} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
            <span style={{ color: 'var(--accent-primary)' }}>S</span>ai <span style={{ color: 'var(--accent-primary)' }}>K</span>aushik <span style={{ color: 'var(--accent-primary)' }}>S</span>udharkaran
          </h3>
          <p style={{ fontFamily: 'var(--font-code)', fontSize: '1rem', color: 'var(--text-secondary)' }}>
            &lt;HPC/&gt;
          </p>
        </div>

        <div className="mobile-toggle-btn">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <i className={`fa ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      <div className="sidebar-collapsible-content">

        <nav className="sidebar-nav">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                onTabChange(tab.id);
                setIsMobileMenuOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px',
                padding: '12px 15px',
                borderRadius: '12px',
                width: '100%',
                textAlign: 'center',
                background: activeTab === tab.id ? 'var(--accent-primary)' : 'transparent',
                color: activeTab === tab.id ? '#fff' : 'var(--text-secondary)',
                fontWeight: activeTab === tab.id ? '600' : '400',
                transition: 'all 0.2s ease'
              }}
            >
              <i className={`${tab.icon}`} style={{ width: '20px', textAlign: 'center' }}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button onClick={toggleTheme} style={{
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '0.9rem'
          }}>
            {theme === 'dark' ? <i className="fa fa-moon-o"></i> : <i className="fa fa-sun-o"></i>}
            <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
