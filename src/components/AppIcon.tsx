type AppIconProps = {
    icon: string
    label: string
    onClick: () => void
  }

export function AppIcon({ icon, label, onClick }: AppIconProps) {
    return (
      <div className='app-icon' onClick={onClick}>
        <img className='app-icon-img' src={icon}/>
        <div className="app-icon-label">{label}</div>
      </div>
    )
  }