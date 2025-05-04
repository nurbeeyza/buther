import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      title: "BAŞPINARLAR ET",
      subtitle: "KALİTE & LEZZET BİR ARADA",
      description: "Konya'nın en iyi kasabı olarak kaliteli ve lezzetli et ürünleri ile hizmetinizdeyiz.",
      buttonText: "SİPARİŞ VER",
      image: "/images/kirmizi-et.png",
      buttonLink: "/products",
      align: "center"
    },
    {
      title: "BAŞPINARLAR",
      title2: "MUTFAK",
      subtitle: "LEZZET DOLU MUTFAKLARIN VAZGEÇİLMEZ TEDARİKÇİSİ",
      description: "Kaliteli ve lezzetli et ürünleri ile her öğününüzü özel kılıyoruz.",
      buttonText: "SİPARİŞ VER",
      image: "/images/vadi_kasap_slayt_arkaplan_02_1600x625_0.png",
      buttonLink: "/products",
      align: "left"
    }
  ];

  const categories = [
    {
      name: "BEEF'S STEAK",
      description: "En kaliteli dana etlerinden hazırlanan steak çeşitlerimiz ile lezzetli sofralar sizleri bekliyor...",
      image: "/images/kucuket.png",
      link: "/products?category=steak"
    },
    {
      name: "İŞLENMİŞ ETLER",
      description: "Özenle hazırlanmış işlenmiş et ürünlerimiz ile pratik ve lezzetli yemekler...",
      image: "/images/kucuket.png",
      link: "/products?category=islenmis"
    },
    {
      name: "KASAP GRUBU",
      description: "Taze ve kaliteli kasap ürünlerimiz ile mutfağınızın vazgeçilmezi olacak lezzetler...",
      image: "/images/kucuket.png",
      link: "/products?category=kasap"
    },
    {
      name: "ŞARKÜTERİ GRUBU",
      description: "Çeşit çeşit şarküteri ürünlerimiz ile kahvaltılarınıza lezzet katın...",
      image: "/images/kucuket.png",
      link: "/products?category=sarkuteri"
    },
    {
      name: "PASTIRMA",
      description: "Geleneksel lezzetimiz pastırmalarımız ile sofralarınıza özel bir dokunuş...",
      image: "/images/kucuket.png",
      link: "/products?category=pastirma"
    },
    {
      name: "SUCUK",
      description: "Özel baharatlarımız ile hazırlanan sucuklarımız ile kahvaltılarınıza lezzet katın...",
      image: "/images/kucuket.png",
      link: "/products?category=sucuk"
    },
    {
      name: "KÖFTE",
      description: "Özel karışımlarımız ile hazırlanan köftelerimiz ile lezzetli sofralar...",
      image: "/images/kucuket.png",
      link: "/products?category=kofte"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTransitioning, slides.length]);

  const handleSlideChange = (index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

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
      <div className="hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={`hero-content ${slide.align === 'left' ? 'left-align' : ''}`}>
              {slide.title2 ? (
                <div className="split-title">
                  <h1>{slide.title}</h1>
                  <h1 className="title2">{slide.title2}</h1>
                </div>
              ) : (
                <h1>{slide.title}</h1>
              )}
              <h2>{slide.subtitle}</h2>
              <p>{slide.description}</p>
              <Link to={slide.buttonLink} className="btn">{slide.buttonText}</Link>
            </div>
          </div>
        ))}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div>

      <div 
        className="categories-section"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/kirmizi-et.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="awe-bg-overlay"></div>
        <div className="container">
          <div className="section-title">
            <h2>ÜRÜNLERİMİZ</h2>
            <p>Neler yapıyoruz?</p>
          </div>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                  <div className="category-overlay">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                    <Link to={category.link} className="category-link">
                      Tümünü Gör
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Bu gün mangalda ne yapsak?</h2>
          <p>Hijyen, güvenilir et ürünlerini nerede bulabilirim?</p>
          <p>gibi sorularınızın cevabı BAŞPINARLAR 'da...</p>
          <Link to="/contact" className="btn"><span>Sipariş Ver</span></Link>
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