import styles from "../../footer/Footer.module.scss";
import {Link} from "react-router-dom";

const FooterText = (props) => {
    return (
        <div className={styles.footer_text}>
            <Link to="*">
                <nav>Register</nav>
            </Link>
            <div className={styles.line}></div>
            <Link to="*">
                <nav> Terms of service</nav>
            </Link>
            <div className={styles.line}></div>
            <Link to="*">
                <nav>Privacy policy</nav>
            </Link>
            <div className={styles.line}></div>
            <Link to="*">
                <nav>Login</nav>
            </Link>
        </div>
    )
}

export default FooterText;