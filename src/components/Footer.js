import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-section">
            <h3>BAŞPINARLAR ET</h3>
            <ul>
              <li><Link to="/">Ana Sayfa</Link></li>
              <li><Link to="/">Başpınarlar Mutfak</Link></li>
              <li><Link to="/products">Kurumsal</Link></li>
              <li><Link to="/about">Şubelerimiz</Link></li>
              <li><Link to="/contact">Kariyer</Link></li>
              <li><Link to="/contact">İletişim</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>GİZLİLİK VE SÖZLEŞMELER</h3>
            <ul>
              <li><Link to="/">İPTAL VE İADE ŞARTLARI</Link></li>
              <li><Link to="/">MESAFELİ SATIŞ SÖZLEŞMESİ</Link></li>
              <li><Link to="/products">GİZLİLİK VE GÜVENLİK</Link></li>
              <li><Link to="/about">ÇEREZ POLİTİKASI</Link></li>
              
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Sosyal Medya</h3>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 