import React from 'react';

const About = () => {
  const features = [
    {
      id: 1,
      title: 'Kaliteli Et',
      description: 'En kaliteli et ürünlerini müşterilerimize sunuyoruz.',
      icon: 'fas fa-star'
    },
    {
      id: 2,
      title: 'Taze Ürünler',
      description: 'Tüm ürünlerimiz günlük olarak taze şekilde hazırlanır.',
      icon: 'fas fa-leaf'
    },
    {
      id: 3,
      title: 'Uzman Ekip',
      description: 'Alanında uzman ekibimiz ile hizmet veriyoruz.',
      icon: 'fas fa-users'
    },
    {
      id: 4,
      title: 'Hijyenik Ortam',
      description: 'Tüm işlemlerimiz hijyenik ortamlarda gerçekleştirilir.',
      icon: 'fas fa-shield-alt'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>Hakkımızda</h1>
          <p>Kalite ve lezzetin adresi</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="container">
          <div className="about-text">
            <h2>Biz Kimiz?</h2>
            <p>
              Yılların deneyimi ve uzman kadromuz ile en kaliteli et ürünlerini müşterilerimize sunuyoruz.
              Taze ve lezzetli ürünlerimiz ile sizlere hizmet vermekten gurur duyuyoruz.
            </p>
            <p>
              Müşteri memnuniyetini ön planda tutarak, hijyenik ortamlarda hazırlanan ürünlerimizi
              en uygun fiyatlarla sizlere ulaştırıyoruz.
            </p>
          </div>

          {/* Features Grid */}
          <div className="features-grid">
            {features.map(feature => (
              <div key={feature.id} className="feature-card">
                <i className={feature.icon}></i>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 