import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav left-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                ANASAYFA
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/kitchen" className="nav-link">
                BAŞPINARLAR MUTFAK
              </Link>
            </li>
          </ul>
        </nav>

        <div className="logo">
          <Link to="/">
            <img src="/images/logo-main.png" alt="Başpınarlar Logo" />
          </Link>
        </div>

        <nav className="nav right-nav">
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

        {/* Mobile Nav */}
        <nav className={`nav mobile-nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleLinkClick}>
                ANASAYFA
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/kitchen"
                className="nav-link"
                onClick={handleLinkClick}
              >
                BAŞPINARLAR MUTFAK
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-link"
                onClick={handleLinkClick}
              >
                ÜRÜNLERİMİZ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                onClick={handleLinkClick}
              >
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
