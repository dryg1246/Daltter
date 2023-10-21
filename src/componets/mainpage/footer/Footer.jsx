import styles from './Footer.module.scss'
import FooterLogo from "../widgets/footer/FooterLogo";
import FooterText from "../widgets/footer/FooterText";

function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <FooterLogo
                    DaltterText="Daltter" imgFooter="/img/logo_black.png"
                />
                <FooterText/>
            </div>
        </footer>
    )
}

export default Footer