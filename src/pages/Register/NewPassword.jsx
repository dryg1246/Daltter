import {Link} from "react-router-dom";
import React from "react";

function NewPassword() {
    return (
        <>
            <header>
                <div className="header">
                    <Link to="/">
                        <div className="logo_header">
                            <img src="/img/logo.png" width={51} height={49} alt="Logo" />
                            <h1>daltter</h1>
                        </div>
                    </Link>
                    <div className="">
                        <Link to="/SingUp">
                            <div className="buttons_header">
                                <button className="BtnLogin">
                                    <p className="TextBtnSignUp">Login</p>
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
            <div className="container_singUp">
                <div className="wrapper_login_newPassword">
                    <div className="object_insides">
                        <img src="/img/logo.png" width={96} height={90} alt="Logo" />
                        <div className="inputsWrapper">
                            <input className="EmailInput" type="password" placeholder="New Password" />
                            <input className="PasswordInputLogin" type="password" placeholder="New Password Again" />

                            <button>
                                <Link to="/SuccessfulRecovery">
                                <div className="input_text">Reset</div>
                                </Link>
                            </button>
                            <Link to="/login">
                                <div className="link_go_back">Cancel</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer_register">
                <div className="footer_container">
                </div>
            </footer>
        </>
    )
}

export  default NewPassword;