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
import RecipeDetail from "./pages/RecipeDetail";
import Tips from "./pages/Tips";
import UserRecipes from "./pages/UserRecipes";
import CancellationPolicy from "./pages/CancellationPolicy";
import DistanceSalesAgreement from "./pages/DistanceSalesAgreement";
import PrivacySecurity from "./pages/PrivacySecurity";
import CookiePolicy from "./pages/CookiePolicy";
import MeatQuality from "./pages/MeatQuality";
import MeatCuts from "./pages/MeatCuts";
import BeefSteak from "./pages/BeefSteak";
import BeefSteakDetail from "./pages/BeefSteakDetail";
import ProcessedMeats from "./pages/ProcessedMeats";
import ProcessedMeatsDetail from "./pages/ProcessedMeatsDetail";
import ButcherGroup from "./pages/ButcherGroup";
import ButcherGroupDetail from "./pages/ButcherGroupDetail";
import DelicatessenGroup from "./pages/DelicatessenGroup";
import DelicatessenGroupDetail from "./pages/DelicatessenGroupDetail";
import Pastirma from "./pages/Pastirma";
import PastirmaDetail from "./pages/PastirmaDetail";
import Sucuk from "./pages/Sucuk";
import SucukDetail from "./pages/SucukDetail";
import Kofte from "./pages/Kofte";
import KofteDetail from "./pages/KofteDetail";
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
            <Route path="/products/beef-steak" element={<BeefSteak />} />
            <Route path="/products/beef-steak/:id" element={<BeefSteakDetail />} />
            <Route path="/products/processed-meats" element={<ProcessedMeats />} />
            <Route path="/products/processed-meats/:id" element={<ProcessedMeatsDetail />} />
            <Route path="/products/butcher-group" element={<ButcherGroup />} />
            <Route path="/products/butcher-group/:id" element={<ButcherGroupDetail />} />
            <Route path="/products/delicatessen-group" element={<DelicatessenGroup />} />
            <Route path="/products/delicatessen-group/:id" element={<DelicatessenGroupDetail />} />
            <Route path="/products/pastirma" element={<Pastirma />} />
            <Route path="/products/pastirma/:id" element={<PastirmaDetail />} />
            <Route path="/products/sucuk" element={<Sucuk />} />
            <Route path="/products/sucuk/:id" element={<SucukDetail />} />
            <Route path="/products/kofte" element={<Kofte />} />
            <Route path="/products/kofte/:id" element={<KofteDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/career" element={<Career />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
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
