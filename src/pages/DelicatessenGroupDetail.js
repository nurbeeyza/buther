import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const DelicatessenGroupDetail = () => {
  const { id } = useParams();
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);

  const products = {
    1: {
      id: 1,
      name: "Dana Bacon",
      price: "90,00₺",
      weight: "100 gr/paket",
      image: "/images/et_resimler/dana_bacon.png",
      description: "Premium dana bacon, kahvaltı ve yemekler için ideal.",
      features: [
        "Premium dana etinden",
        "Özel fümeleme tekniği",
        "Kahvaltı için ideal",
        "Yüksek protein içeriği",
        "Pratik paketleme"
      ],
      cookingTips: [
        "Tavada orta ateşte pişirin",
        "3-4 dakika her tarafını çevirin",
        "Fazla yağ kullanmayın",
        "Sıcak servis yapın"
      ],
      nutritionalInfo: {
        protein: "22g",
        fat: "15g",
        carbs: "1g",
        calories: "220 kcal"
      },
      origin: "Türkiye",
      storage: "0-4°C buzdolabında saklayın"
    },
    2: {
      id: 2,
      name: "Dana Jambon",
      price: "85,00₺",
      weight: "100 gr/paket",
      image: "/images/et_resimler/dana_jambon.png",
      description: "Lezzetli dana jambon, sandviç ve salata için mükemmel.",
      features: [
        "Premium dana etinden",
        "Özel marine tekniği",
        "Sandviç için ideal",
        "Düşük yağ oranı",
        "Uzun raf ömrü"
      ],
      cookingTips: [
        "Direkt tüketilebilir",
        "Sandviç ve salatalarda kullanın",
        "Soğuk servis yapın",
        "İnce dilimler halinde kesin"
      ],
      nutritionalInfo: {
        protein: "24g",
        fat: "8g",
        carbs: "2g",
        calories: "160 kcal"
      },
      origin: "Türkiye",
      storage: "0-4°C buzdolabında saklayın"
    },
    3: {
      id: 3,
      name: "Dana Kavurma",
      price: "90,00₺",
      weight: "100 gr/paket",
      image: "/images/et_resimler/dana_kavurma.png",
      description: "Geleneksel dana kavurma, pratik ve lezzetli.",
      features: [
        "Geleneksel lezzet",
        "Özel kavurma tekniği",
        "Pratik kullanım",
        "Yüksek protein",
        "Uzun raf ömrü"
      ],
      cookingTips: [
        "Direkt tüketilebilir",
        "Pilav ve makarna ile servis edin",
        "Hafif ısıtarak servis yapın",
        "Sebzelerle karıştırabilirsiniz"
      ],
      nutritionalInfo: {
        protein: "26g",
        fat: "12g",
        carbs: "1g",
        calories: "200 kcal"
      },
      origin: "Türkiye",
      storage: "0-4°C buzdolabında saklayın"
    },
    4: {
      id: 4,
      name: "Dana Salam",
      price: "85,00₺",
      weight: "100 gr/paket",
      image: "/images/et_resimler/dana_salam.png",
      description: "Premium dana salam, kahvaltı ve atıştırmalık için ideal.",
      features: [
        "Premium dana etinden",
        "Özel baharat karışımı",
        "Kahvaltı için ideal",
        "İnce dilimlenebilir",
        "Uzun raf ömrü"
      ],
      cookingTips: [
        "Direkt tüketilebilir",
        "İnce dilimler halinde kesin",
        "Kahvaltıda peynir ile servis edin",
        "Soğuk servis yapın"
      ],
      nutritionalInfo: {
        protein: "20g",
        fat: "18g",
        carbs: "2g",
        calories: "240 kcal"
      },
      origin: "Türkiye",
      storage: "0-4°C buzdolabında saklayın"
    },
    5: {
      id: 5,
      name: "Dana Sosis",
      price: "80,00₺",
      weight: "100 gr/paket",
      image: "/images/et_resimler/dana_sosis.png",
      description: "Taze dana sosis, kahvaltı ve yemekler için mükemmel.",
      features: [
        "Taze dana etinden",
        "Doğal kılıf",
        "Kahvaltı için ideal",
        "Kolay pişirme",
        "Ekonomik seçenek"
      ],
      cookingTips: [
        "Tavada orta ateşte pişirin",
        "5-7 dakika çevirerek pişirin",
        "Fazla deşmeyin",
        "Sıcak servis yapın"
      ],
      nutritionalInfo: {
        protein: "18g",
        fat: "20g",
        carbs: "3g",
        calories: "250 kcal"
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
        <Link to="/delicatessen-group">Şarküteri Grubu sayfasına dön</Link>
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
        <Link to="/delicatessen-group" style={{ color: "var(--primary-color)", textDecoration: "none" }}>
          Şarküteri Grubu
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
                  width: 150,
                  height: 150,
                  border: "3px solid var(--primary-color)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                  backgroundImage: `url(${product.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "800% 800%",
                  backgroundPosition: `${-magnifierPosition.x * 4 + 75}px ${-magnifierPosition.y * 4 + 75}px`,
                  left: magnifierPosition.x - 75,
                  top: magnifierPosition.y - 75,
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
        {/* Kullanım Önerileri */}
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
            Kullanım Önerileri
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
          to="/delicatessen-group"
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
          ← Şarküteri Grubu Sayfasına Dön
        </Link>
      </div>
    </div>
  );
};

export default DelicatessenGroupDetail; 