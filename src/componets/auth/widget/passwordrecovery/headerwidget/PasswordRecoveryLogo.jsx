import {Link} from "react-router-dom";
import React from "react";

const PasswordRecoveryLogo = ({imageLogo, title}) => {
    return (
        <Link to="/">
            <div className="logo_header">
                <img src={imageLogo} width={51} height={49} alt="Logo" />
                <h1>{title}</h1>
            </div>
        </Link>
    )
}

export default PasswordRecoveryLogo;