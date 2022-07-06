import React from 'react';
import "./ButtonForm.scss";

type buttonProp = {
    title: string
}


function ButtonForm(props: buttonProp) {

    return (
        <div className="form-button">
            <button>{props.title}</button>
        </div>
    );
}

export default ButtonForm;
