import styles from './Footer.module.scss'
import FooterLogo from "../widgets/footer/FooterLogo";
import FooterText from "../widgets/footer/FooterText";

function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <FooterLogo
                    DaltterText="Daltter"
                />
                <FooterText/>
            </div>
        </footer>
    )
}

export default Footer