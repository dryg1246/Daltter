import {Link} from "react-router-dom";
import React from "react";

const FormMainLogin = ({imageLogo, Login, ForgetPassword, GoBack}) => {
    return (
        <div className="wrapper_login">
            <div className="object_insides">
                <img src={imageLogo} width={96} height={90}/>
                <form className="inputsWrapper">
                    <input className="EmailInput" type="email" placeholder="Email Address"/>
                    <input className="PasswordInputLogin" type="password" placeholder="Password"/>
                    <button>
                        <div>{Login}</div>
                    </button>
                    <Link to="/PasswordRecovery">
                        <div className="ForgetPasswordWrapper"> {ForgetPassword}</div>
                    </Link>
                    <Link to="/">
                        <div className="link_go_back">{GoBack}</div>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default FormMainLogin;