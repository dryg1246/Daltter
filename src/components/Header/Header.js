import styles from './Header.module.scss'
import app from "../App/App";
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <Link to="/">
                    <div  className="d-flex text-decoration-none">
                        <img className={styles.logo} width={51} height={49} src="/img/logo.png"/>
                        <h1 className={styles.dallterText}>daltter</h1>
                    </div>
                </Link>
                <div className="d-flex text-decoration-none">
                    <Link to="/Features"> <div  className={styles.features} >Features</div></Link>
                    <Link to="/Features"> <div  className={styles.pricing}>Pricing</div> </Link>
                    <Link to="/Features"> <div  className={styles.contact}>Contact Us</div> </Link>
                    <div  className="d-flex">
                        <Link to="/login">
                        <button  onClick={() => alert(123)} className={styles.login}>
                            Login
                        </button>
                       </Link>
                        <button className={styles.singUp}>
                            Sign UP
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header