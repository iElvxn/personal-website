import exitBtn from "../assets/exit.png";

export function Contact({onClick}) {
    return (
        <>
            <div className="navbar">
                <button className="exit-btn" onClick={onClick}>
                    <img className="exit-img" src={exitBtn} />
                </button>
            </div>
        </>
    )
}