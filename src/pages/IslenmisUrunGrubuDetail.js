import React from "react";
import { useParams, Link } from "react-router-dom";

const IslenmisUrunGrubuDetail = () => {
  const { id } = useParams();

  const products = {
    1: {
      name: "Dana Köfte",
      price: "220,00₺",
      weight: "400 gr/paket",
      image: "/images/et_resimler/kasap_köfte.png",
      description: "Geleneksel dana köfte, özel baharatlarla hazırlanmıştır.",
      features: [
        "Geleneksel tarif",
        "Özel baharat karışımı",
        "Hazır köfte",
        "Pratik kullanım",
        "Hijyenik paketleme",
      ],
      cookingTips: [
        "Tavada orta ateşte pişirin",
        "Her iki tarafı 4-5 dakika",
        "Fazla çevirmeyin",
        "Sıcak servis yapın",
      ],
      nutritionalInfo: {
        protein: "18g",
        fat: "16g",
        calories: "220 kcal",
      },
    },
    2: {
      name: "Dana Sucuk",
      price: "350,00₺",
      weight: "350 gr/paket",
      image: "/images/et_resimler/baton_sucuk.png",
      description: "Özel baharatlarla hazırlanan dana sucuk.",
      features: [
        "Özel baharat karışımı",
        "Geleneksel tarif",
        "Kahvaltı için ideal",
        "Uzun raf ömrü",
        "Doğal kılıf",
      ],
      cookingTips: [
        "Tavada hafif pişirin",
        "Direkt tüketilebilir",
        "Kahvaltıda peynir ile servis edin",
        "Soğuk servis yapın",
      ],
      nutritionalInfo: {
        protein: "20g",
        fat: "22g",
        calories: "280 kcal",
      },
    },
    3: {
      name: "Dana Hamburger Köfte",
      price: "230,00₺",
      weight: "4x110 gr/paket",
      image: "/images/et_resimler/steak_burger.png",
      description: "Premium dana hamburger köftesi, hamburger için ideal.",
      features: [
        "Premium dana etinden",
        "Hamburger için ideal",
        "4 adet köfte",
        "Hazır şekilli",
        "Pratik kullanım",
      ],
      cookingTips: [
        "Tavada orta ateşte pişirin",
        "Her iki tarafı 3-4 dakika",
        "Fazla çevirmeyin",
        "Hamburger ekmeği ile servis edin",
      ],
      nutritionalInfo: {
        protein: "19g",
        fat: "15g",
        calories: "210 kcal",
      },
    },
    4: {
      name: "Görye İnegöl Köfte",
      price: "220,00₺",
      weight: "400 gr/paket",
      image: "/images/et_resimler/görye_köfte.png",
      description:
        "Geleneksel İnegöl köftesi, özel baharatlarla hazırlanmıştır.",
      features: [
        "Geleneksel İnegöl tarifi",
        "Özel baharat karışımı",
        "Hazır köfte",
        "Pratik kullanım",
        "Hijyenik paketleme",
      ],
      cookingTips: [
        "Tavada orta ateşte pişirin",
        "Her iki tarafı 4-5 dakika",
        "Fazla çevirmeyin",
        "Sıcak servis yapın",
      ],
      nutritionalInfo: {
        protein: "18g",
        fat: "16g",
        calories: "220 kcal",
      },
    },
    5: {
      name: "Görye Kangal Sucuk",
      price: "350,00₺",
      weight: "350 gr/paket",
      image: "/images/et_resimler/kangal_sucuk.png",
      description: "Geleneksel yöntemlerle hazırlanmış, baharatlı ve lezzetli kangal sucuk. Kahvaltı ve yemekleriniz için ideal.",
      features: [
        "Geleneksel üretim",
        "Baharatlı ve aromatik",
        "Doğal kılıf",
        "Kahvaltı ve yemekler için uygun",
        "Uzun raf ömrü"
      ],
      cookingTips: [
        "Tavada orta ateşte pişirin",
        "Her iki tarafı 3-4 dakika çevirin",
        "Fazla pişirmeyin, sulu kalmasına dikkat edin",
        "Kahvaltıda veya sandviçte servis edin"
      ],
      nutritionalInfo: {
        protein: "22g",
        fat: "28g",
        calories: "340 kcal"
      }
    },
  };

  const product = products[id];

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Ürün bulunamadı</h2>
        <Link to="/products/islenmis-urun-grubu">
          İşlenmiş Ürün Grubu sayfasına dön
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Sol taraf - Ürün resmi */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        {/* Sağ taraf - Ürün bilgileri */}
        <div>
          <h1
            style={{
              color: "var(--primary-color)",
              fontSize: "2.5rem",
              fontWeight: 800,
              marginBottom: "1rem",
            }}
          >
            {product.name}
          </h1>

          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#e74c3c",
              marginBottom: "1rem",
            }}
          >
            {product.price} / {product.weight}
          </div>

          <p
            style={{
              fontSize: "1.1rem",
              color: "#666",
              lineHeight: 1.6,
              marginBottom: "2rem",
            }}
          >
            {product.description}
          </p>

          {/* Özellikler */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>
              Özellikler
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {product.features.map((feature, index) => (
                <li
                  key={index}
                  style={{
                    padding: "0.5rem 0",
                    borderBottom: "1px solid #eee",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: "var(--primary-color)",
                      marginRight: "0.5rem",
                    }}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Pişirme önerileri */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>
              Pişirme Önerileri
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {product.cookingTips.map((tip, index) => (
                <li
                  key={index}
                  style={{
                    padding: "0.5rem 0",
                    borderBottom: "1px solid #eee",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: "var(--primary-color)",
                      marginRight: "0.5rem",
                    }}
                  >
                    •
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Besin değerleri */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>
              Besin Değerleri (100g)
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  padding: "1rem",
                  background: "#f8f9fa",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{ fontWeight: "bold", color: "var(--primary-color)" }}
                >
                  Protein
                </div>
                <div>{product.nutritionalInfo.protein}</div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: "1rem",
                  background: "#f8f9fa",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{ fontWeight: "bold", color: "var(--primary-color)" }}
                >
                  Yağ
                </div>
                <div>{product.nutritionalInfo.fat}</div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: "1rem",
                  background: "#f8f9fa",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{ fontWeight: "bold", color: "var(--primary-color)" }}
                >
                  Kalori
                </div>
                <div>{product.nutritionalInfo.calories}</div>
              </div>
            </div>
          </div>

          {/* Geri dön butonu */}
          <Link
            to="/products?category=islenmis-urun-grubu"
            style={{
              display: "inline-block",
              padding: "1rem 2rem",
              background: "var(--primary-color)",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "600",
              textAlign: "center",
            }}
            onClick={() => {
              // Ensure scroll to top when navigating back
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 100);
            }}
          >
            İŞLENMİŞ ÜRÜN GRUBU'na Geri Dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IslenmisUrunGrubuDetail;
