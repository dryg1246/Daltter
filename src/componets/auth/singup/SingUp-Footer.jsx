import React from "react";
const SingUp = () => {
    return(
            <footer className="footer_register">
                <div className="footer_container">
                    <nav className="footer_container_link">
                        <Link to="/SignUp"> Already have an account? Login </Link>
                    </nav>
                </div>
            </footer>
        )
}
function SingUpFooter() {
    return (
        <>
          <SingUp />
        </>
    );
}

export default SingUpFooter;