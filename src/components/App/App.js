import Header from "../Header/Header";
import "../../index.scss"
import Main from "../Main/Main";
import styles from './App.module.scss'
import Footer from "../Footer/Footer";
import { Features } from "../pages/Features";
import { Pricing } from "../pages/Pricing"
import { ContactUs } from "../pages/ContactUs"
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Home } from "../pages/Home";
import Login from "../pages/Register/login";
import { Error404NotFound } from "../pages/Error/Error404NotFound";
import SingUp from "../pages/Register/SingUp";
import SingUpPassword from "../pages/Register/SingUpPassword";
import PasswordRecovery from "../pages/Register/PasswordRecovery";

const App = () => {
    return (
        <>
            <div className="container">
                <Routes>
                    <Route path="/Features" element={<Features />} />
                    <Route path="/Pricing" element={<Pricing />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/SingUp" element={<SingUp />} />
                    <Route path="/PasswordRecovery" element={<PasswordRecovery />} />
                    <Route path="/Password" element={<SingUpPassword />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error404NotFound />} />

                </Routes>
            </div>
        </>
    );
}

export default App;