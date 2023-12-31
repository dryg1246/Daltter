import styles from "../../header/Header.module.scss";
import {Link} from "react-router-dom";

const LogoHeader = ({DaltterText, imageHeader}) => {
    return (
        <Link to="/">
            <div className={styles.logo_header}>
                <img width={51} height={49} src={imageHeader}/>
                <h1>{DaltterText}</h1>
            </div>
        </Link>
    )
}

export default LogoHeader;