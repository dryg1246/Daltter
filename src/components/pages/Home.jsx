import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import styles from '../App/App.module.scss'

export const Home = () => {

    return (
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}