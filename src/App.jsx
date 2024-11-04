import React from "react";
import "./Global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import AboutUsPage from "./Components/AboutUsPage/AboutUsPage";
import WhatsApp from "./Components/WhatsApp/WhatsApp";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
        <WhatsApp/>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
