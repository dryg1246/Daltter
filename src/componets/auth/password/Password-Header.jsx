import React from "react";
import LogoHeader from "../widget/loginwidget/headerwidget/LogoHeader";
import PasswordBtn from "../widget/passwordwidget/headerwidget/PasswordBtn";



function PasswordHeader() {
    return (
        <>
            <header>
                <div className="header">
                    <LogoHeader
                        title="daltter"
                        imageLogo="/img/logo.png"
                    />
                    <PasswordBtn
                        BtnSingUpText="Sing Up"
                    />
                </div>
            </header>
        </>
    );
}

export default PasswordHeader;