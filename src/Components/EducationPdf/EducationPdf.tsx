import React from 'react';
import { ButtonForm } from "../";
import "./EducationPdf.scss";
import {EducationPdfProp} from '../utilities/_pdfTypes';

const EducationPdf: React.FC<EducationPdfProp> = ({education}: EducationPdfProp) => {
    
    const displayBlock = education ? {display:'block'} : {display: 'none'}

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
                            placeholder="Education"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>School Name</span>
                        </div>
                        <input
                            className="profile-input"
                            type="email"
                            placeholder="MIT University"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>School Location</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="Boston, MA"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Degree</span>
                        </div>
                        <input className="profile-input" type="text" placeholder="BS" />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Major</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="Computer Science"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>GPA</span>
                        </div>
                        <input className="profile-input" type="text" placeholder="3.6" />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Start Date</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="Sep 2015"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>End Date</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="Sep 2019"
                        />
                    </label>
                    <ButtonForm title="submit"/>
                </form>
            </div>
        </div>
    );
}

export default EducationPdf;
