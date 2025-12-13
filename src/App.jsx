import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';

function AppContent() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home />;
      case 'experience': return <Experience />;
      case 'education': return <Education />;
      case 'skills': return <Skills />;
      case 'projects': return <Projects />;
      case 'publications': return <Publications />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div id="app-root" className="app-container">

      <aside className="sidebar-wrapper">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      </aside>

      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
