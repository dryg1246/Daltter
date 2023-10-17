import React from "react";
import {Link} from "react-router-dom";
import LogoHeaderSingUp from "../login/widget/singupwidget/headerwidget/LogoHeaderSingUp";
import BtnHeaderSingUp from "../login/widget/singupwidget/headerwidget/BtnHeaderSingUp";

function SingUpHeader() {
    return (
        <>
            <header>
                <div className="header">
                    <LogoHeaderSingUp/>
                    <BtnHeaderSingUp/>
                </div>
            </header>
        </>
    );
}

export default SingUpHeader;