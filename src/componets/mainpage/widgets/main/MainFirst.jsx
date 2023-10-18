import React from "react";

const MainFirst = (props) => {
    return (
        <div className="main_first">
            <div className="hello_left">
                <h1 className="daltter_main"><span className="dallter_text">daltter - </span><br/> is the future <br/> of marketing.</h1>
                <p className="email_main">Email advertising has never been so <br/> effective and affordable for everyone!</p>
                <div className="btn_first">
                    <button className="btn_try">
                        Try it now
                    </button>
                    <button className="btn_why">
                        Why us?
                    </button>
                </div>
            </div>
            <div className="hello_right">
                <div>
                    <img src="/img/Hello-right.svg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default MainFirst;