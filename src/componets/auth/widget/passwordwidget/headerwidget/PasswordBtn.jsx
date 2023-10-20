import {Link} from "react-router-dom";
import React from "react";

const PasswordBtn = (props) => {
    return (
        <div className="">
            <Link to="/login">
                <div className="buttons_header">
                    <button className="BtnLogin">
                        <p className="TextBtnSignUp">Login</p>
                    </button>
                </div>
            </Link>
        </div>
    )
}

export default PasswordBtn;