import styles from './Header.module.scss'
import "../../../adaptive/mainpage/Adaptive.scss"
import ButtonsHeader from "../widgets/header/ButtonsHeader";
import LinksHeader from "../widgets/header/LinksHeader";
import LogoHeader from "../widgets/header/LogoHeader";


function Header(props) {
    return (
        <header>
            <div className={styles.header}>
                <LogoHeader/>
                <div className={styles.links_button}>
                    <LinksHeader/>
                    <ButtonsHeader/>
                </div>
            </div>
        </header>
    );
}

export default Header