import styles from "../../header/Header.module.scss";
import {Link} from "react-router-dom";

const ButtonsHeader = ({ButtonOne, ButtonTwo}) => {
        return (
            <div className={styles.buttons_header}>
                <Link to="/Login">
                    <button className={styles.btn_login}>
                        {ButtonOne}
                    </button>
                </Link>
                <Link to="/SingUp">
                    <button className={styles.btn_singUp}>
                        {ButtonTwo}
                    </button>
                </Link>
            </div>
        )
}

export default ButtonsHeader;