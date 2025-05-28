import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const ButcherGroupDetail = () => {
  const { id } = useParams();
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);

  const products = {
    1: {
      id: 1,
      name: "Dana Ayna",
      price: "750,00₺",
      weight: "kg",
      image: "/images/et_resimler/dana_ayna.png",
      description: "Premium kalite dana ayna, özel kesim ile hazırlanmıştır.",
      features: [
        "Premium kalite dana eti",
        "Özel kesim tekniği",
        "Yüksek protein içeriği",
        "Düşük yağ oranı",
        "Taze günlük kesim"
      ],
      cookingTips: [
        "Orta ateşte 15-20 dakika pişirin",
        "Pişirmeden önce oda sıcaklığında bekletin",
        "Baharatları pişirmeden 30 dk önce uygulayın",
        "Dinlendirerek servis yapın"
      ],
      nutritionalInfo: {
        protein: "26g",
        fat: "8g",
        carbs: "0g",
        calories: "165 kcal"
      },
      origin: "Türkiye",
      storage: "0-4°C buzdolabında saklayın"
    },
    2: {
      id: 2,
      name: "Dana Jülyen",
      price: "750,00₺",
      weight: "kg",
      image: "/images/et_resimler/dana_jülyen.png",
      description: "Yumuşacık dana jülyen, ızgara ve tavada pişirme için ideal.",
      features: [
        "En yumuşak dana parçası",
        "Hızlı pişirme",
        "Düşük yağ içeriği",
        "Yüksek protein",
        "Premium kalite"
      ],
      cookingTips: [
        "Yüksek ateşte hızlı pişirin",
        "2-3 dakika her tarafı çevirin",
        "Fazla pişirmeyin, sertleşir",
        "Sıcak servis yapın"
      ],
      nutritionalInfo: {
        protein: "28g",
        fat: "6g",
        carbs: "0g",
        calories: "155 kcal"
      },
      origin: "Türkiye",
      storage: "0-4°C buzdolabında saklayın"
    },
    3: {
      id: 3,
      name: "Dana Kaburga Kıyma",
      price: "300,00₺",
      weight: "400 gr/paket",
      image: "/images/et_resimler/dana_kaburga_kiyma.png",
      description: "Taze dana kaburga kıyması, köfte ve yemekler için mükemmel.",
      features: [
        "Dana kaburga etinden",
        "Günlük taze çekim",
        "İdeal yağ oranı",
        "Köfte için mükemmel",
        "Hijyenik paketleme"
      ],
      cookingTips: [
        "Köfte yapmak için ideal",
        "Soğan ve baharat ekleyin",
        "Orta ateşte pişirin",
        "Şekil vermeden önce dinlendirin"
      ],
      nutritionalInfo: {
        protein: "20g",
        fat: "15g",
        carbs: "0g",
        calories: "210 kcal"
      },
      origin: "Türkiye",
      storage: "0-4°C buzdolabında saklayın"
    },
    4: {
      id: 4,
      name: "Dana Kıyma",
      price: "240,00₺",
      weight: "400 gr/paket",
      image: "/images/et_resimler/dana_kiyma.png",
      description: "Günlük taze dana kıyması, her türlü yemek için ideal.",
      features: [
        "Günlük taze çekim",
        "Karışık dana etlerinden",
        "Çok amaçlı kullanım",
        "Ekonomik seçenek",
        "Hijyenik paketleme"
      ],
      cookingTips: [
        "Köfte, mantı, börek için ideal",
        "Kavurma ve güveç yapabilirsiniz",
        "Orta ateşte pişirin",
        "Baharat ve soğan ekleyin"
      ],
      nutritionalInfo: {
        protein: "18g",
        fat: "18g",
        carbs: "0g",
        calories: "230 kcal"
      },
      origin: "Türkiye",
      storage: "0-4°C buzdolabında saklayın"
    },
    5: {
      id: 5,
      name: "Dana Kontrfile",
      price: "800,00₺",
      weight: "kg",
      image: "/images/et_resimler/dana_kontrfile.png",
      description: "Premium dana kontrfile, steak ve ızgara için mükemmel seçim.",
      features: [
        "Premium steak eti",
        "Mükemmel marbling",
        "Yumuşak doku",
        "Yüksek protein",
        "Özel kesim"
      ],
      cookingTips: [
        "Yüksek ateşte mühürleyin",
        "Orta pişirme için 4-5 dakika",
        "Dinlendirerek servis yapın",
        "Tuz ve karabiberle tatlandırın"
      ],
      nutritionalInfo: {
        protein: "25g",
        fat: "12g",
        carbs: "0g",
        calories: "200 kcal"
      },
      origin: "Türkiye",
      storage: "0-4°C buzdolabında saklayın"
    },
    6: {
      id: 6,
      name: "Dana Kuşbaşı",
      price: "680,00₺",
      weight: "kg",
      image: "/images/et_resimler/dana_kusbasi.png",
      description: "Taze dana kuşbaşı, güveç ve kavurma için ideal.",
      features: [
        "Eşit boyutlarda kesim",
        "Güveç için ideal",
        "Yumuşak doku",
        "Taze günlük kesim",
        "Çok amaçlı kullanım"
      ],
      cookingTips: [
        "Güveç ve kavurma için ideal",
        "Düşük ateşte uzun pişirin",
        "Sebzelerle birlikte pişirin",
        "Baharatları baştan ekleyin"
      ],
      nutritionalInfo: {
        protein: "24g",
        fat: "10g",
        carbs: "0g",
        calories: "180 kcal"
      },
      origin: "Türkiye",
      storage: "0-4°C buzdolabında saklayın"
    },
    7: {
      id: 7,
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
        "Özel kesim"
      ],
      cookingTips: [
        "Fırında 180°C'de pişirin",
        "1 kg için 45-60 dakika",
        "Ara ara suyla ıslatın",
        "Dinlendirerek dilimleyin"
      ],
      nutritionalInfo: {
        protein: "25g",
        fat: "9g",
        carbs: "0g",
        calories: "170 kcal"
      },
      origin: "Türkiye",
      storage: "0-4°C buzdolabında saklayın"
    },
    8: {
      id: 8,
      name: "Kuzu Bel",
      price: "700,00₺",
      weight: "kg",
      image: "/images/et_resimler/kuzu_bel.png",
      description: "Premium kuzu bel eti, özel günler için ideal seçim.",
      features: [
        "Premium kuzu eti",
        "Özel günler için ideal",
        "Yumuşak doku",
        "Yoğun lezzet",
        "Özel kesim"
      ],
      cookingTips: [
        "Orta ateşte pişirin",
        "Kekik ve biberiye ekleyin",
        "Fazla pişirmeyin",
        "Sıcak servis yapın"
      ],
      nutritionalInfo: {
        protein: "25g",
        fat: "14g",
        carbs: "0g",
        calories: "220 kcal"
      },
      origin: "Türkiye",
      storage: "0-4°C buzdolabında saklayın"
    }
  };

  const product = products[id];

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Ürün bulunamadı</h2>
        <Link to="/butcher-group">Kasap Grubu sayfasına dön</Link>
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
        <Link to="/butcher-group" style={{ color: "var(--primary-color)", textDecoration: "none" }}>
          Kasap Grubu
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
            <strong style={{ color: "var(--primary-color)" }}>Birim:</strong> {product.weight}
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
          to="/butcher-group"
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
          ← Kasap Grubu Sayfasına Dön
        </Link>
      </div>
    </div>
  );
};

export default ButcherGroupDetail; 