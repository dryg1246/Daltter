import styles from "../../header/Header.module.scss";
import {Link} from "react-router-dom";

const LinksHeader = (props) => {
    return (
        <div className={styles.links_header}>
            <Link to="/Features">
                <nav>Features</nav>
            </Link>
            <Link to="/Pricing">
                <nav>Pricing</nav>
            </Link>
            <Link to="/ContactUs">
                <nav>Contact Us</nav>
            </Link>
        </div>
    )
}

export default LinksHeader;