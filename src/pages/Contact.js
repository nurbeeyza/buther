import React from "react";
import "./Contact.css";

const Contact = () => {
  const companyInfo = {
    siteName: "Başpınarlar Et Entegre & Steak House",
    officialName:
      "Başpınarlar Hayvancılık Gıda Restoran Sanayi ve Ticaret Limited şirketi",
    phone: "0 222 228 00 93 / 0 536 461 25 08",
    email: "info@baspinarlaret.com",
    address:
      "75.Yıl(Sultandere) Mh. ESTİM Toptancılar Sitesi H Blok No:21 Odunpazarı/ESKİŞEHİR",
    taxNo: "149 082 5725",
    taxOffice: "Eskişehir",
    mersisNo: "0149082572500001",
    returnForm: "İade başvuru formu",
    bank: "T.C. Ziraat Bankası A.Ş.",
    iban: "TR98 0001 0020 6691 6373 6750 01",
    workingHours: "Pazartesi - Cumartesi / 08.00-18.00",
  };

  const socialMediaLinks = [
    {
      id: 1,
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100062955683421",
      icon: "/images/fb.png",
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://www.instagram.com/baspinarlar_et/",
      icon: "/images/insta.png",
    },
    {
      id: 3,
      name: "Twitter",
      url: "https://x.com/baspi_et",
      icon: "/images/x-icon.png",
    },
  ];

  const contactInfo = [
    {
      id: 1,
      title: "Adres",
      info: companyInfo.address,
      icon: "fas fa-map-marker-alt",
    },
    {
      id: 2,
      title: "Telefon",
      info: companyInfo.phone,
      icon: "fas fa-phone-alt",
    },
    {
      id: 3,
      title: "E-posta",
      info: companyInfo.email,
      icon: "fas fa-envelope",
    },
    {
      id: 4,
      title: "Çalışma Saatleri",
      info: companyInfo.workingHours,
      icon: "fas fa-clock",
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>İLETİŞİM</h1>
          <p>Başpınarlar Et ile iletişime geçin</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Company Info Section */}
            <div className="company-info-section">
              <div className="company-logo-name">
                <h2>{companyInfo.siteName}</h2>
                <p className="official-name">{companyInfo.officialName}</p>
              </div>

              <div className="company-details">
                <h3>Firma Bilgileri</h3>
                <ul className="company-details-list">
                  <li>
                    <span className="detail-label">FİRMA SİTE ADI:</span>
                    <span className="detail-value">{companyInfo.siteName}</span>
                  </li>
                  <li>
                    <span className="detail-label">FİRMA RESMİ ADI:</span>
                    <span className="detail-value">
                      {companyInfo.officialName}
                    </span>
                  </li>
                  <li>
                    <span className="detail-label">TELEFON:</span>
                    <span className="detail-value">{companyInfo.phone}</span>
                  </li>
                  <li>
                    <span className="detail-label">EMAİL:</span>
                    <span className="detail-value">{companyInfo.email}</span>
                  </li>
                  <li>
                    <span className="detail-label">ADRES:</span>
                    <span className="detail-value">{companyInfo.address}</span>
                  </li>
                  <li>
                    <span className="detail-label">VERGİ NO:</span>
                    <span className="detail-value">{companyInfo.taxNo}</span>
                  </li>
                  <li>
                    <span className="detail-label">VERGİ DAİRESİ:</span>
                    <span className="detail-value">
                      {companyInfo.taxOffice}
                    </span>
                  </li>
                  <li>
                    <span className="detail-label">MERSİS NO:</span>
                    <span className="detail-value">{companyInfo.mersisNo}</span>
                  </li>
                  <li>
                    <span className="detail-label">İADE BAŞVURUSU:</span>
                    <span className="detail-value">
                      {companyInfo.returnForm}
                    </span>
                  </li>
                  <li>
                    <span className="detail-label">BANKA ŞUBESİ(IBAN):</span>
                    <span className="detail-value">{companyInfo.bank}</span>
                  </li>
                  <li>
                    <span className="detail-label">(Iban no:)</span>
                    <span className="detail-value">{companyInfo.iban}</span>
                  </li>
                  <li>
                    <span className="detail-label">
                      MÜŞTERİ HİZMETLERİ ÇALIŞMA SAATLERİ:
                    </span>
                    <span className="detail-value">
                      {companyInfo.workingHours}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="social-media-section">
                <h3>Bizi sosyal medyada takip edin!</h3>
                <div className="social-links">
                  {socialMediaLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <img
                        src={link.icon}
                        alt={link.name}
                        className="social-icon"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map and Contact Form Section */}
            <div className="map-form-section">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d98171.2095313107!2d30.527228496288355!3d39.74301347083766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x14cc3b6994a8217b%3A0xe8abba33ecd88399!2s75Y%C4%B1l%20Mh%2C%20P%C4%B1narhisar%20Sk.%20Estim%20Toptanc%C4%B1lar%20Sitesi%20H%20Blok%20NO%3A21%2C%2026250%20Odunpazar%C4%B1%2FEski%C5%9Fehir!3m2!1d39.743042599999995!2d30.6096294!5e0!3m2!1str!2str!4v1703055477859!5m2!1str!2str"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map - Başpınarlar Et"
                ></iframe>
              </div>

              <div className="contact-form-container">
                <h3>Bizimle İletişime Geçin</h3>
                <form className="contact-form">
                  <div className="form-group">
                    <input type="text" placeholder="Adınız" required />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="E-posta Adresiniz"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Konu" required />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Mesajınız" required></textarea>
                  </div>
                  <button type="submit" className="submit-button">
                    GÖNDER
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Quick Contact Info Cards */}
          <div className="quick-contact-section">
            <div className="quick-contact-grid">
              {contactInfo.map((item) => (
                <div key={item.id} className="quick-contact-card">
                  <div className="icon-container">
                    <i className={item.icon}></i>
                  </div>
                  <div className="contact-text">
                    <h4>{item.title}</h4>
                    <p>{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
