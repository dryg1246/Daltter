import React from "react";


const MainFourth = ({ title, emailText, placeholder}) => {


    return (
        <div className="main_fourth">
            <h1>{title}</h1>
            <div className="leave_email">
                <p>Leave us your email and we <br/> will write to you:</p>
                <div className="email_input">
                    <input type="text" className="email_address" placeholder={placeholder} />
                    <div>
                        <img src="/img/send_btn.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFourth;