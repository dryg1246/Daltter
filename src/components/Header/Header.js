import styles from './Header.module.scss'
import app from "../App/App";
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <header>
        <div className={styles.header}>
                <Link to="/">
                    <div className={styles.logo_header}>
                        <img  width={51} height={49} src="/img/logo.png"/>
                        <h1>daltter</h1>
                    </div>
                </Link>
            <div className={styles.links_button}>
                <div className={styles.links_header}>
                    <Link to="/Features">
                        <nav>Features</nav>
                    </Link>
                    <Link to="/Pricing">
                        <nav>Pricing</nav>
                    </Link>
                    <Link to="/ContactUs">
                        <nav>Contact Us</nav>
                    </Link>
                </div>
                    <div className={styles.buttons_header}>
                        <Link to="/login">
                            <button className={styles.btn_login}>
                                Login
                            </button>
                        </Link>
                        <Link to="/SingUp">
                            <button className={styles.btn_singUp}>
                                Sign up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
</header>
    );
}

export default Header