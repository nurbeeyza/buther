import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      title: 'Adres',
      info: '75.Yıl(Sultandere) Mh. ESTİM Toptancılar Sitesi H Blok No:21 Odunpazarı/ESKİŞEHİR',
      icon: 'fas fa-map-marker-alt'
    },
    {
      id: 2,
      title: 'Telefon',
      info: '0 222 228 00 93 / 0 536 461 25 08',
      icon: 'fas fa-phone'
    },
    {
      id: 3,
      title: 'E-posta',
      info: 'info@baspinarlaret.com',
      icon: 'fas fa-envelope'
    },
    {
      id: 4,
      title: 'Çalışma Saatleri',
      info: 'Pazartesi - Cumartesi: 08:00 - 18:00',
      icon: 'fas fa-clock'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>İletişim</h1>
          <p>Bizimle iletişime geçin</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          {/* Contact Info Cards */}
          <div className="contact-info-grid">
            {contactInfo.map(item => (
              <div key={item.id} className="contact-info-card">
                <i className={item.icon}></i>
                <h3>{item.title}</h3>
                <p>{item.info}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h2>Bize Mesaj Gönderin</h2>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Adınız" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="E-posta Adresiniz" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Konu" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Mesajınız" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Gönder</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 