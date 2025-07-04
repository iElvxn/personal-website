import { useState } from "react";
import exitBtn from "../assets/exit.png";

export function Contact({ onClick }) {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {

        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "e5dd0466-54da-4197-b48f-8f227566e09d");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <>
            <div className="navbar">
                <button className="exit-btn" onClick={onClick}>
                    <img className="exit-img" src={exitBtn} />
                </button>
            </div>

            <div className="contact-container">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h1 style={{ margin: "0 0 10px 0" }}>Contact Me</h1>
                    <h2 style={{ margin: "0 0 20px 0" }}>Feel free to contact me at <a href="mailto:elvin.ly3@gmail.com" style={{ color: '#4b3aab', textDecoration: 'underline' }}>elvin.ly3@gmail.com</a> or submit the form below!</h2>
                </div>

                <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div>
                        <div>Name</div>
                        <input type="text" name="name" required style={{ width: '300px', borderRadius: "8px", height: "25px" }} />
                    </div>
                    <div>
                        <div>Email</div>
                        <input type="email" name="email" required style={{ width: '300px', borderRadius: "8px", height: "25px" }} />
                    </div>
                    <div>
                        <div>Message</div>
                        <textarea name="message" required style={{ width: '300px', minHeight: '95px', borderRadius: "8px" }}></textarea>
                    </div>


                    <button type="submit">Submit Form</button>

                </form>
                <span>{result}</span>
            </div>
        </>
    )
}