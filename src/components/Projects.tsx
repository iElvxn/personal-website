import exitBtn from "../assets/exit.png";
import mbtify from "../assets/mbtify.png"
import pantryPal from "../assets/pantry-pal.png"
import studyKitty from "../assets/studykitty.png"

type Project = {
    title: string
    description: string
    tech: string[]
    link?: string
    image: string
}

const PROJECTS: Project[] = [
    {
        title: 'Study Kitty',
        description: 'Built and deployed a full-stack mobile productivity app with gamified focus sessions using React Native and Expo. Designed a serverless backend with AWS services, reducing infrastructure costs by 40%. Integrated Clerk authentication for secure JWT verification and seamless login. Enhanced UX with local caching and optimistic UI updates accelerating app responsiveness by 30%.',
        tech: [ "TypeScript", "React Native", "AWS (API Gateway, Lambda, DynamoDB, S3)", "Expo"],
        link: 'https://yourwebsite.com',
        image: studyKitty
    },
    {
        title: 'Digit Classification AI',
        description: 'Developed a neural network in Python with TensorFlow and NumPy to classify handwritten digits with 97% accuracy. Preprocessed images for optimal results and used OpenCV and Matplotlib for real-time digit prediction and visualization.',
        tech: ["Python", "TensorFlow", "NumPy", "OpenCV", "Matplotlib"],
        link: 'https://yourwebsite.com',
        image: '/personal-website-screenshot.png'
    },
    {
        title: 'PantryPal',
        description: 'Allows users to manage their pantry by viewing the ingredients in their pantry as well as adding new ingredients and saving/retrieving them via MongoDB. Integrated OpenAi so that users could talk with their Pantry Pal and get personalized recipes.',
        tech: ["JavaScript", "Next.js", "React.js", "Firebase", "GCP", "OpenAI", "HTML", "CSS"],
        link: 'https://pantry-pal-production-e307.up.railway.app/',
        image: pantryPal
    },
    {
        title: 'MBTIFY',
        description: 'A web app built with React and the Spotify API. Users could log in with their Spotify account and have their data analyzed to determine their MBTI personality type through algorithms, and visualized users’ Spotify data to show what determined their MBTI such as the level of valence or energy of their songs. Over 30+ users after firstmonth of deploying.',
        tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Spotify API'],
        link: 'https://mbtify.pages.dev/',
        image: mbtify
    },
    // Add more projects here...
]

export function Projects({ onClick }) {
    return (
        <>
            <div className="navbar">
                <button className="exit-btn" onClick={onClick}>
                    <img className="exit-img" src={exitBtn} />
                </button>
            </div>
            <div className="projects-container">
                <div className="projects-section">
                    <h1 className="projects-title">PROJECTS</h1>
                    {PROJECTS.map((project, i) => (
                        <div className={`project-row${i % 2 === 1 ? ' reverse' : ''}`} key={project.title}>
                            <div className="project-info">
                                <h2 className="project-name">{project.title}</h2>
                                <div className="project-tech">{project.tech.join(', ')}</div>
                                <p className="project-desc">{project.description}</p>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                        View Project
                                    </a>
                                )}
                            </div>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}