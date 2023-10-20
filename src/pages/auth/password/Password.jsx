import React from 'react';
import "../../Register/register.scss"
import {Link} from "react-router-dom";
import PasswordMain from "../../../componets/auth/password/Password-Main";
import PasswordHeader from "../../../componets/auth/password/Password-Header";
import PasswordFooter from "../../../componets/auth/password/Password-Footer";

function Password() {
    return (
        <>
            <PasswordHeader/>
            <PasswordMain/>
            <PasswordFooter/>
        </>
    )
}

export default Password;