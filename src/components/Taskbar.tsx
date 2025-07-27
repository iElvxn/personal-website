import { useEffect, useState, useRef } from 'react';

import bmoIcon from '../assets/bmo.png';

type App = {
  id: string;
  label: string;
  icon: string;
  component?: React.ComponentType<any>;
};

type TaskbarProps = {
  apps: App[];
  openAppId: string | null;
  onAppClick: (appId: string) => void;
  onShutdown?: () => void;
  onRestart?: () => void;
  onSleep?: () => void;
};

export function Taskbar({ apps, openAppId, onAppClick, onShutdown, onRestart, onSleep }: TaskbarProps) {
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [showPowerOptions, setShowPowerOptions] = useState(false);
  const startMenuRef = useRef<HTMLDivElement>(null);
  const powerButtonRef = useRef<HTMLButtonElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isStartMenuOpen && startMenuRef.current && !startMenuRef.current.contains(event.target as Node)) {
        setIsStartMenuOpen(false);
        setShowPowerOptions(false);
      } else if (showPowerOptions && powerButtonRef.current && !powerButtonRef.current.contains(event.target as Node)) {
        setShowPowerOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isStartMenuOpen, showPowerOptions]);

  // Update time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleBmoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsStartMenuOpen(!isStartMenuOpen);
    setShowPowerOptions(false);
  };

  const handleAppSelect = (appId: string) => {
    onAppClick(appId);
    setIsStartMenuOpen(false);
    setShowPowerOptions(false);
  };

  const handlePowerButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPowerOptions(!showPowerOptions);
  };

  const handlePowerOptionClick = (handler: (() => void) | undefined) => (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsStartMenuOpen(false);
    setShowPowerOptions(false);
    if (handler) handler();
  };

  return (
    <>
      <div className='taskbar'>
        <div className="taskbar-apps">
          <div 
            className={`taskbar-app ${isStartMenuOpen ? 'active' : ''}`}
            onClick={handleBmoClick}
          >
            <img src={bmoIcon} alt="BMO" />
          </div>
          {apps.map((app) => (
            <div 
              key={app.id} 
              className={`taskbar-app ${openAppId === app.id ? 'active' : ''}`}
              onClick={() => onAppClick(app.id)}
            >
              <img src={app.icon} alt={app.label} />
            </div>
          ))}
        </div>
        <div className="taskbar-time">
          {currentTime}
        </div>
      </div>
      
      {isStartMenuOpen && (
        <div className="start-menu" onClick={(e) => e.stopPropagation()} ref={startMenuRef}>
          <div className="pixel-corners">
            <div className="pixel-corner top-left"></div>
            <div className="pixel-corner top-right"></div>
            <div className="pixel-corner bottom-left"></div>
            <div className="pixel-corner bottom-right"></div>
          </div>
          <div className="start-menu-header">
            <h2>APPLICATIONS</h2>
          </div>
          <div className="start-menu-apps">
            {apps.map((app) => (
              <div 
                key={app.id} 
                className="start-menu-app"
                onClick={() => handleAppSelect(app.id)}
              >
                <img src={app.icon} alt={app.label} className="start-menu-app-icon" />
                <span className="start-menu-app-label">{app.label}</span>
              </div>
            ))}
          </div>
          <div className="start-menu-footer">
            <div className="user-profile">
              <div className="user-avatar">👤</div>
              <span className="username">User</span>
            </div>
            <button 
              ref={powerButtonRef}
              className="power-button" 
              onClick={handlePowerButtonClick}
              aria-expanded={showPowerOptions}
              aria-label="Power options"
            >
              <span className="power-icon">⏻</span>
              {showPowerOptions && (
                <div className="power-options">
                  <button onClick={handlePowerOptionClick(onRestart)}>
                    <span className="power-option-icon">↻</span>
                    <span>Restart</span>
                  </button>
                  <button onClick={handlePowerOptionClick(onShutdown)}>
                    <span className="power-option-icon">⏻</span>
                    <span>Shut down</span>
                  </button>
                </div>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Taskbar;
