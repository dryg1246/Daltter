import {Link} from "react-router-dom";
import React from "react";

const PasswordLogoHeader = (props) => {
    return (
        <Link to="/">
            <div className="logo_header">
                <img src={props.imageLogo} width={51} height={49}/>
                <h1>{props.title}</h1>
            </div>
        </Link>
    )
}

export default PasswordLogoHeader;