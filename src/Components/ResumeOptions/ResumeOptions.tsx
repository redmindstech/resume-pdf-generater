import "./ResumeOptions.scss";

type resumeOptionsProps = {
    title: string;
    onToggle?: any;
};

function ResumeOptions(props: resumeOptionsProps) {
    return (
        <div className="resume-options" onClick={props.onToggle}>
            <div className="resume-options-wrapper">
                <span className="resume-options-title">{props.title}</span>
            </div>
        </div>
    );
}

export default ResumeOptions;
