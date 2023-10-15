import React from 'react';
import "./register..scss"
import { Link } from "react-router-dom";

function SingUp() {
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
                        <Link to="/login">
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
        </div>
            <footer className="footer_register">
                <div className="footer_container">
                    <nav className="footer_container_link">
                        <Link to="/SignUp"> Already have an account? Login </Link>
                    </nav>
                </div>
            </footer>
        </>
    )
}

export default SingUp;