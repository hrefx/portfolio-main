import React from "react";
import AppLogo from './header.png';
import AppProfile from './profile.png';

function Experience() {
    return (
        <div className="header">
            <div className="container">
                <nav>
                    <img src={AppLogo} alt="logo" className="logo"></img>
                    <div className="buttons">
                        <ul>
                            <li><a href="#experience" className="header-btn">Experience</a></li>
                            <li><a href="#portfolio" className="header-btn">Work</a></li>
                            <li><a href="#contact" className="header-btn">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="header-text">
                        <img src={AppProfile} alt="profile" className="profile"></img>
                        <div className="text">
                            <h1>UX Designer</h1>
                            <p>Hi, I’m Vladyslav and<br></br>this is my portfolio</p>
                        </div>
                </div>
                <div className="social-media">
                    <a href="https://discord.com/" target="_blank" className="social-btn">Discord</a>
                    <a href="https://www.facebook.com/" target="_blank" className="social-btn">Facebook</a>
                    <a href="https://www.instagram.com/" target="_blank" className="social-btn">Instagram</a>
                    <a href="https://www.figma.com/" target="_blank" className="social-btn">Figma</a>
                </div>
            </div>
        </div>
    )
}

export default Experience;
