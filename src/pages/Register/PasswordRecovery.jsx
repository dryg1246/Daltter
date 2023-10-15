import React from 'react';
import "./register..scss"
import { Link } from "react-router-dom";

function PasswordRecovery() {

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
                <div className="wrapper_login_recovery">
                    <div className="object_insides">
                        <img src="/img/logo.png" width={96} height={90} alt="Logo" />
                        <div className="inputsWrapper">
                            <input className="EmailInput" type="email" placeholder="Email Address" />
                            <button>
                                <Link to="/NewPassword">

                             <div className="input_text">Send recovery link</div> </Link>
                            </button>
                            <Link to="/login">
                                <div className="link_go_back">Go back </div>
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

export default PasswordRecovery;