import styles from "../../footer/Footer.module.scss";

const FooterLogo = ({DaltterText, imgFooter}) => {
    return (
        <div className={styles.footer_logo}>
            <img width={51} height={49} src={imgFooter} />
            <p>{DaltterText}</p>
        </div>
    )
}

export default FooterLogo;