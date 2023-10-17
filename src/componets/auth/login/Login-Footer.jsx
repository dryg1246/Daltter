import {Link} from "react-router-dom";
import React from "react";

const Footer = ({text}) => {
    return (
        <footer className="footer_register">
            <div className="footer_container">
                <Link to="/SingUp">{text}</Link>
            </div>
        </footer>
    )
}

function LoginFooter() {
    return (
        <>
            <Footer text="Don’t have an account? Sign Up"/>
        </>
    );
}

export default LoginFooter;