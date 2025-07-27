import { useState } from 'react'
import './App.css'
import { AppIcon } from './components/AppIcon'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Resume } from './components/Resume'
import { Taskbar } from './components/Taskbar'
import aboutIcon from './assets/about.png'
import projectsIcon from './assets/projects.png'
import experienceIcon from './assets/experience.png'
import resumeIcon from './assets/resume.png'
import githubIcon from './assets/github.png'

function App() {
  const [openAppId, setOpenAppId] = useState<string | null>(null);
  const [isShuttingDown, setIsShuttingDown] = useState(false);
  const [isRestarting, setIsRestarting] = useState(false);

  const APPS = [
    { id: 'about', label: 'about.txt', icon: aboutIcon, component: About },
    { id: 'projects', label: 'Projects', icon: projectsIcon, component: Projects },
    { id: 'experience', label: 'Experience', icon: experienceIcon, component: Experience },
    { id: 'resume', label: 'resume.pdf', icon: resumeIcon, component: Resume },
    { id: 'github', label: 'GitHub', icon: githubIcon },
  ];

  const handleAppClick = (appId: string) => {
    const app = APPS.find((a) => a.id === appId);
    if (app) {
      if (app.id === 'github') {
        window.open('https://github.com/iElvxn', '_blank');
      } else {
        setOpenAppId(appId);
      }
    }
  };

  const handleShutdown = () => {
    setIsShuttingDown(true);
    
    // Close any open apps
    setOpenAppId(null);
        
    // After 1.5 seconds, start fading out
    setTimeout(() => {
      const overlay = document.querySelector('.power-overlay') as HTMLElement;
      if (overlay) {
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 1.5s ease-in-out';
      }
    }, 1500);

    // After 3 seconds, reset everything
    setTimeout(() => {
      setIsShuttingDown(false);
      // Reset the opacity for the next time
      const overlay = document.querySelector('.power-overlay') as HTMLElement;
      if (overlay) {
        overlay.style.opacity = '1';
        overlay.style.transition = 'none';
      }
    }, 3000);
  };

  const handleRestart = () => {
    setIsRestarting(true);
    
    // After 1.5 seconds, start fading out
    setTimeout(() => {
      const overlay = document.querySelector('.power-overlay') as HTMLElement;
      if (overlay) {
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 1.5s ease-in-out';
      }
    }, 1500);

    // After 3 seconds, reset everything
    setTimeout(() => {
      setIsRestarting(false);
      // Reset the opacity for the next time
      const overlay = document.querySelector('.power-overlay') as HTMLElement;
      if (overlay) {
        overlay.style.opacity = '1';
        overlay.style.transition = 'none';
      }
    }, 3000);
  };

  // Get the currently open app component
  const openApp = APPS.find((app) => app.id === openAppId);
  const AppComponent = openApp?.component;

  return (
    <div className="app">
      <div className='desktop-container'>
        <div className="app-container">
          {APPS.map((app) => (
            <AppIcon
              key={app.id}
              label={app.label}
              icon={app.icon}
              onClick={() => handleAppClick(app.id)}
            />
          ))}
        </div>
      </div>

      <Taskbar 
        apps={APPS} 
        openAppId={openAppId} 
        onAppClick={handleAppClick}
        onShutdown={handleShutdown}
        onRestart={handleRestart}
      />

      {AppComponent && (
        <div className="app-window">
          <AppComponent onClick={() => setOpenAppId(null)} />
        </div>
      )}

      {/* Shutdown/Restart Overlay */}
      {(isShuttingDown || isRestarting) && (
        <div className="power-overlay">
          <div className="power-message">
            {isShuttingDown ? 'Shutting down...' : 'Restarting...'}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
