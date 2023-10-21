import styles from './Header.module.scss'
import "../../../adaptive/mainpage/Adaptive.scss"
import ButtonsHeader from "../widgets/header/ButtonsHeader";
import LinksHeader from "../widgets/header/LinksHeader";
import LogoHeader from "../widgets/header/LogoHeader";


function Header(props) {
    return (
        <header>
            <div className={styles.header}>
                <LogoHeader
                    DaltterText="Daltter"
                    imageHeader="/img/logo.png"
                />
                <div className={styles.links_button}>
                    <LinksHeader
                        LinksContact="Contact Us"
                        LinksFeatures="Features"
                        LinksPricing="Pricing"
                    />
                    <ButtonsHeader
                        ButtonOne="Login"
                        ButtonTwo="Sing Up"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header