import React from "react";
import FormMainPasswordRecovery from "../widget/passwordrecovery/mainwidget/FormMainPasswordRecovery";

function PasswordRecoveryMain(props) {
    return (
        <>
            <div className="container_singUp">
                <FormMainPasswordRecovery imageLogo="/img/logo.png" EmailAddress="Email Address" SendRecovery="Send recovery link" GoBack="Go back"/>
            </div>
        </>
    );
}

export default PasswordRecoveryMain;