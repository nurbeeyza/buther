import React from "react";
import { useParams, Link } from "react-router-dom";

const products = {
  1: {
    name: "Dallas Steak",
    price: "1270,00₺",
    weight: "300-400g",
    image: "/images/et_resimler/dallas_steak.png",
    description:
      "Dallas Steak, Amerika'nın en ünlü steaklerinden biridir. Özel olarak seçilmiş dana etinin en kaliteli bölümünden elde edilir. Yumuşaklığı ve yoğun lezzetiyle öne çıkar.",
    features: [
      "Premium kalite dana eti",
      "Özel kesim tekniği",
      "Marinasyon işlemi uygulanmış",
      "Izgara ve tavada pişirme için ideal",
      "Protein açısından zengin",
      "Yumuşak doku yapısı",
    ],
    cookingTips: [
      "Pişirmeden önce oda sıcaklığında bekletin",
      "Yüksek ateşte kısa süre pişirin",
      "İç sıcaklık 55-60°C olmalı (medium-rare)",
      "Pişirdikten sonra 5 dakika dinlendirin",
      "Tuz ve karabiberle tatlandırın",
    ],
    nutritionalInfo: {
      protein: "26g",
      fat: "15g",
      calories: "250 kcal",
      iron: "3.2mg",
    },
    origin: "Türkiye",
    storage: "0-4°C buzdolabında saklayın",
  },
  2: {
    name: "T-bone Steak",
    price: "1270,00₺",
    weight: "400-500g",
    image: "/images/et_resimler/t-bonesteak.png",
    description:
      "T-bone Steak, hem bonfile hem de kontrfileden oluşan özel kesimdir. Kemiği sayesinde eşsiz bir lezzet sunar.",
    features: [
      "Kemikli özel kesim",
      "Bonfile ve kontrfile birlikte",
      "Zengin et aroması",
      "Izgara için ideal",
      "Premium kalite",
      "Özel marinasyon",
    ],
    cookingTips: [
      "Yüksek ateşte mühürleyin",
      "Kemik tarafını son çevirin",
      "İç sıcaklık 50-55°C",
      "Dinlendirme süresi 5 dakika",
      "Baharatları son ekleyin",
    ],
    nutritionalInfo: {
      protein: "25g",
      fat: "18g",
      calories: "280 kcal",
      iron: "3.5mg",
    },
    origin: "Türkiye",
    storage: "0-4°C buzdolabında saklayın",
  },
  3: {
    name: "New York Steak",
    price: "1270,00₺",
    weight: "250-300g",
    image: "/images/et_resimler/newyorksteak.png",
    description:
      "New York Steak, Amerika'nın klasik steak çeşitlerinden biridir. Yoğun eti lezzeti ve mükemmel dokusuyla öne çıkar.",
    features: [
      "Klasik Amerika steaki",
      "Yoğun et lezzeti",
      "Mükemmel doku",
      "Hızlı pişirme",
      "Izgara için perfect",
      "Premium kesim",
    ],
    cookingTips: [
      "Orta-yüksek ateşte pişirin",
      "Her tarafı 3-4 dakika",
      "Fazla çevirmeyin",
      "Sıcak servis yapın",
      "Basit baharatlar kullanın",
    ],
    nutritionalInfo: {
      protein: "27g",
      fat: "12g",
      calories: "220 kcal",
      iron: "3.0mg",
    },
    origin: "Türkiye",
    storage: "0-4°C buzdolabında saklayın",
  },
  4: {
    name: "Toma Hawk Steak",
    price: "1270,00₺",
    weight: "800-1000g",
    image: "/images/et_resimler/tomahawk.png",
    description:
      "Toma Hawk Steak, uzun kemiği ile gösterişli görünümü olan özel bir steak çeşididir. Büyük porsiyonu ile paylaşımlık ideal seçenektir.",
    features: [
      "Gösterişli kemikli kesim",
      "Büyük porsiyon",
      "Paylaşımlık ideal",
      "Özel sunum",
      "Premium kalite",
      "Uzun kemik",
    ],
    cookingTips: [
      "Düşük ateşte uzun pişirin",
      "Fırında tamamlayın",
      "İç sıcaklık 55°C",
      "Uzun dinlendirme süresi",
      "Dilimleyerek servis edin",
    ],
    nutritionalInfo: {
      protein: "25g",
      fat: "20g",
      calories: "300 kcal",
      iron: "3.8mg",
    },
    origin: "Türkiye",
    storage: "0-4°C buzdolabında saklayın",
  },
  5: {
    name: "Bonfile",
    price: "1350,00₺",
    weight: "200-250g",
    image: "/images/et_resimler/dana_bonfile.png",
    description:
      "Bonfile, dana etinin en yumuşak ve kaliteli bölümüdür. Narin dokusu ve eşsiz lezzeti ile steaklerin kralıdır.",
    features: [
      "En yumuşak kesim",
      "Narin doku",
      "Eşsiz lezzet",
      "Steaklerin kralı",
      "Premium kalite",
      "Kolay pişirme",
    ],
    cookingTips: [
      "Orta ateşte pişirin",
      "Fazla pişirmeyin",
      "İç sıcaklık 50°C",
      "Kısa dinlendirme",
      "Minimal baharat",
    ],
    nutritionalInfo: {
      protein: "28g",
      fat: "8g",
      calories: "180 kcal",
      iron: "2.8mg",
    },
    origin: "Türkiye",
    storage: "0-4°C buzdolabında saklayın",
  },
  6: {
    name: "Antrikot",
    price: "970,00₺",
    weight: "250-300g",
    image: "/images/et_resimler/dana_antrikot.png",
    description:
      "Antrikot, dana etinin sırt bölümünden elde edilen lezzetli ve yumuşak bir kesimdir. Izgara ve tavada mükemmel sonuç verir.",
    features: [
      "Sırt bölüminden kesim",
      "Lezzetli ve yumuşak",
      "Izgara için ideal",
      "Tavada mükemmel",
      "Orta yağ oranı",
      "Dengeli lezzet",
    ],
    cookingTips: [
      "Orta-yüksek ateşte pişirin",
      "Her tarafı eşit pişirin",
      "Fazla bastırmayın",
      "Sıcak servis yapın",
      "Basit marinasyon",
    ],
    nutritionalInfo: {
      protein: "24g",
      fat: "16g",
      calories: "240 kcal",
      iron: "3.1mg",
    },
    origin: "Türkiye",
    storage: "0-4°C buzdolabında saklayın",
  },
  7: {
    name: "Kontrafile",
    price: "870,00₺",
    weight: "250-300g",
    image: "/images/et_resimler/dana_kontrfile.png",
    description:
      "Kontrfile, dana etinin bel bölümünden elde edilen kaliteli bir kesimdir. Orta yumuşaklığı ve zengin lezzeti ile öne çıkar.",
    features: [
      "Bel bölüminden kesim",
      "Orta yumuşaklık",
      "Zengin lezzet",
      "Çok amaçlı kullanım",
      "İyi marmor dağılımı",
      "Ekonomik seçenek",
    ],
    cookingTips: [
      "Orta ateşte pişirin",
      "Eşit kalınlıkta kesin",
      "Her tarafı çevirin",
      "Dinlendirme süresi",
      "Baharatları önceden ekleyin",
    ],
    nutritionalInfo: {
      protein: "23g",
      fat: "18g",
      calories: "260 kcal",
      iron: "3.2mg",
    },
    origin: "Türkiye",
    storage: "0-4°C buzdolabında saklayın",
  },
};

const DanaBeefSteakDetail = () => {
  const { id } = useParams();
  const product = products[id];

  if (!product) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Ürün bulunamadı</h2>
        <Link to="/products/dana-beef-steak">Geri Dön</Link>
      </div>
    );
  }

  return (
    <div
      className="detail-page"
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
                gridTemplateColumns: "repeat(2, 1fr)",
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
                  Demir
                </div>
                <div>{product.nutritionalInfo.iron}</div>
              </div>
            </div>
          </div>

          {/* Geri dön butonu */}
          <Link
            to="/products?category=dana-beef-steak"
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
            DANA BEEF'S STEAK'e Geri Dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DanaBeefSteakDetail;
