import React from 'react';
import "../../../componets/auth/auth.scss"
import LoginHeader from "../../../componets/auth/login/Login-Header";
import LoginMain from "../../../componets/auth/login/Login-Main";
import LoginFooter from "../../../componets/auth/login/Login-Footer";

function Login() {
    return (
        <>
            <LoginHeader/>
            <LoginMain />
            <LoginFooter
            />
        </>
    );
}

export default Login;