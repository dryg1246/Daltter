import {Link} from "react-router-dom";
import React from "react";

const PasswordRecoveryBtn = ({text}) => {
    return (
        <Link to="/SingUp">
            <div className="buttons_header">
                <button className="BtnLogin">
                    <p className="TextBtnSignUp">{text}</p>
                </button>
            </div>
        </Link>
    )
}

export default PasswordRecoveryBtn;