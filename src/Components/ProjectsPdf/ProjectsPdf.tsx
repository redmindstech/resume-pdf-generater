import React from 'react';
import { ButtonForm } from "../";
import "./ProjectsPdf.scss";
import {ProjectsPdfProp} from '../utilities/_pdfTypes';

const ProjectsPdf: React.FC<ProjectsPdfProp> = ({projects}: ProjectsPdfProp) => {
    
    const displayBlock = projects ? {display:'block'} : {display: 'none'}

    return (
        <div className="resume-form" style={displayBlock}>
            <div className="resume-form-container">
                <form>
                    <label>
                        <div className="profile-span">
                            <span>Section Heading</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="Projects"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Project Description</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="A web scraper app to find discounts"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Project Name</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="Descounts App"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Link to Project</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="https://vercel.web-scraper.com"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Tools Used</span>
                        </div>
                        <input className="profile-input" type="text" placeholder="Python" />
                    </label>

                    <ButtonForm title="submit"/>
                </form>
            </div>
        </div>
    );
}

export default ProjectsPdf;
