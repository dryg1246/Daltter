import React from "react";

const HelloLeft = ({ title, subtitle, buttonText, whyUsText }) => {
    return (
        <div className="hello_left">
            <h1 className="daltter_main">
                <span className="dallter_text">{title}</span><br/> is the future <br/> of marketing.
            </h1>
            <p className="email_main">{subtitle}</p>
            <div className="btn_first">
                <button className="btn_try">
                    {buttonText}
                </button>
                <button className="btn_why">
                    {whyUsText}
                </button>
            </div>
        </div>
    );
}

const HelloRight = ({ imageUrl }) => {
    return (
        <div className="hello_right">
            <div>
                <img src={imageUrl} alt=""/>
            </div>
        </div>
    );
}

const MainFirst = ({ title, subtitle, buttonText, whyUsText, imageUrl }) => {
    return (
        <div className="main_first">
            <HelloLeft
                title={title}
                subtitle={subtitle}
                buttonText={buttonText}
                whyUsText={whyUsText}
            />
            <HelloRight
                imageUrl={imageUrl}
            />
        </div>
    );
}

export default MainFirst;