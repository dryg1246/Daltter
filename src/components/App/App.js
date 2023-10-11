import Header from "../Header/Header";
import "../../index.scss"
import Main from "../Main/Main";
import styles from './App.module.scss'
import Footer from "../Footer/Footer";
import {Features} from "../pages/Features";
import {Pricing} from "../pages/Pricing"

import {ContactUs} from "../pages/ContactUs"
import { Routes, Route, Link } from "react-router-dom";
import {useState} from "react";
import {Home} from "../pages/Home";
import Login from "../pages/Login/login";
import {Error404NotFound} from "../pages/Error404NotFound";


function App() {
    const [login, setLogin] = useState(false);

    return (
        <>
            <div className="container">
                <Routes>

                    <Route path="/Features" element={<Features />}  />
                    <Route path="/Pricing" element={<Pricing />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/404" element={<Error404NotFound/>} />
                </Routes>
            </div>
        </>
    );
}

export default App;
