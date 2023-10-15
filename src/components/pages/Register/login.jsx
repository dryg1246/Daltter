import React from 'react';
import "./register..scss"; // Fix the SCSS import path
import { Link } from "react-router-dom";

function isEmpty(str) {
    return str.trim() === ''; // Trim the string and check if it's empty
}

function checkform(event) {
    event.preventDefault();
    const form = event.target;
    let errMSG = "";

    for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].getAttribute("required") !== null) {
            if (isEmpty(form.elements[i].value)) {
                errMSG += "  " + form.elements[i].name + "\n";
            }
        }
    }

    if (errMSG) {
        alert("Не заполнены обязательные поля:\n" + errMSG);
    } else {
        // Submit the form or perform any other desired action
    }
}

function Login() { // Define the Login component
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
                        <Link to="/SignUp"> {/* Fixed "SingUp" to "SignUp" */}
                            <div className="buttons_header">
                                <button className="BtnSignUp">
                                    <p className="TextBtnSignUp">Sign Up</p>
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
            <div className="container_singUp">
                <div className="wrapper_login">
                    <div className="object_insides">
                        <img src="/img/logo.png" width={96} height={90} alt="Logo" />
                        <form onSubmit={checkform} className="inputsWrapper">
                            <input className="EmailInput" type="email" placeholder="Email Address" />
                            <input className="PasswordInputLogin" type="password" placeholder="Password" />
                            <button>
                                <div>Login</div>
                            </button>
                            <Link to="/PasswordRecovery"> <div className="ForgetPasswordWrapper"> Forget password?</div> </Link>
                            <Link to="/">
                                <div className="link_go_back">Go back </div>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>

            <footer className="footer_register">
                <div className="footer_container">
                    <Link to="/SignUp">Don’t have an account? Sign Up</Link>
                </div>
            </footer>
        </>
    );
}

export default Login;