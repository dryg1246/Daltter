import React from "react";
import BtnSingUp from "../widget/loginwidget/headerwidget/BtnSingUp";
import LogoHeader from "../widget/loginwidget/headerwidget/LogoHeader";


function LoginHeader() {
    return (
        <>
            <header>
                <div className="header">
                    <LogoHeader
                        title="daltter"
                        imageLogo="/img/logo.png"
                     />
                     <BtnSingUp
                         BtnSingUpText="Sing Up"
                     />
                </div>
            </header>
        </>
    );
}

export default LoginHeader;