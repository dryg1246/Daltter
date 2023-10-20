import React from "react";
import FormMainSuccessfulRecovery from "../widget/successfulrecovery/mainwidget/FormMainSuccessfulRecovery";

function SuccessfulRecoveryMain(props) {
    return (
        <>
            <div className="container_singUp">
                <FormMainSuccessfulRecovery imageLogo="/img/logo.png" InputText="Login" GoBack="Go back"/>
            </div>
        </>
    );
}

export default SuccessfulRecoveryMain;