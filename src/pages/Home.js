import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      title: "BAŞPINARLAR ET",
      subtitle: "KALİTE & LEZZET BİR ARADA",
      description:
        "Eskişehir'in en iyi kasabı olarak kaliteli ve lezzetli et ürünleri ile hizmetinizdeyiz.",
      image: "/images/main-page(1).png",
      align: "center",
    },
    {
      title: "BAŞPINARLAR",
      title2: "MUTFAK",
      subtitle: "LEZZET DOLU MUTFAKLARIN VAZGEÇİLMEZ TEDARİKÇİSİ",
      description:
        "Kaliteli ve lezzetli et ürünleri ile her öğününüzü özel kılıyoruz.",
      image: "/images/main-page(2).png",
      align: "left",
    },
  ];

  // Enable auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isTransitioning, slides.length]);

  const handleSlideChange = (index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  const categories = [
    {
      name: "DANA GRUBU",
      description:
        "En kaliteli dana etlerinden hazırlanan ürünlerimiz ile lezzetli sofralar sizleri bekliyor...",
      image: "dana.png",
      link: "/products/dana-grubu",
    },
    {
      name: "KUZU GRUBU",
      description:
        "Taze ve kaliteli kuzu etlerimiz ile mutfağınızın vazgeçilmezi olacak lezzetler...",
      image: "kuzu.png",
      link: "/products/kuzu-grubu",
    },
    {
      name: "DANA BEEF'S STEAK",
      description:
        "Premium kalite dana steak çeşitlerimiz ile fine dining deneyimi yaşayın...",
      image: "beef-steak.png",
      link: "/products/dana-beef-steak",
    },
    {
      name: "ŞARKÜTERİ GRUBU",
      description:
        "Çeşit çeşit şarküteri ürünlerimiz ile kahvaltılarınıza lezzet katın...",
      image: "sarkuteri.png",
      link: "/products/sarkuteri-grubu",
    },
    {
      name: "İŞLENMİŞ ÜRÜN GRUBU",
      description:
        "Özenle hazırlanmış işlenmiş et ürünlerimiz ile pratik ve lezzetli yemekler...",
      image: "islenmis.png",
      link: "/products/islenmis-urun-grubu",
    },
  ];

  const features = [
    {
      id: 1,
      title: "Hızlı Teslimat",
      description:
        "Eskişehir İçi ÜCRETSİZ Teslimat, Eskişehir Dışı 500TL ve Üzeri Alışverişlerinizde ÜCRETSİZ Kargo",
      icon: "fas fa-truck",
    },
    {
      id: 2,
      title: "Özenli Paketleme",
      description:
        "Siparişleriniz Özel Ambalajlarımız İle Özenle Paketlenmektedir",
      icon: "fas fa-box",
    },
    {
      id: 3,
      title: "Müşteri Hizmetleri",
      description: "Her Gün 09:00-18:00 Arası Sizlere Yardımcı Olmaktayız",
      icon: "fas fa-headset",
    },
  ];

  return (
    <div className="home">
      <div className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/images/hero-section.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          >
            <div
              className={`hero-content ${
                slide.align === "left" ? "left-align" : ""
              }`}
            >
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
            </div>
          </div>
        ))}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => handleSlideChange(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div
        className="categories-section"
        style={{
          // background: ` url('/images/kitchen.png')`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundAttachment: "fixed",
          background: "linear-gradient(to bottom, rgb(18 18 18), #4d4d4d)",
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
              <div key={index} className="category-card" style={{ boxShadow: '0 8px 32px #80002022', borderRadius: 16, overflow: 'hidden', background: '#fff', transition: 'transform 0.2s', minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)'}
                onMouseOut={e => e.currentTarget.style.transform = 'none'}
              >
                <div className="category-image" style={{ height: 300, background: '#f8f9fa', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                  <img src={category.image} alt={category.name} style={{ maxHeight: 220, maxWidth: '90%', marginTop: 8, marginBottom: 'auto' }} />
                </div>
                <div className="category-overlay" style={{ position: 'static', background: 'none', color: '#800020', padding: 24, textAlign: 'center', minHeight: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'space-between' }}>
                  <h3 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8, color: '#800020', letterSpacing: 1, textShadow: '0 2px 8px #800020' }}>{category.name}</h3>
                  <p style={{ fontSize: 16, color: '#444', marginBottom: 18 }}>{category.description}</p>
                  <div style={{ flex: 1 }} />
                  <Link
                    to={category.link}
                    className="category-link"
                    style={{
                      display: 'inline-block',
                      fontSize: 20,
                      fontWeight: 700,
                      padding: '1.1rem 2.5rem',
                      background: 'linear-gradient(90deg, #800020, #d4af37)',
                      color: '#fff',
                      borderRadius: 8,
                      textDecoration: 'none',
                      marginTop: 'auto',
                      boxShadow: '0 4px 16px #80002022',
                      letterSpacing: 1,
                      transition: 'all 0.2s',
                      width: '100%',
                      maxWidth: 260,
                    }}
                    onMouseOver={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #d4af37, #800020)'; e.currentTarget.style.color = '#800020'; }}
                    onMouseOut={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #800020, #d4af37)'; e.currentTarget.style.color = '#fff'; }}
                  >
                    Detayları Görüntüle
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="mangal-cta-content">
            <h2>Bu gün mangalda ne yapsak?</h2>
            <p>Hijyen, güvenilir et ürünlerini nerede bulabilirim?</p>
            <p>gibi sorularınızın cevabı BAŞPINARLAR 'da...</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Neden Bizi Tercih Etmelisiniz?</h2>
          <div className="feature-grid">
            {features.map((feature) => (
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