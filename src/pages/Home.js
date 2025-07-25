import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import HTMLFlipBook from "react-pageflip";

const meatQuestions = [
  "Bu gün mangalda ne yapsak?",
  "Hijyen, güvenilir et ürünlerini nerede bulabilirim?",
  "Etin taze olduğunu nasıl anlarım?",
  "Hangi et hangi yemekte kullanılır?",
  "Et pişirirken nelere dikkat etmeliyim?",
];

const Home = () => {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const [isManualNavigation, setIsManualNavigation] = useState(false);

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

  // Rotating images data
  const rotatingImages = [
    "/images/rotating/KSPM0244.jpg",
    "/images/rotating/KSPM0248.jpg",
    "/images/rotating/DSC02224.jpg",
    "/images/rotating/DSC02238.jpg",
    "/images/rotating/DSC02240.jpg",
    "/images/rotating/DSC02246.jpg",
    "/images/rotating/DSC02249.jpg",
    "/images/rotating/DSC02279.jpg",
    "/images/rotating/DSC02295.jpg",
    "/images/rotating/DSC02312.jpg",
    "/images/rotating/DSC02359.jpg",
    "/images/rotating/DSC02572.jpg",
    "/images/rotating/DSC02583.jpg",
    "/images/rotating/DSC02597.jpg",
  ];

  // Enable auto-slide functionality for hero
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isTransitioning, slides.length]);

  // Auto-rotate images every 4 seconds, but pause when manually navigating
  useEffect(() => {
    if (!isManualNavigation) {
      const imageInterval = setInterval(() => {
        setCurrentImageSlide((prev) => (prev + 1) % rotatingImages.length);
      }, 4000);

      return () => clearInterval(imageInterval);
    }
  }, [rotatingImages.length, isManualNavigation]);

  // Reset manual navigation flag after 8 seconds
  useEffect(() => {
    if (isManualNavigation) {
      const timeout = setTimeout(() => {
        setIsManualNavigation(false);
      }, 8000);

      return () => clearTimeout(timeout);
    }
  }, [isManualNavigation]);

  const handleSlideChange = (index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  const handleImageSlideChange = (index) => {
    setIsManualNavigation(true);
    setCurrentImageSlide(index);
  };

  const handlePrevImage = () => {
    setIsManualNavigation(true);
    setCurrentImageSlide((prev) =>
      prev === 0 ? rotatingImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setIsManualNavigation(true);
    setCurrentImageSlide((prev) => (prev + 1) % rotatingImages.length);
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

  const [q1, q2] = useMemo(() => {
    let idx1 = Math.floor(Math.random() * meatQuestions.length);
    let idx2;
    do {
      idx2 = Math.floor(Math.random() * meatQuestions.length);
    } while (idx2 === idx1);
    return [meatQuestions[idx1], meatQuestions[idx2]];
  }, []);

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
        <div className="awe-bg-overlay" id="urunlerimiz"></div>
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
                    <Link
                      to={category.link}
                      className="category-link"
                      onClick={(e) => {
                        console.log(
                          "Link clicked!",
                          category.name,
                          category.link
                        );
                        console.log("Event:", e);
                        console.log("Current URL:", window.location.href);
                      }}
                    >
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
          <div
            className="mangal-cta-content"
            style={{
              margin: "2rem auto 0 auto",
              maxWidth: 600,
              background: "#fff7f0",
              borderRadius: 16,
              boxShadow: "0 2px 12px #80002011",
              padding: "2rem 2.5rem",
              textAlign: "center",
              border: "2px solid #d4af37",
            }}
          >
            <h2
              style={{
                color: "#800020",
                fontWeight: 800,
                fontSize: 22,
                marginBottom: 12,
              }}
            >
              {q1}
            </h2>
            <p
              style={{
                color: "#800020",
                fontWeight: 700,
                fontSize: 18,
                marginBottom: 8,
              }}
            >
              {q2}
            </p>
            <p style={{ color: "#333", fontSize: 18, fontWeight: 600 }}>
              gibi sorularınızın cevabı BAŞPINARLAR 'da...
            </p>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section
        className="image-carousel-section"
        style={{
          padding: "4rem 0",
          background: "linear-gradient(to bottom, #f8f9fa, #fff)",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: 800,
                color: "var(--primary-color)",
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              GALERİMİZ
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#666",
                fontStyle: "italic",
              }}
            >
              Kaliteli et ürünlerimizden görüntüler
            </p>
          </div>

          {/* Main Carousel */}
          <div
            style={{
              position: "relative",
              maxWidth: "800px",
              margin: "0 auto",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "400px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: `${rotatingImages.length * 100}%`,
                  height: "100%",
                  transform: `translateX(-${
                    (currentImageSlide * 100) / rotatingImages.length
                  }%)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                {rotatingImages.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      width: `${100 / rotatingImages.length}%`,
                      height: "100%",
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      flexShrink: 0,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevImage}
              style={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                fontSize: "20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(139,0,0,0.8)";
                e.target.style.transform = "translateY(-50%) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(0,0,0,0.5)";
                e.target.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              ‹
            </button>

            <button
              onClick={handleNextImage}
              style={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                fontSize: "20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(139,0,0,0.8)";
                e.target.style.transform = "translateY(-50%) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(0,0,0,0.5)";
                e.target.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              ›
            </button>

            {/* Dots Navigation */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "8px",
                zIndex: 10,
              }}
            >
              {rotatingImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleImageSlideChange(index)}
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    border: "none",
                    background:
                      index === currentImageSlide
                        ? "var(--primary-color)"
                        : "rgba(255,255,255,0.6)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    transform:
                      index === currentImageSlide ? "scale(1.2)" : "scale(1)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div
            className="image-carousel-thumbnails"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
              gap: "10px",
              marginTop: "2rem",
              maxWidth: "800px",
              margin: "2rem auto 0",
            }}
          >
            {rotatingImages.map((image, index) => (
              <div
                key={index}
                onClick={() => handleImageSlideChange(index)}
                style={{
                  width: "100px",
                  height: "80px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border:
                    index === currentImageSlide
                      ? "3px solid var(--primary-color)"
                      : "3px solid transparent",
                  transition: "all 0.3s ease",
                  opacity: index === currentImageSlide ? 1 : 0.7,
                  transform:
                    index === currentImageSlide ? "scale(1.05)" : "scale(1)",
                }}
                onMouseEnter={(e) => {
                  if (index !== currentImageSlide) {
                    e.target.style.opacity = "1";
                    e.target.style.transform = "scale(1.02)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== currentImageSlide) {
                    e.target.style.opacity = "0.7";
                    e.target.style.transform = "scale(1)";
                  }
                }}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kataloğumuz alanı */}
      <section className="catalog-section" style={{ padding: "4rem 0", background: "#fff", overflow: "hidden" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary-color)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "2px" }}>
              KATALOĞUMUZ
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#666", fontStyle: "italic" }}>
              Ürün kataloğumuzu defter gibi sayfa çevirerek inceleyebilirsiniz.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <HTMLFlipBook
              width={400}
              height={550}
              size="stretch"
              minWidth={315}
              maxWidth={600}
              minHeight={400}
              maxHeight={800}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              style={{ boxShadow: "0 8px 32px #80002022", borderRadius: 12 }}
            >
              {Array.from({ length: 27 }, (_, i) => `/images/katalog/katalog${i + 1}.png`).map((src, idx) => (
                <div key={idx} style={{ width: "100%", height: "100%", background: "#fff" }}>
                  <img src={src} alt={`Katalog Sayfa ${idx + 1}`} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 8 }} />
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="urunlerimiz" className="features-section" style={{ padding: "4rem 0", background: "#fff" }}>
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
