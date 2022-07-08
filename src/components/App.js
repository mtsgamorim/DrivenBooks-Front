import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./SignInPage/SignInPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import BookPage from "./BookPage/BookPage";
import HomePage from "./HomePage/HomePage";
import Cart from "./Cart/Cart";
import { useState } from "react";
import UserContext from "../contexts/UserContext";

export default function App() {
  const [userData, setUserData] = useState(null);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/item/:id" element={<BookPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
