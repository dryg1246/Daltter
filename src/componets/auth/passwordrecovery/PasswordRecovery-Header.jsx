import React from "react";
import LogoHeader from "../widget/loginwidget/headerwidget/LogoHeader";
import PasswordBtn from "../widget/passwordwidget/headerwidget/PasswordBtn";
import {Link} from "react-router-dom";
import PasswordRecoveryBtn from "../widget/passwordrecovery/headerwidget/PasswordRecoveryBtn";
import PasswordRecoveryLogo from "../widget/passwordrecovery/headerwidget/PasswordRecoveryLogo";


function PasswordRecoveryHeader() {
    return (
        <>
            <header>
                <div className="header">
                    <PasswordRecoveryLogo
                        title="daltter"
                        imageLogo="/img/logo.png"/>
                    <PasswordRecoveryBtn text="Login" />
                </div>
            </header>
        </>
    );
}

export default PasswordRecoveryHeader;