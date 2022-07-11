import React from 'react';
import { ButtonForm } from "../";
import {ProfilePdfProp} from '../utilities/_pdfTypes';
import "./ProfilePdf.scss";


const ProfilePdf: React.FC<ProfilePdfProp> = ({profile}: ProfilePdfProp) => {
    
    const displayBlock = profile ? {display:'block'} : {display: 'none'}

    console.log(profile)
    return (
        <div className="resume-form" style={displayBlock}>
            <div className="resume-form-container">
                <form>
                    <label>
                        <div className="profile-span">
                            <span>Full Name</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="John Smith"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Email</span>
                        </div>
                        <input
                            className="profile-input"
                            type="email"
                            placeholder="johnsmith@gmail.com"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Phone Number</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="1236952658"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Location</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="New York, NY"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Portfolio</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="coolportfolio.com/johnsmith"
                        />
                    </label>
                   <ButtonForm title="submit" />
                </form>
            </div>
        </div>
    );
}

export default ProfilePdf;
