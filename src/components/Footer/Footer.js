import styles from './Footer.module.scss'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.footer_logo}>
                    <img width={51} height={49} src="/img/logo_black.png" />
                    <p>daltter</p>
                </div>
                <div className={styles.footer_text}>

                    <Link to="*"> <nav>Register  </nav> </Link>
                     <div  className={styles.line}></div>
                        <Link to="*"> <nav> Terms of service  </nav></Link>
                           <div className={styles.line}></div>
                                <Link to="*"> <nav>Privacy policy  </nav></Link>
                                   <div className={styles.line}></div>
                                        <Link to="*"> <nav>Login </nav></Link>

                </div>
            </div>
    </footer>
    )
}
export default Footer