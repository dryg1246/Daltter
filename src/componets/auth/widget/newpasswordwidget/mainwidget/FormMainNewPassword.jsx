import {Link} from "react-router-dom";
import React from "react";

const FormMainNewPassword = ({imageLogo, NewPassword, NewPasswordAgain, ResetInput, Cancel}) => {
    return (
        <div className="wrapper_login_newPassword">
            <div className="object_insides">
                <img src={imageLogo} width={96} height={90} alt="Logo" />
                <div className="inputsWrapper">
                    <input className="EmailInput" type="password" placeholder={NewPassword} />
                    <input className="PasswordInputLogin" type="password" placeholder={NewPasswordAgain}/>

                    <button>
                        <Link to="/SuccessfulRecovery">
                            <div className="input_text">{ResetInput}</div>
                        </Link>
                    </button>
                    <Link to="/login">
                        <div className="link_go_back">{Cancel}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FormMainNewPassword;