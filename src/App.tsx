import { useState } from 'react'

import './App.css'
import { AppIcon } from './components/AppIcon'
import aboutIcon from './assets/about.png'
import githubIcon from './assets/github.png'
import experienceIcon from './assets/experience.png'
import projectsIcon from './assets/projects.png'
import resumeIcon from './assets/resume.png'
import contactIcon from './assets/contact.png'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Resume } from './components/Resume'
import { GitHub } from './components/GitHub'
import { Contact } from './components/Contact'

function App() {
  const [openAppId, setOpenAppId] = useState<string | null>(null)

  const APPS = [
    { id: 'about', label: 'About', icon: aboutIcon, component: About },
    { id: 'projects', label: 'Projects', icon: projectsIcon, component: Projects},
    { id: 'experience', label: 'Experience', icon: experienceIcon, component: Experience },
    { id: 'resume', label: 'Resume', icon: resumeIcon, component: Resume },
    { id: 'github', label: 'GitHub', icon: githubIcon, component: GitHub },
    { id: 'contact', label: 'Contact', icon: contactIcon, component: Contact }
  ]

  const openApp = APPS.find(app => app.id === openAppId)

  return (
    <>
      <div className='desktop-container'>
        <div className='app-container'>
          {APPS.map(app => (
            <AppIcon
              key={app.id}
              icon={app.icon}
              label={app.label}
              onClick={() => { setOpenAppId(app.id) }}
            />
          ))}
        </div>
      </div>

      <div className='taskbar'>
        taskbar
      </div>

      {openApp && (
        <div className="app-window">
          <button onClick={() => setOpenAppId(null)}>Close</button>
          <openApp.component/>
        </div>
      )}
    </>

  )
}

export default App
