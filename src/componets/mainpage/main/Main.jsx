import React from 'react';
import "./Main..scss";
import "../../../adaptive/mainpage/Adaptive.scss"
import MainSecond from "../widgets/main/MainSecond";
import MainFirst from "../widgets/main/MainFirst";
import MainThird from "../widgets/main/MainThird";
import MainFourth from "../widgets/main/MainFourth";

function Main() {
    return (
        <div className="main">
            <MainFirst/>
            <MainSecond/>
            <MainThird/>
            <MainFourth/>
        </div>
    );
}

export default Main;