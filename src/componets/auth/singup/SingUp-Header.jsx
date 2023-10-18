import React from "react";
import LogoHeaderSingUp from "../widget/singupwidget/headerwidget/LogoHeaderSingUp";
import BtnHeaderSingUp from "../widget/singupwidget/headerwidget/BtnHeaderSingUp";

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