import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import styles from '../components/App/App.module.scss'

export const Home = () => {

    return (
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}