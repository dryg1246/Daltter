import React from "react";
import FormMainPassword from "../widget/passwordwidget/mainwidget/FormMainPassword";

function PasswordMain(props) {
    return (
        <>
            <div className="container_singUp">
                <FormMainPassword imageLogo="/img/logo.png"Password="Password" RepeatPassword="Repeat Password" ClickButton="By clicking the button, you agree to our Terms of  Service and Privacy Policy." GoBack="Go back"/>
            </div>
        </>
    );
}

export default PasswordMain;