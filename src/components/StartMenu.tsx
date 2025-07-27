import { App } from './Taskbar';

type StartMenuProps = {
  isOpen: boolean;
  apps: App[];
  onAppClick: (appId: string) => void;
  onClose: () => void;
};

export function StartMenu({ isOpen, apps, onAppClick, onClose }: StartMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="start-menu" onClick={(e) => e.stopPropagation()}>
      <div className="start-menu-header">
        <h2>Applications</h2>
      </div>
      <div className="start-menu-apps">
        {apps.map((app) => (
          <div 
            key={app.id} 
            className="start-menu-app"
            onClick={() => {
              onAppClick(app.id);
              onClose();
            }}
          >
            <img src={app.icon} alt={app.label} className="start-menu-app-icon" />
            <span className="start-menu-app-label">{app.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
