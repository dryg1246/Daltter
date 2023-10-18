import {Link} from "react-router-dom";
import React from "react";

const BtnSingUp = (props) => {
    return (
        <>
        <Link to="/SingUp">
            <div className="buttons_header">
                <button className="BtnSignUp">
                    <p className="TextBtnSignUp">{props.BtnSingUpText}</p>
                </button>
            </div>
        </Link>
        </>
    )
}

export default BtnSingUp;