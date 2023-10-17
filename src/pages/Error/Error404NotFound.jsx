
import React from "react";
import {Link} from "react-router-dom";
import "./Error404NoteFound.scss"
import styles from "../Register/register..scss";
export const Error404NotFound = () => {
    return (

        <div className="container">
            <div className="container_error">
            <div className={styles.container_singUp}>
    <div>
        <Link to="/"> <img src="/img/logo.png" width="90px" height="91px" className={styles.HeaderImgLogoWrapper} alt="Logo" />
        </Link>
            <h1 className="error">404 Not Found</h1>
                <Link to="/">
                    <button className="btn_go_back">НАХУЙ НА ГЛАВНУЮ </button>
                </Link>
            </div>
            </div>
            </div>

    </div>

    )
}