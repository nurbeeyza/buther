import React from "react";
import { useParams, Link } from "react-router-dom";

const KuzuGrubuDetail = () => {
  const { id } = useParams();

  const products = {
    1: {
      name: "Kuzu Bel",
      price: "950,00₺",
      weight: "kg",
      image: "/images/et_resimler/kuzu_bel.png",
      description: "Premium kalite kuzu bel, özel kesim ile hazırlanmıştır.",
      features: [
        "Premium kuzu eti",
        "Özel günler için ideal",
        "Yumuşak doku",
        "Yoğun lezzet",
        "Özel kesim",
      ],
      cookingTips: [
        "Orta ateşte pişirin",
        "Kekik ve biberiye ekleyin",
        "Fazla pişirmeyin",
        "Sıcak servis yapın",
      ],
      nutritionalInfo: {
        protein: "25g",
        fat: "14g",
        calories: "220 kcal",
      },
    },
    2: {
      name: "Kuzu Gerdan",
      price: "570,00₺",
      weight: "kg",
      image: "/images/et_resimler/kuzu-gerdan.png",
      description:
        "Yumuşacık kuzu gerdan, ızgara ve tavada pişirme için ideal.",
      features: [
        "Yumuşacık doku",
        "Izgara için ideal",
        "Tavada pişirme",
        "Hızlı pişirme",
        "Yoğun kuzu aroması",
      ],
      cookingTips: [
        "Orta-yüksek ateşte pişirin",
        "Her iki tarafı 3-4 dakika",
        "Fazla pişirmeyin",
        "Baharatları son ekleyin",
      ],
      nutritionalInfo: {
        protein: "23g",
        fat: "16g",
        calories: "240 kcal",
      },
    },
    3: {
      name: "Kuzu Kol",
      price: "610,00₺",
      weight: "kg",
      image: "/images/et_resimler/kuzukol .png",
      description: "Taze kuzu kol, güveç ve kavurma için mükemmel.",
      features: [
        "Güveç için ideal",
        "Uzun pişirme",
        "Yumuşak doku",
        "Taze günlük kesim",
        "Çok amaçlı kullanım",
      ],
      cookingTips: [
        "Güveç ve kavurma için ideal",
        "Düşük ateşte uzun pişirin",
        "Sebzelerle birlikte pişirin",
        "Baharatları baştan ekleyin",
      ],
      nutritionalInfo: {
        protein: "24g",
        fat: "12g",
        calories: "200 kcal",
      },
    },
    4: {
      name: "Kuzu Kaburga",
      price: "720,00₺",
      weight: "kg",
      image: "/images/et_resimler/kuzukaburga.png",
      description: "Lezzetli kuzu kaburga, uzun pişirme için ideal.",
      features: [
        "Kemikli özel kesim",
        "Uzun pişirme için ideal",
        "Geleneksel Türk mutfağı",
        "Kolajen açısından zengin",
        "Güveç için perfect",
      ],
      cookingTips: [
        "Uzun süre haşlayın",
        "Düşük ateşte pişirin",
        "Sebzelerle birlikte pişirin",
        "Baharatları bol kullanın",
      ],
      nutritionalInfo: {
        protein: "22g",
        fat: "18g",
        calories: "260 kcal",
      },
    },
    5: {
      name: "Kuzu Döş",
      price: "750,00₺",
      weight: "kg",
      image: "/images/et_resimler/kuzudös.png",
      description: "Yumuşak kuzu döş, fırın yemekleri için mükemmel.",
      features: [
        "Fırın için ideal",
        "Yumuşak doku",
        "Eşit pişirme",
        "Büyük parça",
        "Özel kesim",
      ],
      cookingTips: [
        "Fırında 180°C'de pişirin",
        "1 kg için 40-50 dakika",
        "Ara ara suyla ıslatın",
        "Dinlendirerek dilimleyin",
      ],
      nutritionalInfo: {
        protein: "25g",
        fat: "15g",
        calories: "230 kcal",
      },
    },
    6: {
      name: "Kuzu Pirzola",
      price: "850,00₺",
      weight: "kg",
      image: "/images/et_resimler/kuzu-pirzola.png",
      description: "Premium kuzu pirzola, ızgara için mükemmel seçim.",
      features: [
        "Kemikli özel kesim",
        "Izgara için ideal",
        "Pratik pişirme",
        "Kemikten gelen lezzet",
        "Orta kalınlık",
      ],
      cookingTips: [
        "Orta-yüksek ateşte pişirin",
        "Her tarafı 4-5 dakika",
        "Kemik tarafını son çevirin",
        "Dinlendirme süresi 3 dakika",
      ],
      nutritionalInfo: {
        protein: "26g",
        fat: "16g",
        calories: "250 kcal",
      },
    },
    7: {
      name: "Kuzu But",
      price: "690,00₺",
      weight: "kg",
      image: "/images/et_resimler/kuzu-but.png",
      description: "Taze kuzu but, çeşitli yemekler için ideal.",
      features: [
        "Çok amaçlı kullanım",
        "Yumuşak doku",
        "Taze günlük kesim",
        "Ekonomik seçenek",
        "Hijyenik paketleme",
      ],
      cookingTips: [
        "Güveç ve kavurma için ideal",
        "Düşük ateşte uzun pişirin",
        "Sebzelerle birlikte pişirin",
        "Baharatları baştan ekleyin",
      ],
      nutritionalInfo: {
        protein: "24g",
        fat: "13g",
        calories: "210 kcal",
      },
    },
    8: {
      name: "Kuzu Küşleme",
      price: "820,00₺",
      weight: "kg",
      image: "/images/et_resimler/kuzuküşleme.png",
      description: "Özel kesim kuzu küşleme, mangal için mükemmel.",
      features: [
        "Mangal için ideal",
        "Özel kesim tekniği",
        "Hızlı pişirme",
        "Yoğun et lezzeti",
        "Geleneksel kesim",
      ],
      cookingTips: [
        "Mangal közünde pişirin",
        "Orta ateşte 3-4 dakika",
        "Fazla çevirmeyin",
        "Sıcak servis yapın",
      ],
      nutritionalInfo: {
        protein: "27g",
        fat: "17g",
        calories: "270 kcal",
      },
    },
    9: {
      name: "Kuzu Külbastı",
      price: "890,00₺",
      weight: "kg",
      image: "/images/et_resimler/kuzukülbastı.png",
      description: "Yumuşacık kuzu külbastı, hızlı pişirme için ideal.",
      features: [
        "Hızlı pişirme",
        "Yumuşacık doku",
        "İnce kesim",
        "Tavada pişirme",
        "Pratik hazırlık",
      ],
      cookingTips: [
        "Yüksek ateşte hızlı pişirin",
        "2-3 dakika her tarafı çevirin",
        "Fazla pişirmeyin",
        "Sıcak servis yapın",
      ],
      nutritionalInfo: {
        protein: "25g",
        fat: "14g",
        calories: "220 kcal",
      },
    },
    10: {
      name: "Kuzu Lokum",
      price: "900,00₺",
      weight: "kg",
      image: "/images/et_resimler/kuzulokum.png",
      description: "Premium kuzu lokum, en kaliteli kuzu eti kesimi.",
      features: [
        "En kaliteli kuzu eti",
        "Premium kesim",
        "Yumuşak doku",
        "Yoğun lezzet",
        "Özel günler için",
      ],
      cookingTips: [
        "Orta ateşte pişirin",
        "Kekik ve biberiye ekleyin",
        "Fazla pişirmeyin",
        "Sıcak servis yapın",
      ],
      nutritionalInfo: {
        protein: "28g",
        fat: "18g",
        calories: "280 kcal",
      },
    },
  };

  const product = products[id];

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Ürün bulunamadı</h2>
        <Link to="/products/kuzu-grubu">Kuzu Grubu sayfasına dön</Link>
      </div>
    );
  }

  return (
    <div
      className="kuzu-grubu-detail-page"
      style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}
    >
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
            to="/products?category=kuzu-grubu"
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
            KUZU GRUBU'na Geri Dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KuzuGrubuDetail;
