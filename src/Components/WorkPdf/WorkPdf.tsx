import React from 'react';
import {ButtonForm} from '../';
import './WorkPdf.scss';
import {WorkPdfProp} from '../utilities/_pdfTypes';

const WorkPdf: React.FC<WorkPdfProp> = ({work}: WorkPdfProp) => {
    
    const displayBlock = work ? {display:'block'} : {display: 'none'}

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
                            placeholder="Work Experience"

                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Company Name</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="Meta"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Job Title</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="Software Engineer"
                        />
                    </label>


                    <label>
                        <div className="profile-span">
                            <span>Start Date</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="May 2015"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>End Date</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="May 2020 / Precent"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Job Responsibilities</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="Description"
                        />
                    </label>
                    <ButtonForm title="submit"/>
                </form>
            </div>
        </div>
    )
}

export default WorkPdf;