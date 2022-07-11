import React from "react";
import { ButtonForm } from "../";
import "./EducationPdf.scss";
import { EducationPdfProp } from "../utilities/_pdfTypes";
import { useAppDispatch, useAppSelector } from "../../Hook/Hooks";
import { amountAdded } from "../../redux/reducer/counter-slice";

type EduType = {
    heading: string;
    name: string;
    location: string;
    degree: string;
    major: string;
    gpa: string;
    start_date: string;
    end_date: string;
};

const eduInitialState: EduType = {
    heading: "",
    name: "",
    location: "",
    degree: "",
    major: "",
    gpa: "",
    start_date: "",
    end_date: "",
};

/*** 
    *********************************************
    clean the form before sending it to redux
    *********************************************
***/
const eduValidation = (data: EduType) => {
    const cleanFormValidated: EduType = {
        heading: cleanHead(data.heading),
        name: cleanName(data.name),
        location: cleanLocation(data.location),
        degree: cleanDegree(data.degree),
        major: cleanMajor(data.major),
        gpa: cleanGpa(data.gpa),
        start_date: cleanStartDate(data.start_date),
        end_date: cleanEndDate(data.end_date),
    };

    return cleanFormValidated;
};

const cleanHead = (data: string) => {
    return data;
};
const cleanName = (data: string) => {
    return data;
};

const cleanLocation = (data: string) => {
    return data;
};

const cleanDegree = (data: string) => {
    return data;
};

const cleanMajor = (data: string) => {
    return data;
};

const cleanGpa = (data: string) => {
    return data;
};

const cleanStartDate = (data: string) => {
    return data;
};

const cleanEndDate = (data: string) => {
    return data;
};

/*** 
    *********************************************
    Education Functional Component
    *********************************************
***/
const EducationPdf: React.FC<EducationPdfProp> = ({
    education,
}: EducationPdfProp) => {
    const [educationObject, SetEducationObject] =
        React.useState<EduType>(eduInitialState);

    const displayBlock = education ? { display: "block" } : { display: "none" };

    const dispatchValue = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();

    const educationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        SetEducationObject((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const eduCleaned = eduValidation(educationObject);
        // clean the form before sending it to redux

        // form validation catch something wrong
        if (eduCleaned.name === "") {
            alert("please Finish the form");
        }

        // form validation is valid, send data to redux
        if (eduCleaned.name !== "") {
            dispatch(amountAdded(eduCleaned))
            SetEducationObject(eduInitialState);
        }
    };

    console.log('dispatchValue', dispatchValue);
    return (
        <div className="resume-form" style={displayBlock}>
            <div className="resume-form-container">
                <form onSubmit={handleSubmit}>
                    <label>
                        <div className="profile-span">
                            <span>Section Heading</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="Education"
                            onChange={educationChange}
                            name="heading"
                            value={educationObject.heading}
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>School Name</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="MIT University"
                            onChange={educationChange}
                            name="name"
                            value={educationObject.name}
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
                            onChange={educationChange}
                            name="location"
                            value={educationObject.location}
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Degree</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="BS"
                            onChange={educationChange}
                            name="degree"
                            value={educationObject.degree}
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Major</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="Computer Science"
                            onChange={educationChange}
                            name="major"
                            value={educationObject.major}
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>GPA</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="3.6"
                            onChange={educationChange}
                            name="gpa"
                            value={educationObject.gpa}
                        />
                    </label>

                    <label>
                        <div className="profile-span">
                            <span>Start Date</span>
                        </div>
                        <input
                            className="profile-input"
                            type="text"
                            placeholder="Sep 2015"
                            onChange={educationChange}
                            name="start_date"
                            value={educationObject.start_date}
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
                            onChange={educationChange}
                            name="end_date"
                            value={educationObject.end_date}
                        />
                    </label>
                    <ButtonForm title="submit"  />
                </form>
            </div>
        </div>
    );
};

export default EducationPdf;
