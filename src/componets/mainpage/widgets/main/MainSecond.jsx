import React from "react";

const MainSecond = ({ imageSrc, title, subtitle, buttonText }) => {

    return (
        <div className="main_second">
            <div className="second_left">
                <img src={imageSrc} alt=""/>
            </div>
            <div className="second_right">
                <h1 className="second_main">Our <span>{title}</span> is fully <br/> automated</h1>
                <p className="second_text">{subtitle}</p>
                <button className="second_btn">
                    <h2 className="second_try_button">{buttonText}</h2>
                </button>
            </div>
        </div>
    )
}

export default MainSecond;