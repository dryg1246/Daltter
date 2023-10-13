import React from 'react';
import styles from "./register.module.scss";
import {Link} from "react-router-dom";

function SingUp() {
    return (
        <>
            <header className={styles.Header}>
                <Link to="/">
                    <div className={styles.HeaderLogo}>
                        <img src="/img/logo.png" width={51} height={49} className={styles.HeaderImgLogo}/>
                        <h2>daltte</h2>
                    </div>
                </Link>
                <div className="d-flex">
                    <button className={styles.BtnLogin}>
                        <p className={styles.TextBtnLogin}>Login</p>
                    </button>
                </div>
            </header>

            <div className="wrapper">
                <img src="/img/logo.png" width={96} height={90} className={styles.HeaderImgLogoWrapper}/>
                <div className={styles.inputsWrapper}>
                    <input className={styles.EmailInput} type="Email Address"/>
                    <input className={styles.PasswordInput} type="Password"/>
                    <button>
                        <div>Login</div>
                    </button>
                    <div className={styles.ForgetPasswordWrapper}> Forget password?</div>
                    <Link to="/">
                        <div>Go back</div>
                    </Link>
                </div>
            </div>

            <footer className="footer">
                <div>
                    Don’t have an account? Sign Up
                </div>
            </footer>
        </>
    )
}

export default SingUp;