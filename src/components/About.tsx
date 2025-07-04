import exitBtn from "../assets/exit.png";
import profile from "../assets/profile.jpg";
import { ReactTyped } from "react-typed";

export function About({ onClick }) {
    return (
        <>
            <div className="navbar">
                <button className="exit-btn" onClick={onClick}>
                    <img className="exit-img" src={exitBtn} />
                </button>
            </div>

            <div className="about-container">
                <div className="about-top">
                    <img className="profile-img" src={profile} />
                    <div className="about-right">
                        <div className="about-intro">Hi, my name is Elvin!</div>
                        <div className="about-subintro">
                            I'm&nbsp;
                            <span>
                                <ReactTyped strings={[
                                    "an aspiring Software Engineer",
                                    "a Junior at Stony Brook University",
                                    "interested in AI and ML"
                                ]}
                                    typeSpeed={30}
                                    backSpeed={20}
                                    loop
                                    style={{
                                        color: "#4b3aab",
                                    }}
                                />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="about-bottom">
                    <div>I have been interested in coding since I was in high school. I started off coding by creating Roblox games that had garnered thousands of players. Now I'm creating full-stack web and mobile applications and exploring AI/ML integrations!</div>
                    <div>
                        <h2 style={{ color: "#4b3aab", margin: "10px 0 5px 0" }}>What am I up to?</h2>
                        <h3 style={{ color: "#cf3a67", margin: "5px 0 5px 0" }}>Currently I am:</h3>
                        <ul style={{ margin: "5px 0 5px 0" }}>
                            <li>📋 Looking for internships</li>
                            <li>🔨 Developing apps</li>
                            <li>🤖 Self-teaching AI / Machine Learning</li>
                            <li>👖 Sewing Selvedge Denim Jeans</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}