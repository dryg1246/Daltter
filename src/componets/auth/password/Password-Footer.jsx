import {Link} from "react-router-dom";
import React from "react";

const Footer = ({text}) => {
    return (
        <footer className="footer_register">
            <div className="footer_container">
                <nav className="footer_container_link">
                    <Link to="/SignUp">{text}</Link>
                </nav>
            </div>
        </footer>
    )
}

function PasswordFooter() {
    return (
        <>
            <Footer text="Already have an account? Login "/>
        </>
    );
}

export default PasswordFooter;