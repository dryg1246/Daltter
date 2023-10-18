import React from "react";
import FormMainLogin from "../widget/loginwidget/mainwidget/FormMainLogin";

function LoginMain(props) {
    return (
        <>
            <div className="container_singUp">
                <FormMainLogin imageLogo={props.imageLogo} Login="Login" ForgetPassword="Forget password?" GoBack="Go back"/>
            </div>
        </>
    );
}

export default LoginMain;