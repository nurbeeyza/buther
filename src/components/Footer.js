import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section company-info">
            <h3>BAŞPINARLAR ET</h3>
            <p>Kaliteli ve lezzetli et ürünleri ile hizmetinizdeyiz.</p>
            <div className="contact-info">
              <p><i className="fas fa-phone"></i> 0 222 228 00 93</p>
              <p><i className="fas fa-envelope"></i> info@baspinarlaret.com</p>
              <p><i className="fas fa-map-marker-alt"></i> 75.Yıl(Sultandere) Mh. ESTİM Toptancılar Sitesi H Blok No:21 Odunpazarı/ESKİŞEHİR</p>
            </div>
          </div>

          <div className="footer-section main-links">
            <h3>Ana Menü</h3>
            <ul>
              <li><Link to="/">Ana Sayfa</Link></li>
              <li><Link to="/products">Ürünlerimiz</Link></li>
              <li><Link to="/contact">İletişim</Link></li>
            </ul>
          </div>

          <div className="footer-section kitchen">
            <h3>BAŞPINARLAR MUTFAK</h3>
            <ul>
              <li><Link to="/recipes">Yemek Tarifleri</Link></li>
              <li><Link to="/tips">Püf Noktalar</Link></li>
              <li><Link to="/user-recipes">Sizden Gelenler</Link></li>
            </ul>
          </div>

          <div className="footer-section corporate">
            <h3>KURUMSAL</h3>
            <ul>
              <li><Link to="/about">Hakkımızda</Link></li>
              <li><Link to="/branches">Şubelerimiz</Link></li>
              <li><Link to="/career">Kariyer</Link></li>
            </ul>
          </div>

          <div className="footer-section legal">
            <h3>YASAL</h3>
            <ul>
              <li><Link to="/">İptal ve İade Şartları</Link></li>
              <li><Link to="/">Mesafeli Satış Sözleşmesi</Link></li>
              <li><Link to="/">Gizlilik ve Güvenlik</Link></li>
              <li><Link to="/">Çerez Politikası</Link></li>
            </ul>
          </div>

          <div className="footer-section social">
            <h3>SOSYAL MEDYA</h3>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Başpınarlar Et. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 