import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignInPage from "./SignInPage/SignInPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import HomePage from "./HomePage/HomePage";
import { useState } from "react";
import UserContext from "../contexts/UserContext";

export default function App(){
    const [userData,setUserData] = useState(null);
    return(
        <UserContext.Provider value={{userData, setUserData}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    {/* PODUTO "/items" ou "/item" ou "/books" ou "/book" 
                    CARRINHO "/cart" ou "/nav-cart"
                    COMPRA */}
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}