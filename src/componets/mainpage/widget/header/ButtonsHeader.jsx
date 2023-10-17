import styles from "../../header/Header.module.scss";
import {Link} from "react-router-dom";

const ButtonsHeader = (props) => {
        return (
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
        )
}

export default ButtonsHeader;