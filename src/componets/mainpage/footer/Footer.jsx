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
                <FooterText
                    registerText="Register"
                    termsText="Terms of Service"
                    privacyText="Privacy Policy"
                    loginText="Login"
                />
            </div>
        </footer>
    )
}

export default Footer