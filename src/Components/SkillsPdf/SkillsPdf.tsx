import React from 'react';
import {ButtonForm} from '../';
import './SkillsPdf.scss';
import {SkillsPdfProp} from '../utilities/_pdfTypes';

const SkillPdf: React.FC<SkillsPdfProp> = ({skills}: SkillsPdfProp) => {
    
    const displayBlock = skills ? {display:'block'} : {display: 'none'}

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
                            placeholder="Skills"

                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Skill Name</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="Programming Langue"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Skill Detail</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="C++"
                        />
                    </label>

                    <ButtonForm title="submit"/>
                </form>
            </div>
        </div>
    )
}

export default SkillPdf;