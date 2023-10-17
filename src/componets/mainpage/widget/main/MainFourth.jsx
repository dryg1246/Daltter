import React from "react";

const MainFourth = (props) => {
    return (
        <div className="main_fourth">
            <h1>Not sure if our service is right for you?</h1>
            <div className="leave_email">
                <p>Leave us your email and we <br/> will write to you:</p>
                <div className="email_input">
                    <input type="text" className="email_address" placeholder='Email Address'/>
                    <div>
                        <img src="/img/send_btn.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFourth;