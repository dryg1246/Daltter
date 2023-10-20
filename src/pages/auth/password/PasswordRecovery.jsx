import React from 'react';
import "../../Register/register.scss"
import {Link} from "react-router-dom";
import PasswordRecoveryMain from "../../../componets/auth/passwordrecovery/PasswordRecovery-Main";
import PasswordRecoveryLogo from "../../../componets/auth/widget/passwordrecovery/headerwidget/PasswordRecoveryLogo";
import PasswordRecoveryHeader from "../../../componets/auth/passwordrecovery/PasswordRecovery-Header";
import PasswordRecoveryFooter from "../../../componets/auth/passwordrecovery/PasswordRecovery-Footer";

function PasswordRecovery() {

    return (
        <>
            <PasswordRecoveryHeader/>
            <PasswordRecoveryMain/>
            <PasswordRecoveryFooter/>
        </>
    )
}

export default PasswordRecovery;