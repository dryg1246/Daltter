import styles from './Footer.module.scss'

function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.footer_logo}>
                    <img width={51} height={49} src="/img/logo_black.png" />
                    <p>daltter</p>
                </div>
                <div className={styles.footer_text}>
                    <nav>Register  </nav>
                    <div  className={styles.line}></div>
                    <nav> Terms of service  </nav>
                    <div className={styles.line}></div>
                    <nav>Privacy policy  </nav>
                    <div className={styles.line}></div>
                    <nav>Login </nav>
                </div>
            </div>
    </footer>
    )
}
export default Footer