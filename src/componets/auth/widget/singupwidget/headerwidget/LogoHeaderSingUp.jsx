import {Link} from "react-router-dom";
import React from "react";

const LogoHeaderSingUp = (props) => {
    return (
        <Link to="/">
            <div className="logo_header">
                <img src="/img/logo.png" width={51} height={49} alt="Logo" />
                <h1>daltter</h1>
            </div>
        </Link>
    )
}

export default LogoHeaderSingUp;