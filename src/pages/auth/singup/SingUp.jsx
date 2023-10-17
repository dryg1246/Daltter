import React from 'react';
import "../../Register/register.scss"
import SingUpFooter from "../../../componets/auth/singup/SingUp-Header";
import SingUpHeader from "../../../componets/auth/singup/SingUp-Header";
import SingUpMain from "../../../componets/auth/singup/SingUp-Main";

function SingUp() {
    return (
        <>
            <SingUpHeader/>
            <SingUpMain/>
            <SingUpFooter/>

        </>
    )
}

export default SingUp;