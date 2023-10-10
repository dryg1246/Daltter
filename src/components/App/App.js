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


function App() {
    const [login, setLogin] = useState(false);

    return (
        <>
            <div className="container">
                <Routes>

                    <Route path="/Features" element={<ContactUs />} exact />
                    <Route path="/Pricing" element={<Pricing />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/Login" element={<ContactUs />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
