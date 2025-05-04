import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                BAŞPINARLAR MUTFAK <i className={`fas fa-chevron-${showKitchenMenu ? 'up' : 'down'}`}></i>
              </button>
              {showKitchenMenu && (
                <ul className="kitchen-submenu">
                  <li><Link to="/recipes">YEMEK TARİFLERİ</Link></li>
                  <li><Link to="/tips">PÜF NOKTALAR</Link></li>
                  <li><Link to="/user-recipes">SİZDEN GELENLER</Link></li>
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
              <li><button className="footer-link">KURUMSAL</button></li>
              <li><button className="footer-link">ŞUBELERİMİZ</button></li>
              <li><button className="footer-link">KARİYER</button></li>
              <li><button className="footer-link">İLETİŞİM</button></li>
            </ul>
          </div>

          <div className="footer-section legal">
            <h3>GİZLİLİK VE SÖZLEŞMELER</h3>
            <ul>
              <li><button className="footer-link">İPTAL VE İADE ŞARTLARI</button></li>
              <li><button className="footer-link">MESAFELİ SATIŞ SÖZLEŞMESİ</button></li>
              <li><button className="footer-link">GİZLİLİK VE GÜVENLİK</button></li>
              <li><button className="footer-link">ÇEREZ POLİTİKASI</button></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
          <p>&copy; {new Date().getFullYear()} Başpınarlar Et. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 