import React from "react";
import LogoHeader from "../widget/loginwidget/headerwidget/LogoHeader";
import PasswordBtn from "../widget/passwordwidget/headerwidget/PasswordBtn";
import {Link} from "react-router-dom";
import NewPasswordLogoHeader from "../widget/newpasswordwidget/headerwidget/NewPasswordLogoHeader";
import NewPasswordBtn from "../widget/newpasswordwidget/headerwidget/NewPasswordBtn";


function NewPasswordHeader() {
    return (
        <>
            <header>
                <div className="header">
                    <NewPasswordLogoHeader imageLogo="/img/logo.png" title="Daltter"/>
                    <NewPasswordBtn text="Login"/>
                </div>
            </header>
        </>
    );
}

export default NewPasswordHeader;