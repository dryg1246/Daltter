import "../../index.scss"
import { Features } from "../../pages/Features";
import { Pricing } from "../../pages/Pricing";
import { ContactUs } from "../../pages/ContactUs";
import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home";
import Login from "../../pages/Register/login";
import { Error404NotFound } from "../../pages/Error/Error404NotFound";
import SingUp from "../../pages/Register/SingUp";
import PasswordRecovery from "../../pages/Register/PasswordRecovery";
import NewPassword from "../../pages/Register/NewPassword";
import SuccesfulRecovery from "../../pages/Register/SuccesfulRecovery";
import Password from "../../pages/Register/Password";

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
                    <Route path="/NewPassword" element={<NewPassword />} />
                    <Route path="/Password" element={<Password />} />
                    <Route path="/SuccesfulRecovery" element={<SuccesfulRecovery />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error404NotFound />} />
                </Routes>
            </div>
        </>
    );
}

export default App;