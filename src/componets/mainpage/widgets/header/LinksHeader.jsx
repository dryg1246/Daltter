import styles from "../../header/Header.module.scss";
import {Link} from "react-router-dom";

const LinksHeader = ({LinksFeatures, LinksPricing, LinksContact}) => {
    return (
        <div className={styles.links_header}>
            <Link to="/Features">
                <nav>{LinksFeatures}</nav>
            </Link>
            <Link to="/Pricing">
                <nav>{LinksPricing}</nav>
            </Link>
            <Link to="/ContactUs">
                <nav>{LinksContact}</nav>
            </Link>
        </div>
    )
}

export default LinksHeader;