import {Link} from "react-router-dom";
import React from "react";

const FormMainPassword = ({imageLogo, Password, RepeatPassword, ClickButton, GoBack}) => {
    return (
        <div className="wrapper_singUp">
            <div className="object_insides">
                <img src={imageLogo} width={96} height={90} alt="Logo" />
                <div className="inputsWrapper">
                    <input className="EmailInput" type="email" placeholder={Password} />
                    <input className="PasswordInputSingUp" type="password" placeholder={RepeatPassword} />
                    <button>
                        <Link to="/NewPassword"><div>Continue</div></Link>
                    </button>
                    <Link to="*">  <div className="ForgetPasswordWrapper">{ClickButton}<br/> Service and Privacy Policy.</div> </Link>
                    <Link to="/">
                        <div className="link_go_back">{GoBack}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FormMainPassword;