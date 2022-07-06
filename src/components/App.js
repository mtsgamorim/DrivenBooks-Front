import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignInPage from "./SignInPage/SignInPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import HomePage from "./HomePage/HomePage";

export default function App(){
    return(
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
    );
}