import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const SucukDetail = () => {
  const { id } = useParams();
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);

  const products = {
    1: {
      id: 1,
      name: "Baton Sucuk",
      price: "350,00₺",
      weight: "350 gr/paket",
      image: "/images/et_resimler/baton_sucuk.png",
      description: "Geleneksel baton sucuk, özel baharatlarla hazırlanmıştır.",
      features: [
        "Geleneksel üretim yöntemi",
        "Özel baharat karışımı",
        "Doğal fermentasyon",
        "Premium dana eti",
        "El yapımı kalitesi"
      ],
      cookingTips: [
        "Tavada orta ateşte pişirin",
        "3-4 dakika her tarafını çevirin",
        "Yumurta ile birlikte servis edin",
        "Sıcak ekmek ile servis yapın"
      ],
      nutritionalInfo: {
        protein: "25g",
        fat: "30g",
        carbs: "3g",
        calories: "380 kcal"
      },
      origin: "Türkiye",
      storage: "Serin ve kuru yerde saklayın"
    },
    2: {
      id: 2,
      name: "Baton Sucuk",
      price: "1.000,00₺",
      weight: "kg",
      image: "/images/et_resimler/baton_kgsucuk.png",
      description: "Kilogram olarak satılan baton sucuk, toplu alım için ideal.",
      features: [
        "Toplu alım avantajı",
        "Ekonomik seçenek",
        "Aynı kalite garantisi",
        "Uzun raf ömrü",
        "Pratik saklama"
      ],
      cookingTips: [
        "İhtiyacınız kadar dilimleyin",
        "Tavada orta ateşte pişirin",
        "Kahvaltıda servis edin",
        "Buzdolabında saklayın"
      ],
      nutritionalInfo: {
        protein: "25g",
        fat: "30g",
        carbs: "3g",
        calories: "380 kcal"
      },
      origin: "Türkiye",
      storage: "0-4°C buzdolabında saklayın"
    },
    3: {
      id: 3,
      name: "Baton Sucuk (Hellim peyniri, Antep fıstıklı)",
      price: "1.350,00₺",
      weight: "kg",
      image: "/images/et_resimler/baton_sucuk_hellimpeynir.png",
      description: "Hellim peyniri ve Antep fıstığı ile zenginleştirilmiş özel baton sucuk.",
      features: [
        "Hellim peyniri içerikli",
        "Antep fıstığı parçacıkları",
        "Premium kalite",
        "Özel tarif",
        "Benzersiz lezzet"
      ],
      cookingTips: [
        "Düşük ateşte pişirin",
        "Peynir erimesin diye dikkat edin",
        "Özel günlerde servis edin",
        "İnce dilimler halinde kesin"
      ],
      nutritionalInfo: {
        protein: "28g",
        fat: "35g",
        carbs: "4g",
        calories: "420 kcal"
      },
      origin: "Türkiye",
      storage: "0-4°C buzdolabında saklayın"
    },
    4: {
      id: 4,
      name: "Dilimli Sucuk",
      price: "300,00₺",
      weight: "500 gr/paket",
      image: "/images/et_resimler/dilim_sucuk.png",
      description: "Pratik kullanım için hazır dilimlenmiş sucuk.",
      features: [
        "Hazır dilimlenmiş",
        "Pratik kullanım",
        "Vakum paketleme",
        "Hijyenik ambalaj",
        "Uzun raf ömrü"
      ],
      cookingTips: [
        "Direkt tavaya atabilirsiniz",
        "Hızlı pişirme",
        "Kahvaltıda ideal",
        "Yumurta ile karıştırın"
      ],
      nutritionalInfo: {
        protein: "25g",
        fat: "30g",
        carbs: "3g",
        calories: "380 kcal"
      },
      origin: "Türkiye",
      storage: "0-4°C buzdolabında saklayın"
    },
    5: {
      id: 5,
      name: "Kangal Sucuk",
      price: "550,00₺",
      weight: "kg",
      image: "/images/et_resimler/kangal_sucuk.png",
      description: "Geleneksel kangal şeklinde sucuk, özel lezzet.",
      features: [
        "Geleneksel kangal şekli",
        "Özel kurutma tekniği",
        "Yoğun lezzet",
        "El yapımı",
        "Doğal kılıf"
      ],
      cookingTips: [
        "Kalın dilimler halinde kesin",
        "Yavaş pişirin",
        "Geleneksel kahvaltıda servis edin",
        "Peynir ile birlikte tüketin"
      ],
      nutritionalInfo: {
        protein: "26g",
        fat: "28g",
        carbs: "2g",
        calories: "360 kcal"
      },
      origin: "Türkiye",
      storage: "Serin ve kuru yerde saklayın"
    },
    6: {
      id: 6,
      name: "Osmanlı Sucuğu",
      price: "1.200,00₺",
      weight: "kg",
      image: "/images/et_resimler/osmanlı_sucugu.png",
      description: "Osmanlı geleneğinden gelen özel tarif sucuk.",
      features: [
        "Osmanlı tarifi",
        "Özel baharat karışımı",
        "Geleneksel üretim",
        "Premium kalite",
        "Tarihi lezzet"
      ],
      cookingTips: [
        "Özenle pişirin",
        "Geleneksel usulde servis edin",
        "Özel günlerde tercih edin",
        "İnce dilimler halinde kesin"
      ],
      nutritionalInfo: {
        protein: "27g",
        fat: "32g",
        carbs: "2g",
        calories: "400 kcal"
      },
      origin: "Türkiye",
      storage: "Serin ve kuru yerde saklayın"
    }
  };

  const product = products[id];

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Ürün bulunamadı</h2>
        <Link to="/sucuk">Sucuk sayfasına dön</Link>
      </div>
    );
  }

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMagnifierPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div style={{
      maxWidth: 1200,
      margin: "0 auto",
      padding: "2rem",
      background: "var(--white)"
    }}>
      {/* Breadcrumb */}
      <div style={{
        marginBottom: "2rem",
        fontSize: 14,
        color: "#666"
      }}>
        <Link to="/" style={{ color: "var(--primary-color)", textDecoration: "none" }}>
          Ana Sayfa
        </Link>
        {" > "}
        <Link to="/sucuk" style={{ color: "var(--primary-color)", textDecoration: "none" }}>
          Sucuk
        </Link>
        {" > "}
        <span>{product.name}</span>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "3rem",
        marginBottom: "3rem"
      }}>
        {/* Sol Taraf - Resim */}
        <div>
          <div 
            style={{
              position: "relative",
              width: "100%",
              height: 400,
              background: "#f8f9fa",
              borderRadius: 16,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "crosshair"
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowMagnifier(true)}
            onMouseLeave={() => setShowMagnifier(false)}
          >
            <img 
              src={product.image} 
              alt={product.name}
              style={{
                maxWidth: "80%",
                maxHeight: "80%",
                objectFit: "contain"
              }}
            />
            
            {/* Büyüteç */}
            {showMagnifier && (
              <div
                style={{
                  position: "absolute",
                  width: 200,
                  height: 200,
                  border: "3px solid var(--primary-color)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                  backgroundImage: `url(${product.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "800% 800%",
                  backgroundPosition: `${-magnifierPosition.x * 4 + 100}px ${-magnifierPosition.y * 4 + 100}px`,
                  left: magnifierPosition.x - 100,
                  top: magnifierPosition.y - 100,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  backgroundColor: "#f8f9fa"
                }}
              />
            )}
          </div>
        </div>

        {/* Sağ Taraf - Bilgiler */}
        <div>
          <h1 style={{
            color: "var(--primary-color)",
            fontSize: "2.5rem",
            fontWeight: 800,
            marginBottom: "1rem",
            lineHeight: 1.2
          }}>
            {product.name}
          </h1>

          <div style={{
            background: "linear-gradient(135deg, var(--primary-color), var(--dark-red))",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: 12,
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "1rem",
            textAlign: "center",
            boxShadow: "0 4px 16px #80002033"
          }}>
            {product.price}
          </div>

          <div style={{
            background: "#f8f9fa",
            padding: "1rem",
            borderRadius: 8,
            marginBottom: "1.5rem",
            border: "1px solid #dee2e6"
          }}>
            <strong style={{ color: "var(--primary-color)" }}>Ağırlık:</strong> {product.weight}
          </div>

          <p style={{
            fontSize: "1.1rem",
            lineHeight: 1.6,
            color: "#333",
            marginBottom: "2rem"
          }}>
            {product.description}
          </p>

          {/* Özellikler */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{
              color: "var(--primary-color)",
              fontSize: "1.3rem",
              fontWeight: 700,
              marginBottom: "1rem"
            }}>
              Özellikler
            </h3>
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0
            }}>
              {product.features.map((feature, index) => (
                <li key={index} style={{
                  padding: "0.5rem 0",
                  borderBottom: "1px solid #eee",
                  color: "#666"
                }}>
                  ✓ {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Alt Bölüm - Detaylı Bilgiler */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "2rem",
        marginTop: "3rem"
      }}>
        {/* Pişirme Önerileri */}
        <div style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: 16,
          boxShadow: "0 4px 16px #80002011",
          border: "1px solid #eee"
        }}>
          <h3 style={{
            color: "var(--primary-color)",
            fontSize: "1.3rem",
            fontWeight: 700,
            marginBottom: "1rem"
          }}>
            Pişirme Önerileri
          </h3>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0
          }}>
            {product.cookingTips.map((tip, index) => (
              <li key={index} style={{
                padding: "0.5rem 0",
                color: "#666",
                fontSize: 14,
                lineHeight: 1.5
              }}>
                • {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Besin Değerleri */}
        <div style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: 16,
          boxShadow: "0 4px 16px #80002011",
          border: "1px solid #eee"
        }}>
          <h3 style={{
            color: "var(--primary-color)",
            fontSize: "1.3rem",
            fontWeight: 700,
            marginBottom: "1rem"
          }}>
            Besin Değerleri (100g)
          </h3>
          <div style={{ color: "#666", fontSize: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid #eee" }}>
              <span>Protein:</span>
              <strong>{product.nutritionalInfo.protein}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid #eee" }}>
              <span>Yağ:</span>
              <strong>{product.nutritionalInfo.fat}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid #eee" }}>
              <span>Karbonhidrat:</span>
              <strong>{product.nutritionalInfo.carbs}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0" }}>
              <span>Kalori:</span>
              <strong>{product.nutritionalInfo.calories}</strong>
            </div>
          </div>
        </div>

        {/* Ürün Bilgileri */}
        <div style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: 16,
          boxShadow: "0 4px 16px #80002011",
          border: "1px solid #eee"
        }}>
          <h3 style={{
            color: "var(--primary-color)",
            fontSize: "1.3rem",
            fontWeight: 700,
            marginBottom: "1rem"
          }}>
            Ürün Bilgileri
          </h3>
          <div style={{ color: "#666", fontSize: 14 }}>
            <div style={{ marginBottom: "1rem" }}>
              <strong>Menşei:</strong><br />
              {product.origin}
            </div>
            <div>
              <strong>Saklama Koşulları:</strong><br />
              {product.storage}
            </div>
          </div>
        </div>
      </div>

      {/* Geri Dön Butonu */}
      <div style={{
        textAlign: "center",
        marginTop: "3rem"
      }}>
        <Link 
          to="/sucuk"
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, var(--primary-color), var(--dark-red))",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 600,
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px #80002033"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 16px #80002044";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 12px #80002033";
          }}
        >
          ← Sucuk Sayfasına Dön
        </Link>
      </div>
    </div>
  );
};

export default SucukDetail; 