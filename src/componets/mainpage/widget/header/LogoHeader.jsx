import styles from "../../header/Header.module.scss";
import {Link} from "react-router-dom";

const LogoHeader = (props) => {
    return (
        <Link to="/">
            <div className={styles.logo_header}>
                <img width={51} height={49} src="/img/logo.png"/>
                <h1>daltter</h1>
            </div>
        </Link>
    )
}

export default LogoHeader;