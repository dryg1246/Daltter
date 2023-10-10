import styles from './Footer.module.scss'

function Footer() {
    return (
        <div>
            <div className={styles.footer}>
                <div className="d-flex justify-center ">
                    <img className=" logo pl-12px" width={50} height={50} src="/img/logo_black.png" />
                    <h1 className="dallter-text">daltter</h1>
                </div>
                <div className={styles.police}>
                    <nav>Register | </nav>
                    <nav> Terms of service | </nav>
                    <nav>Privacy policy | </nav>
                    <nav>Login </nav>
                </div>
            </div>
        </div>

    )
}
export default Footer