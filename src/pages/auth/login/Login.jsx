import React from 'react';
import "../../Register/register.scss";
import LoginHeader from "../../../componets/auth/login/Login-Header";
import LoginMain from "../../../componets/auth/login/Login-Main";
import LoginFooter from "../../../componets/auth/login/Login-Footer";

function Login() {
    return (
        <>
            <LoginHeader/>
            <LoginMain imageLogo="/img/logo.png"/>
            <LoginFooter
            />
        </>
    );
}

export default Login;