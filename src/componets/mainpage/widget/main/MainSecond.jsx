import React from "react";

const MainSecond = (props) => {
    return (
        <div className="main_second">
            <div className="second_left">
                <img src="/img/Second-left.svg" alt=""/>
            </div>
            <div className="second_right">
                <h1 className="second_main">Our <span>service</span> is fully <br/> automated</h1>
                <p className="second_text">All you need is just a few clicks - and your clients <br/> will be in your hands. Forget about tens different <br/> services for one ad.</p>
                <button className="second_btn">
                    <h2 className="second_try_button"> Try it now</h2>
                </button>
            </div>
        </div>
    )
}

export default MainSecond;