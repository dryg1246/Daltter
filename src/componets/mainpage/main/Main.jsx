import React from 'react';
import "./Main..scss";
import "../../../adaptive/mainpage/Adaptive.scss"
import MainSecond from "../widget/main/MainSecond";
import MainFirst from "../widget/main/MainFirst";
import MainThird from "../widget/main/MainThird";
import MainFourth from "../widget/main/MainFourth";

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