import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "BAŞPINARLAR ET",
      subtitle: "ENTEGRE & STEAK HOUSE",
      description: "Kaliteli ve lezzetli et ürünleri ile hizmetinizdeyiz.",
      background: "/images/kirmizi-et.png",
      className: "first-slide"
    },
    {
      title: "20 YILI AŞKIN",
      subtitle: "Severek Tükettiğiniz",
      description: "Başpınarlar Et Entegre & Steak House ürünleri artık 7/24 bir telefon kadar yanınızda.",
      background: "/images/vadi_kasap_slayt_arkaplan_02_1600x625_0.png",
      className: "second-slide"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const categories = [
    {
      id: 1,
      title: "BEEF'S STEAK",
      description: 'En kaliteli dana etlerinden hazırlanan steak çeşitlerimiz ile lezzetli sofralar sizleri bekliyor...',
      image: '/images/kucuket.png',
      link: '/products?category=steak'
    },
    {
      id: 2,
      title: 'İŞLENMİŞ ETLER',
      description: 'Özenle hazırlanmış işlenmiş et ürünlerimiz ile pratik ve lezzetli yemekler...',
      image: '/images/kucuket.png',
      link: '/products?category=islenmis'
    },
    {
      id: 3,
      title: 'KASAP GRUBU',
      description: 'Taze ve kaliteli kasap ürünlerimiz ile mutfağınızın vazgeçilmezi olacak lezzetler...',
      image: '/images/kucuket.png',
      link: '/products?category=kasap'
    },
    {
      id: 4,
      title: 'ŞARKÜTERİ GRUBU',
      description: 'Çeşit çeşit şarküteri ürünlerimiz ile kahvaltılarınıza lezzet katın...',
      image: '/images/kucuket.png',
      link: '/products?category=sarkuteri'
    },
    {
      id: 5,
      title: 'PASTIRMA',
      description: 'Geleneksel lezzetimiz pastırmalarımız ile sofralarınıza özel bir dokunuş...',
      image: '/images/kucuket.png',
      link: '/products?category=pastirma'
    },
    {
      id: 6,
      title: 'SUCUK',
      description: 'Özel baharatlarımız ile hazırlanan sucuklarımız ile kahvaltılarınıza lezzet katın...',
      image: '/images/kucuket.png',
      link: '/products?category=sucuk'
    },
    {
      id: 7,
      title: 'KÖFTE',
      description: 'Özel karışımlarımız ile hazırlanan köftelerimiz ile lezzetli sofralar...',
      image: '/images/kucuket.png',
      link: '/products?category=kofte'
    }
  ];

  const features = [
    {
      id: 1,
      title: 'Hızlı Teslimat',
      description: 'Eskişehir İçi ÜCRETSİZ Teslimat, Eskişehir Dışı 500TL ve Üzeri Alışverişlerinizde ÜCRETSİZ Kargo',
      icon: 'fas fa-truck'
    },
    {
      id: 2,
      title: 'Özenli Paketleme',
      description: 'Siparişleriniz Özel Ambalajlarımız İle Özenle Paketlenmektedir',
      icon: 'fas fa-box'
    },
    {
      id: 3,
      title: 'Müşteri Hizmetleri',
      description: 'Her Gün 09:00-18:00 Arası Sizlere Yardımcı Olmaktayız',
      icon: 'fas fa-headset'
    },
    {
      id: 4,
      title: 'Güvenli Ödeme',
      description: '3D Güvenlik Altyapımız İle Kart Bilgileriniz Güvendedir',
      icon: 'fas fa-shield-alt'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        {slides.map((slide, index) => (
          <div
            key={`slide-${index}-${currentSlide}`}
            className={`hero-background ${slide.className} ${
              currentSlide === index ? 'active' : ''
            }`}
            style={{
              backgroundImage: slide.background ? `url(${slide.background})` : 'none'
            }}
          >
            {slide.image && (
              <div 
                className="image-content" 
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  width: '100%',
                  height: '100%'
                }}
              />
            )}
          </div>
        ))}

        {slides.map((slide, index) => (
          <div
            key={`slide-${index}-${currentSlide}`}
            className={`hero-slide ${slide.className} ${
              currentSlide === index ? 'active' : ''
            }`}
          >
            <div className="text-content">
              <h1>{slide.title}</h1>
              <h2>{slide.subtitle}</h2>
              <p>{slide.description}</p>
              <Link to="/products" className="btn">ÜRÜNLERİMİZİ KEŞFET</Link>
            </div>
          </div>
        ))}

        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <h2 className="section-title">ÜRÜNLERİMİZ</h2>
          <p className="section-subtitle">neler yapıyoruz?</p>
          <p className="section-description">
            Başpınarlar'da dana eti, kuzu eti, tavuk eti, köfte çeşitleri, sucuk çeşitleri, mangallık et ürünleri
            ve daha bir çok ürün çeşidi ile hizmet vermektedir...
          </p>
          <div className="category-grid">
            {categories.map(category => (
              <Link to={category.link} key={category.id} className="category-card">
                <div className="category-image">
                  <img src={category.image} alt={category.title} />
                </div>
                <div className="category-info">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Bu gün mangalda ne yapsak?</h2>
          <p>Hijyen, güvenilir et ürünlerini nerede bulabilirim?</p>
          <p>gibi sorularınızın cevabı BAŞPINARLAR 'da...</p>
          <Link to="/contact" className="btn">Sipariş Ver</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Neden Bizi Tercih Etmelisiniz?</h2>
          <div className="feature-grid">
            {features.map(feature => (
              <div key={feature.id} className="feature-card">
                <i className={`${feature.icon} feature-icon`}></i>
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

export default Home; 