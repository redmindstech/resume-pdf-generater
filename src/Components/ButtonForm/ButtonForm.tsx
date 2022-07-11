import React from 'react';
import "./ButtonForm.scss";


interface buttonProp {
    title: string;
}


function ButtonForm(props: buttonProp) {

    return (
        <div className="form-button">
            <button type="submit" >{props.title}</button>
        </div>
    );
}

export default ButtonForm;
