import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showKitchenMenu, setShowKitchenMenu] = useState(false);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section company-info">
            <h3>BAŞPINARLAR ET</h3>

            <div className="kitchen-menu">
              <button
                className="kitchen-toggle"
                onClick={() => setShowKitchenMenu(!showKitchenMenu)}
              >
                BAŞPINARLAR MUTFAK{" "}
                <i
                  className={`fas fa-chevron-${
                    showKitchenMenu ? "up" : "down"
                  }`}
                ></i>
              </button>
              {showKitchenMenu && (
                <ul className="kitchen-submenu">
                  <li>
                    <Link to="/recipes">YEMEK TARİFLERİ</Link>
                  </li>
                  <li>
                    <Link to="/tips">PÜF NOKTALAR</Link>
                  </li>
                  <li>
                    <Link to="/user-recipes">SİZDEN GELENLER</Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="products-link">
              <Link to="/products">ÜRÜNLERİMİZ</Link>
            </div>
          </div>

          <div className="footer-section main-links">
            <h3>BAŞPINARLAR</h3>
            <ul>
              <li>
                <Link to="/corporate" className="footer-link">
                  KURUMSAL
                </Link>
              </li>
              <li>
                <Link to="/branches" className="footer-link">
                  ŞUBELERİMİZ
                </Link>
              </li>
              <li>
                <Link to="/career" className="footer-link">
                  KARİYER
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  İLETİŞİM
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section legal">
            <h3>GİZLİLİK VE SÖZLEŞMELER</h3>
            <ul>
              <li>
                <Link to="/cancellation-policy" className="footer-link">
                  İPTAL VE İADE ŞARTLARI
                </Link>
              </li>
              <li>
                <Link to="/distance-sales-agreement" className="footer-link">
                  MESAFELİ SATIŞ SÖZLEŞMESİ
                </Link>
              </li>
              <li>
                <Link to="/privacy-security" className="footer-link">
                  GİZLİLİK VE GÜVENLİK
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="footer-link">
                  ÇEREZ POLİTİKASI
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Başpınarlar Et. Tüm hakları
            saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
