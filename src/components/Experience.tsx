import exitBtn from "../assets/exit.png";

type ExperienceItem = {
    role: string;
    company: string;
    duration: string;
    description: string[];
    tech: string[];
    link?: string;
}

const EXPERIENCES: ExperienceItem[] = [
    {
        role: 'Teaching Assistant',
        company: 'Stony Brook University – Data Structures & Algorithms',
        duration: 'Incoming',
        description: [
            'Assist 150+ students in data structures and algorithms, improving comprehension via office hours and recitation',
            'Provide constructive feedback on programming assignments, data structures, and algorithm implementation',
            'Develop and lead comprehensive review sessions to prepare students for midterms and finals'
        ],
        tech: ['Data Structures', 'Algorithms', 'Teaching', 'Java']
    },
];

export function Experience({ onClick }: { onClick: () => void }) {
    return (
        <>
            <div className="navbar">
                <button className="exit-btn" onClick={onClick}>
                    <img className="exit-img" src={exitBtn} alt="Close" />
                </button>
            </div>
            <div className="projects-container">
                <div className="projects-section">
                    <h1 className="projects-title">EXPERIENCE</h1>
                    {EXPERIENCES.map((exp, i) => (
                        <div className={`project-row${i % 2 === 1 ? ' reverse' : ''}`} key={`${exp.company}-${exp.role}`}>
                            <div className="project-info">
                                <h2 className="project-name">{exp.role}</h2>
                                <h3 className="company-name">{exp.company}</h3>
                                <div className="project-tech">{exp.duration}</div>
                                <ul className="experience-desc">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                                <div className="tech-tags">
                                    {exp.tech.map(tech => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                {exp.link && (
                                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                        View Company
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .company-name {
                    color: #00ffe6;
                    margin: 5px 0 10px;
                    font-weight: 600;
                    font-size: 1.1rem;
                }
                .experience-desc {
                    margin: 15px 0;
                    padding-left: 20px;
                }
                .experience-desc li {
                    margin-bottom: 10px;
                    line-height: 1.6;
                    color: #b6eaff;
                }
                .project-tech {
                    color: #666;
                    margin-bottom: 10px;
                    font-style: italic;
                }
            `}</style>
        </>
    )
}