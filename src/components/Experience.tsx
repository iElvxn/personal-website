import exitBtn from "../assets/exit.png";

export function Experience({onClick}) {
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