import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";
import { useEffect, useState } from "react";

export default function Home() {
    const text = "This is my portfolio website, showcasing my projects and skills.";
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const speed = isDeleting ? 40 : 80;

        const timeout = setTimeout(() => {
        if (!isDeleting && index < text.length) {
            setDisplayedText(text.slice(0, index + 1));
            setIndex(index + 1);
        } else if (isDeleting && index > 0) {
            setDisplayedText(text.slice(0, index - 1));
            setIndex(index - 1);
        } else if (!isDeleting && index === text.length) {
            setTimeout(() => setIsDeleting(true), 1200); 
        } else if (isDeleting && index === 0) {
            setIsDeleting(false);
        }
        }, speed);

        return () => clearTimeout(timeout);
    }, [index, isDeleting]);
    return (
        <section className="hero">
            <div className="hero-left">
                <h2>Hi, I'm Ritter!</h2>
                <p>{displayedText}</p>
                <div className="hero-buttons">
                    <a href="/Ritter resume.pdf" className="btn primary" download>Download Resume</a>
                    <a href="/projects" className="btn">View My Projects</a>
                </div>
                <div className="hero-socials">
                    <a href="https://github.com/rmansueto" className="btn"><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/ritter-padin/" className="btn"><FaLinkedin/></a>
                </div>
            </div>
            <div className="hero-right">
                <img src={profileImg} alt="Ritter's Profile" />
            </div>
        </section>
    );  
}