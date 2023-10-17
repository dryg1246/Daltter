import styles from "../../footer/Footer.module.scss";
import {Link} from "react-router-dom";

const FooterLogo = (props) => {
    return (
        <div className={styles.footer_logo}>
            <img width={51} height={49} src="/img/logo_black.png" />
            <p>{props.DaltterText}</p>
        </div>
    )
}

export default FooterLogo;