import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Branches from "./pages/Branches";
import Career from "./pages/Career";
import Corporate from "./pages/Corporate";
import Recipes from "./pages/Recipes";
import Tips from "./pages/Tips";
import UserRecipes from "./pages/UserRecipes";
import CancellationPolicy from "./pages/CancellationPolicy";
import DistanceSalesAgreement from "./pages/DistanceSalesAgreement";
import PrivacySecurity from "./pages/PrivacySecurity";
import CookiePolicy from "./pages/CookiePolicy";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/career" element={<Career />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/user-recipes" element={<UserRecipes />} />
            <Route
              path="/cancellation-policy"
              element={<CancellationPolicy />}
            />
            <Route
              path="/distance-sales-agreement"
              element={<DistanceSalesAgreement />}
            />
            <Route path="/privacy-security" element={<PrivacySecurity />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
