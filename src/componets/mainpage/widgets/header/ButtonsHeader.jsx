import styles from "../../header/Header.module.scss";
import {Link} from "react-router-dom";

const ButtonLogin = ({ButtonOne}) => {
    return (
        <Link to="/Login">
            <button className={styles.btn_login}>
                {ButtonOne}
            </button>
        </Link>
    )
}
const ButtonSingUp = ({ButtonTwo}) => {
    return (
        <Link to="/SingUp">
            <button className={styles.btn_singUp}>
                {ButtonTwo}
            </button>
        </Link>
    )
}
const ButtonsHeader = ({ButtonOne, ButtonTwo}) => {
    return (
        <div className={styles.buttons_header}>
            <ButtonLogin
                ButtonOne={ButtonOne}
            />
            <ButtonSingUp
                ButtonTwo={ButtonTwo}
            />
        </div>
    )
}

export default ButtonsHeader;