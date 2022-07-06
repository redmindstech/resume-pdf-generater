import { ButtonForm } from "../";
import "./AwardsPdf.scss";
import {AwardsPdfProp} from '../utilities/_pdfTypes';

const AwardsPdf: React.FC<AwardsPdfProp> = ({awards}: AwardsPdfProp) => {
    
    const displayBlock = awards ? {display:'block'} : {display: 'none'}
    return (
        <div className="resume-form" style={displayBlock}>
            <div className="resume-form-container">
                <form>
                    <label>
                        <div className="profile-span">
                            <span>Section Heading</span>
                        </div>
                        <input className="profile-input" type="text" placeholder="Awards" />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Award Name</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="Best Hackerranck 2015"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Award Date</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="June 2016"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Awarder</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="Hackerranck"
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Summary</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="Coded 10 challenges in 30 minutes"
                        />
                    </label>

                    <ButtonForm title="submit" />
                </form>
            </div>
        </div>
    );
}

export default AwardsPdf;
