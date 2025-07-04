import exitBtn from "../assets/exit.png";
import resume from "../assets/resume.pdf"

export function Resume({onClick}) {
    return (
        <>
            <div className="navbar">
                <button className="exit-btn" onClick={onClick}>
                    <img className="exit-img" src={exitBtn} />
                </button>
            </div>
            <object
                data={resume}
                width="800"
                height="500">
            </object>
        </>
    )
}