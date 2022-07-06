import React from "react";
import {
    ResumeOptions,
    ProfilePdf,
    EducationPdf,
    WorkPdf,
    SkillsPdf,
    ProjectsPdf,
    AwardsPdf,
} from "../";
import "./FormResumePdf.scss";

const formOptionsToggle = {
 'profile': true,
 'education': false,
 'skills': false,
 'work': false,
 'projects': false,
 'awards': false,
}

const types = {
    PROFILE: 'PROFILE',
    EDUCATION: 'EDUCATION',
    SKILLS: 'SKILLS',
    WORK: 'WORK',
    PROJECTS: 'PROJECTS',
    AWARDS: 'AWARDS',
}

const resumeOptionsReducer = (state: any, action: any) => {
    switch(action.type){
        case types.PROFILE:
            return {...state, profile: !action.value};
        case types.EDUCATION:
            return {...state, education: !action.value};
        case types.SKILLS:
            return {...state, skills: !action.value};
        case types.WORK:
            return {...state, work: !action.value};
        case types.PROJECTS:
            return {...state, projects: !action.value};
        case types.AWARDS:
            return {...state, awards: !action.value};
        default: 
            throw Error('Something wrong in reducer');    
    }
}

function FormResumePdf() {
    const [state, dispatch] = React.useReducer(resumeOptionsReducer, formOptionsToggle)
    console.log('sendToggle', state)

    return (
        <>
            <ResumeOptions
                title="Profile"
                onToggle={() => dispatch({ type: types.PROFILE, value: state.profile })}
            />
            <ProfilePdf profile={state.profile} />
            <ResumeOptions
                title="Education"
                onToggle={() => dispatch({ type: types.EDUCATION, value: state.education })}
            />
            <EducationPdf education={state.education}/>
            <ResumeOptions
                title="Work"
                onToggle={() => dispatch({ type: types.WORK, value: state.work })}
            />
            <WorkPdf work={state.work}/>
            <ResumeOptions
                title="Skills"
                onToggle={() => dispatch({ type: types.SKILLS, value: state.skills })}
            />
            <SkillsPdf skills={state.skills}/>
            <ResumeOptions
                title="Projects"
                onToggle={() => dispatch({ type: types.PROJECTS, value: state.projects })}
            />
            <ProjectsPdf projects={state.projects}/>
            <ResumeOptions
                title="Awards"
                onToggle={() => dispatch({ type: types.AWARDS, value: state.awards })}
            />
            <AwardsPdf awards={state.awards}/>
        </>
    );
}

export default FormResumePdf;
