import React from "react";
import { ButtonForm } from "../";
import "./HeaderApp.scss";

function ResumeApp() {
    return (
        <header>
            <ButtonForm title="Templates" />
            <div className="header-template">
                <div className="header-template-container">
                    <img
                        alt="template-green"
                        className="header-template-img"
                        src="https://i.ibb.co/0n1bjjY/software-engineer-resume-examples.webp"
                    />
                </div>
            </div>
        </header>
    );
}

export default ResumeApp;
