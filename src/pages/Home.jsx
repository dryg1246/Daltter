import React from "react";
import Header from "../componets/mainpage/header/Header";
import Main from "../componets/mainpage/main/Main";
import Footer from "../componets/mainpage/footer/Footer";

export const Home = () => {

    return (
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}