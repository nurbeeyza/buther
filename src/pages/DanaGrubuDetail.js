import React from "react";
import { useParams, Link } from "react-router-dom";

const DanaGrubuDetail = () => {
  const { id } = useParams();

  const products = {
    1: {
      name: "Dana Ayna",
      price: "750,00₺",
      weight: "kg",
      image: "/images/et_resimler/dana_ayna.png",
      description: "Premium kalite dana ayna, özel kesim ile hazırlanmıştır.",
      features: [
        "Premium kalite dana eti",
        "Özel kesim tekniği",
        "Yumuşak doku",
        "Yüksek protein değeri",
        "Izgara için ideal",
      ],
      cookingTips: [
        "Orta ateşte pişirin",
        "Her iki tarafı 4-5 dakika",
        "Fazla çevirmeyin",
        "Dinlendirme süresi önemli",
      ],
      nutritionalInfo: {
        protein: "25g",
        fat: "12g",
        calories: "220 kcal",
      },
    },
    2: {
      name: "Dana Kuşbaşı",
      price: "680,00₺",
      weight: "kg",
      image: "/images/et_resimler/dana_kusbasi.png",
      description: "Taze dana kuşbaşı, güveç ve kavurma için ideal.",
      features: [
        "Eşit boyutlarda kesim",
        "Güveç için ideal",
        "Taze günlük kesim",
        "Çok amaçlı kullanım",
        "Yumuşak doku",
      ],
      cookingTips: [
        "Güveç ve kavurma için ideal",
        "Düşük ateşte uzun pişirin",
        "Sebzelerle birlikte pişirin",
        "Baharatları baştan ekleyin",
      ],
      nutritionalInfo: {
        protein: "24g",
        fat: "10g",
        calories: "180 kcal",
      },
    },
    3: {
      name: "Dana Kaburga Kıyma",
      price: "300,00₺",
      weight: "400 gr/paket",
      image: "/images/et_resimler/dana_kaburga_kiyma.png",
      description:
        "Taze dana kaburga kıyması, köfte ve yemekler için mükemmel.",
      features: [
        "Dana kaburga etinden",
        "Günlük taze çekim",
        "İdeal yağ oranı",
        "Köfte için mükemmel",
        "Hijyenik paketleme",
      ],
      cookingTips: [
        "Köfte yapmak için ideal",
        "Soğan ve baharat ekleyin",
        "Orta ateşte pişirin",
        "Şekil vermeden önce dinlendirin",
      ],
      nutritionalInfo: {
        protein: "20g",
        fat: "15g",
        calories: "210 kcal",
      },
    },
    4: {
      name: "Dana Rosto",
      price: "700,00₺",
      weight: "kg",
      image: "/images/et_resimler/dana_rosto.png",
      description: "Yumuşak dana rosto, fırın yemekleri için mükemmel.",
      features: [
        "Fırın için ideal",
        "Yumuşak doku",
        "Eşit pişirme",
        "Büyük parça",
        "Özel kesim",
      ],
      cookingTips: [
        "Fırında 180°C'de pişirin",
        "1 kg için 45-60 dakika",
        "Ara ara suyla ıslatın",
        "Dinlendirerek dilimleyin",
      ],
      nutritionalInfo: {
        protein: "25g",
        fat: "9g",
        calories: "170 kcal",
      },
    },
    5: {
      name: "Dana Asado",
      price: "800,00₺",
      weight: "kg",
      image: "/images/et_resimler/dana_asado.png",
      description:
        "Özel kesim dana asado, mangal ve ızgara için mükemmel seçim.",
      features: [
        "Kalın kesim özel teknik",
        "Mangal için ideal",
        "Uzun pişirme süresi",
        "Yoğun et lezzeti",
        "Geleneksel Arjantin kesimi",
      ],
      cookingTips: [
        "Düşük ateşte uzun süre pişirin",
        "Sürekli çevirmeyin",
        "Tuzlama işlemini erkenden yapın",
        "Mangal közü ideal",
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
        <Link to="/products/dana-grubu">Dana Grubu sayfasına dön</Link>
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
            to="/products?category=dana-grubu"
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
            DANA GRUBU'na Geri Dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DanaGrubuDetail;
