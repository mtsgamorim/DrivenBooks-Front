import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./SignInPage/SignInPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import BookPage from "./BookPage/BookPage";
import HomePage from "./HomePage/HomePage";
import Checkout from "./Checkout/Checkout";
import Cart from "./Cart/Cart";
import { useState } from "react";
import UserContext from "../contexts/UserContext";
import FinishOrderPage from "./FinishOrderPage/FinishOrderPage";

export default function App() {
  const [userData, setUserData] = useState(null);
  const [sum, setSum] = useState(0);
  const [cart, setCart] = useState([]);
  return (
    <UserContext.Provider
      value={{ userData, setUserData, sum, setSum, cart, setCart }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/item/:id" element={<BookPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/FinishOrderPage" element={<FinishOrderPage />}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
