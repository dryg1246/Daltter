import React from 'react';
import styles from "./register.module.scss";
import { Link } from "react-router-dom";
import SingUp from "./SingUp";

function Login() {

    return (
        <>
            <header className={styles.Header}>
                <Link to="/">
                    <div className={styles.HeaderLogo}>
                        <img src="/img/logo.png" width={51} height={49} className={styles.HeaderImgLogo} alt="Logo" />
                        <h2>daltter</h2>
                    </div>
                </Link>
                <div className="d-flex">
                    <Link to="/SingUp">
                        <button  className={styles.BtnSignUp}>
                            <p className={styles.TextBtnSignUp}>Sign Up</p>
                        </button>
                    </Link>
                </div>
            </header>

            <div className="wrapper">
                <img src="/img/logo.png" width={96} height={90} className={styles.HeaderImgLogoWrapper} alt="Logo" />
                <div className={styles.inputsWrapper}>
                    <input className={styles.EmailInput} type="email" placeholder="Email Address" />
                    <input className={styles.PasswordInput} type="password" placeholder="Password" />
                        <button>
                            <div>Login</div>
                        </button>
                    <div className={styles.ForgetPasswordWrapper}> Forget password?</div>
                    <Link to="/">
                        <div>Go back </div>
                    </Link>
                </div>
            </div>

            <footer className="footer">
                <div>
                    Don’t have an account? <Link to="/SignUp">Sign Up</Link>
                </div>
            </footer>
        </>
    )
}

export default Login;