import styles from './Footer.module.scss'
import FooterLogo from "../widget/footer/FooterLogo";
import FooterText from "../widget/footer/FooterText";

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