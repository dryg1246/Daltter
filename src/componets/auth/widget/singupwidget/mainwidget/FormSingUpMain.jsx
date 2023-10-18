import {Link} from "react-router-dom";
import React from "react";

const LogoHeaderSingUp = (props) => {
    return (
        <div className="wrapper_singUp">
            <div className="object_insides">
                <img src="/img/logo.png" width={96} height={90} alt="Logo" />
                <div className="inputsWrapper">
                    <input className="EmailInput" type="email" placeholder="Email Address" />
                    <input className="PasswordInputSingUp" type="password" placeholder="Full Name" />
                    <button>
                        <Link to="/Password"><div>Continue</div></Link>
                    </button>
                    <Link to="*">  <div className="ForgetPasswordWrapper">By clicking the button, you agree to our Terms of <br/> Service and Privacy Policy.</div> </Link>
                    <Link to="/">
                        <div className="link_go_back">Go back </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LogoHeaderSingUp;