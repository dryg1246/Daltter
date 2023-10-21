import styles from "../../footer/Footer.module.scss";
import { Link } from "react-router-dom";

const FooterText = ({registerText, termsText, privacyText, loginText}) => {
    return (
        <div className={styles.footer_text}>
            <Link to="/register">
                <nav>{registerText}</nav>
            </Link>
            <div className={styles.line}></div>
            <Link to="/terms-of-service">
                <nav>{termsText}</nav>
            </Link>
            <div className={styles.line}></div>
            <Link to="/privacy-policy">
                <nav>{privacyText}</nav>
            </Link>
            <div className={styles.line}></div>
            <Link to="/login">
                <nav>{loginText}</nav>
            </Link>
        </div>
    );
}

export default FooterText;