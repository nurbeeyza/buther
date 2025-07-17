import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Branches from "./pages/Branches";
import Career from "./pages/Career";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import Tips from "./pages/Tips";
import UserRecipes from "./pages/UserRecipes";
import PrivacySecurity from "./pages/PrivacySecurity";
import CookiePolicy from "./pages/CookiePolicy";
import MeatQuality from "./pages/MeatQuality";
import MeatCuts from "./pages/MeatCuts";
import DanaGrubu from "./pages/DanaGrubu";
import DanaGrubuDetail from "./pages/DanaGrubuDetail";
import KuzuGrubu from "./pages/KuzuGrubu";
import KuzuGrubuDetail from "./pages/KuzuGrubuDetail";
import BeefSteakDetail from "./pages/BeefSteakDetail";
import SarkuteriGrubu from "./pages/SarkuteriGrubu";
import SarkuteriGrubuDetail from "./pages/SarkuteriGrubuDetail";
import IslenmisUrunGrubu from "./pages/IslenmisUrunGrubu";
import IslenmisUrunGrubuDetail from "./pages/IslenmisUrunGrubuDetail";
import Kitchen from "./pages/Kitchen";
import DanaBeefSteak from "./pages/DanaBeefSteak";
import DanaBeefSteakDetail from "./pages/DanaBeefSteakDetail";
import "./index.css";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/dana-grubu" element={<DanaGrubu />} />
            <Route
              path="/products/dana-grubu/:id"
              element={<DanaGrubuDetail />}
            />
            <Route path="/products/kuzu-grubu" element={<KuzuGrubu />} />
            <Route
              path="/products/kuzu-grubu/:id"
              element={<KuzuGrubuDetail />}
            />
            <Route path="/products/dana-beef-steak" element={<DanaBeefSteak />} />
            <Route
              path="/products/dana-beef-steak/:id"
              element={<DanaBeefSteakDetail />}
            />
            <Route
              path="/products/sarkuteri-grubu"
              element={<SarkuteriGrubu />}
            />
            <Route
              path="/products/sarkuteri-grubu/:id"
              element={<SarkuteriGrubuDetail />}
            />
            <Route
              path="/products/islenmis-urun-grubu"
              element={<IslenmisUrunGrubu />}
            />
            <Route
              path="/products/islenmis-urun-grubu/:id"
              element={<IslenmisUrunGrubuDetail />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/career" element={<Career />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/user-recipes" element={<UserRecipes />} />
            <Route path="/kitchen" element={<Kitchen />} />

            <Route path="/privacy-security" element={<PrivacySecurity />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/tips/meat-quality" element={<MeatQuality />} />
            <Route path="/tips/meat-cuts" element={<MeatCuts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
