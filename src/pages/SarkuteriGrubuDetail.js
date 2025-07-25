import React from "react";
import { useParams, Link } from "react-router-dom";

const SarkuteriGrubuDetail = () => {
  const { id } = useParams();

  const products = {
    1: {
      name: "Dana Bacon",
      price: "1130,00₺",
      weight: "100 gr/paket",
      image: "/images/et_resimler/dana_bacon.png",
      description: "Taze dana bacon, kahvaltılarınıza lezzet katacak.",
      features: [
        "Taze dana etinden",
        "Kahvaltı için ideal",
        "İnce dilimlenebilir",
        "Tavada pişirme",
        "Hijyenik paketleme",
      ],
      cookingTips: [
        "Tavada orta ateşte pişirin",
        "3-4 dakika çevirerek pişirin",
        "Fazla pişirmeyin",
        "Kahvaltıda yumurta ile servis edin",
      ],
      nutritionalInfo: {
        protein: "18g",
        fat: "25g",
        calories: "290 kcal",
      },
    },
    2: {
      name: "Dana Jambon",
      price: "980,00₺",
      weight: "100 gr/paket",
      image: "/images/et_resimler/dana_jambon.png",
      description: "Premium dana jambon, sandviç ve kahvaltı için ideal.",
      features: [
        "Premium dana etinden",
        "Sandviç için ideal",
        "Kahvaltıda kullanım",
        "İnce dilimlenebilir",
        "Uzun raf ömrü",
      ],
      cookingTips: [
        "Direkt tüketilebilir",
        "İnce dilimler halinde kesin",
        "Kahvaltıda peynir ile servis edin",
        "Soğuk servis yapın",
      ],
      nutritionalInfo: {
        protein: "20g",
        fat: "18g",
        calories: "240 kcal",
      },
    },
    3: {
      name: "Dana Kavurma",
      price: "1020,00₺",
      weight: "100 gr/paket",
      image: "/images/et_resimler/dana_kavurma.png",
      description: "Geleneksel dana kavurma, kahvaltıların vazgeçilmezi.",
      features: [
        "Geleneksel tarif",
        "Kahvaltıların vazgeçilmezi",
        "Özel baharatlarla",
        "Taze günlük üretim",
        "Hijyenik paketleme",
      ],
      cookingTips: [
        "Tavada hafif ısıtın",
        "Direkt tüketilebilir",
        "Kahvaltıda yumurta ile servis edin",
        "Sıcak servis yapın",
      ],
      nutritionalInfo: {
        protein: "19g",
        fat: "22g",
        calories: "270 kcal",
      },
    },
    4: {
      name: "Dana Salam",
      price: "85,00₺",
      weight: "100 gr/paket",
      image: "/images/et_resimler/dana_salam.png",
      description: "Taze dana salam, çeşitli yemekler için mükemmel.",
      features: [
        "Taze dana etinden",
        "Çok amaçlı kullanım",
        "İnce dilimlenebilir",
        "Kahvaltı için ideal",
        "Uzun raf ömrü",
      ],
      cookingTips: [
        "Direkt tüketilebilir",
        "İnce dilimler halinde kesin",
        "Kahvaltıda peynir ile servis edin",
        "Soğuk servis yapın",
      ],
      nutritionalInfo: {
        protein: "20g",
        fat: "18g",
        calories: "240 kcal",
      },
    },
    5: {
      name: "Dana İsli Et",
      price: "1530,00₺",
      weight: "80 gr/paket",
      image: "/images/et_resimler/dana_isli_et.png",
      description: "Özel baharatlarla hazırlanmış dana isli et.",
      features: [
        "Özel baharatlarla",
        "İsli et tekniği",
        "Kahvaltı için ideal",
        "Yoğun lezzet",
        "Hijyenik paketleme",
      ],
      cookingTips: [
        "Tavada hafif ısıtın",
        "Direkt tüketilebilir",
        "Kahvaltıda yumurta ile servis edin",
        "Sıcak servis yapın",
      ],
      nutritionalInfo: {
        protein: "21g",
        fat: "20g",
        calories: "260 kcal",
      },
    },
    6: {
      name: "Dana Roast Beef",
      price: "250,00₺",
      weight: "200 gr/paket",
      image: "/images/et_resimler/rozbif.png",
      description: "Geleneksel dana rozbif, özel kesim ve hazırlama.",
      features: [
        "Geleneksel tarif",
        "Özel kesim",
        "Sandviç için ideal",
        "İnce dilimlenebilir",
        "Premium kalite",
      ],
      cookingTips: [
        "Direkt tüketilebilir",
        "İnce dilimler halinde kesin",
        "Sandviçte kullanın",
        "Soğuk servis yapın",
      ],
      nutritionalInfo: {
        protein: "25g",
        fat: "12g",
        calories: "200 kcal",
      },
    },
    7: {
      name: "Dana Kekikli Roast Beef",
      price: "260,00₺",
      weight: "200 gr/paket",
      image: "/images/et_resimler/roastbeef-kekikli-2.png",
      description: "Kekikli dana rozbif, özel aroması ile fark yaratır.",
      features: [
        "Kekik aroması",
        "Özel baharatlarla",
        "Sandviç için ideal",
        "İnce dilimlenebilir",
        "Premium kalite"
      ],
      cookingTips: [
        "Direkt tüketilebilir",
        "İnce dilimler halinde kesin",
        "Sandviçte kullanın",
        "Soğuk servis yapın"
      ],
      nutritionalInfo: {
        protein: "25g",
        fat: "12g",
        calories: "200 kcal"
      }
    },
    8: {
      name: "Dana Karabiberli Roast Beef",
      price: "270,00₺",
      weight: "200 gr/paket",
      image: "/images/et_resimler/danakarabiberliroastbeef.jpg",
      description: "Karabiberli dana rozbif, özel aroması ile fark yaratır.",
      features: [
        "Karabiber aroması",
        "Özel baharatlarla",
        "Sandviç için ideal",
        "İnce dilimlenebilir",
        "Premium kalite"
      ],
      cookingTips: [
        "Direkt tüketilebilir",
        "İnce dilimler halinde kesin",
        "Sandviçte kullanın",
        "Soğuk servis yapın"
      ],
      nutritionalInfo: {
        protein: "25g",
        fat: "12g",
        calories: "200 kcal"
      }
    },
    9: {
      name: "Dana Antrikot Pastırma",
      price: "1510,00₺",
      weight: "250 gr/paket",
      image: "/images/et_resimler/danaantrikotpastırma.png",
      description: "Premium dana antrikot pastırma, geleneksel lezzet.",
      features: [
        "Premium antrikot etinden",
        "Geleneksel lezzet",
        "Kahvaltı için ideal",
        "İnce dilimlenebilir",
        "Uzun raf ömrü",
      ],
      cookingTips: [
        "Direkt tüketilebilir",
        "İnce dilimler halinde kesin",
        "Kahvaltıda peynir ile servis edin",
        "Soğuk servis yapın",
      ],
      nutritionalInfo: {
        protein: "26g",
        fat: "14g",
        calories: "220 kcal",
      },
    },
    10: {
      name: "Dana Kontrafile Pastırma",
      price: "1460,00₺",
      weight: "250 gr/paket",
      image: "/images/et_resimler/250gr-dana-kontrafile-pastirma-95fa24.png",
      description: "Özel kesim dana kontrfile pastırma.",
      features: [
        "Özel kesim",
        "Kontrafile etinden",
        "Geleneksel baharat karışımı",
        "İnce dilimlenebilir",
        "Premium kalite"
      ],
      cookingTips: [
        "Direkt tüketilebilir",
        "İnce dilimler halinde kesin",
        "Sandviçte kullanın",
        "Soğuk servis yapın"
      ],
      nutritionalInfo: {
        protein: "24g",
        fat: "14g",
        calories: "260 kcal"
      }
    },
    11: {
      name: "Dana Seçme Pastırma",
      price: "1310,00₺",
      weight: "250 gr/paket",
      image: "/images/et_resimler/danaseçmepastırma.png",
      description: "En kaliteli dana seçme pastırma.",
      features: [
        "En kaliteli et seçimi",
        "Premium pastırma",
        "Kahvaltı için ideal",
        "İnce dilimlenebilir",
        "Uzun raf ömrü",
      ],
      cookingTips: [
        "Direkt tüketilebilir",
        "İnce dilimler halinde kesin",
        "Kahvaltıda peynir ile servis edin",
        "Soğuk servis yapın",
      ],
      nutritionalInfo: {
        protein: "28g",
        fat: "12g",
        calories: "200 kcal",
      },
    },
    12: {
      name: "Dana İspanyol Salam",
      price: "940,00₺",
      weight: "100 gr/paket",
      image: "/images/et_resimler/ispanyolsalam.png",
      description: "İspanyol usulü dana salam, özel baharatlarla.",
      features: [
        "İspanyol usulü",
        "Özel baharat karışımı",
        "Sandviç için ideal",
        "İnce dilimlenebilir",
        "Premium kalite"
      ],
      cookingTips: [
        "Direkt tüketilebilir",
        "İnce dilimler halinde kesin",
        "Sandviçte kullanın",
        "Soğuk servis yapın"
      ],
      nutritionalInfo: {
        protein: "20g",
        fat: "18g",
        calories: "240 kcal"
      }
    },
    13: {
      name: "Dana Göden Sucuk",
      price: "720,00₺",
      weight: "400 gr/paket",
      image: "/images/et_resimler/dana_goden_sucuk.png",
      description: "Geleneksel dana göden sucuk, özel baharatlarla.",
      features: [
        "Geleneksel tarif",
        "Özel baharatlarla",
        "Kahvaltı için ideal",
        "Doğal kılıf",
        "Uzun raf ömrü",
      ],
      cookingTips: [
        "Tavada hafif pişirin",
        "Direkt tüketilebilir",
        "Kahvaltıda peynir ile servis edin",
        "Soğuk servis yapın",
      ],
      nutritionalInfo: {
        protein: "22g",
        fat: "24g",
        calories: "300 kcal",
      },
    },
    14: {
      name: "Dana Baton Sucuk",
      price: "350,00₺",
      weight: "350 gr/paket",
      image: "/images/et_resimler/BATON-SUCUK.png",
      description: "Klasik dana baton sucuk, geleneksel lezzet.",
      features: [
        "Klasik baton şekli",
        "Geleneksel baharat karışımı",
        "Doğal kılıf",
        "Uzun raf ömrü",
        "Pratik kullanım"
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
        <Link to="/products/sarkuteri-grubu">
          Şarküteri Grubu sayfasına dön
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
              Kullanım Önerileri
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
            to="/products?category=sarkuteri-grubu"
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
            ŞARKÜTERİ GRUBU'na Geri Dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SarkuteriGrubuDetail;
