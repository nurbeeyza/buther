import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <nav className={`nav left-nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                ANASAYFA
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link">KURUMSAL</span>
              <ul className="dropdown-menu">
                <ul>
                  <Link to="/about">HAKKIMIZDA</Link>
                </ul>
                <ul>
                  <Link to="/branches">ŞUBELERİMİZ</Link>
                </ul>
                <ul>
                  <Link to="/career">KARİYER</Link>
                </ul>
              </ul>
            </li>
          </ul>
        </nav>

        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Başpınarlar Logo" />
          </Link>
        </div>

        <nav className={`nav right-nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                ÜRÜNLERİMİZ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                İLETİŞİM
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
