import React from "react";
import Main from "../componets/mainpage/main/Main";
import Footer from "../componets/mainpage/footer/Footer";
import Header from "../componets/mainpage/header/Header"

export const Home = () => {

    return (
        <div className="container">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}