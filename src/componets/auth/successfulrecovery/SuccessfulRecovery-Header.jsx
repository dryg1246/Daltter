import React from "react";
import SuccessfulRecoveryBtn from "../widget/successfulrecovery/headerwidget/SuccessfulRecoveryBtn";
import SuccessfulRecoveryLogo from "../widget/successfulrecovery/headerwidget/SuccessfulRecoveryLogo";


function SuccessfulRecoveryHeader() {
    return (
        <>
            <header>
                <div className="header">
                    <SuccessfulRecoveryLogo
                        title="daltter"
                        imageLogo="/img/logo.png"/>
                    <SuccessfulRecoveryBtn text="Login" />
                </div>
            </header>
        </>
    );
}

export default SuccessfulRecoveryHeader;