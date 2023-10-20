import React from "react";
import FormMainNewPassword from "../widget/newpasswordwidget/mainwidget/FormMainNewPassword";

function NewPasswordMain(props) {
    return (
        <>
            <div className="container_singUp">
                <FormMainNewPassword imageLogo="/img/logo.png" NewPassword="NewPassword" NewPasswordAgain="New Password Again" ResetInput="Reset" Cancel="Cancel"/>
            </div>
        </>
    );
}

export default NewPasswordMain;