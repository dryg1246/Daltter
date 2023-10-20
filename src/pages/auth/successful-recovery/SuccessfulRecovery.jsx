import React from "react";
import SuccessfulRecoveryHeader from "../../../componets/auth/successfulrecovery/SuccessfulRecovery-Header";
import SuccessfulRecoveryFooter from "../../../componets/auth/successfulrecovery/SuccessfulRecovery-Footer";
import SuccessfulRecoveryMain from "../../../componets/auth/successfulrecovery/SuccessfulRecovery-Main";

function SuccessfulRecovery() {
    return (
        <>
            <SuccessfulRecoveryHeader/>
            <SuccessfulRecoveryMain/>
            <SuccessfulRecoveryFooter/>
        </>
    )
}

export default SuccessfulRecovery;