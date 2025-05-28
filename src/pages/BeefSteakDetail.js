import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const BeefSteakDetail = () => {
  const { id } = useParams();
  
  const [magnifier, setMagnifier] = useState({
    isVisible: false,
    x: 0,
    y: 0,
    backgroundPosition: '0% 0%'
  });

  const handleMouseMove = (e, imageSrc) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    
    setMagnifier({
      isVisible: true,
      x: e.clientX,
      y: e.clientY,
      backgroundPosition: `${xPercent}% ${yPercent}%`,
      imageSrc: imageSrc
    });
  };

  const handleMouseLeave = () => {
    setMagnifier({ ...magnifier, isVisible: false });
  };

  const products = {
    1: {
      name: "Dallas Steak",
      price: "950,00₺",
      weight: "300-400g",
      image: "/images/et_resimler/dallas_steak.png",
      description: "Premium kalite Dallas steak, özel kesim ve marinasyon ile hazırlanmıştır.",
      detailedDescription: "Dallas Steak, Amerika'nın en ünlü steak çeşitlerinden biridir. Özel olarak seçilmiş dana etinin en kaliteli bölümlerinden elde edilen bu steak, yumuşaklığı ve lezzeti ile ünlüdür. Uzman kasaplarımız tarafından özenle kesilir ve özel marinasyon işleminden geçirilir.",
      features: [
        "Premium kalite dana eti",
        "Özel kesim tekniği",
        "Marinasyon işlemi uygulanmış",
        "Izgara ve tavada pişirme için ideal",
        "Protein açısından zengin",
        "Yumuşak doku yapısı"
      ],
      cookingTips: [
        "Pişirmeden önce oda sıcaklığında bekletin",
        "Yüksek ateşte kısa süre pişirin",
        "İç sıcaklık 55-60°C olmalı (medium-rare)",
        "Pişirdikten sonra 5 dakika dinlendirin",
        "Tuz ve karabiberle tatlandırın"
      ],
      nutritionalInfo: {
        protein: "26g",
        fat: "15g",
        calories: "250 kcal",
        iron: "2.5mg"
      },
      origin: "Yerli Dana",
      storage: "0-4°C'de muhafaza edin, 2-3 gün içinde tüketin"
    },
    2: {
      name: "Dana Antrikot",
      price: "800,00₺",
      weight: "250-350g",
      image: "/images/et_resimler/dana_antrikot.png",
      description: "Yumuşacık dana antrikot, ızgara ve tavada pişirme için ideal.",
      detailedDescription: "Dana antrikot, dana etinin en lezzetli ve yumuşak bölümlerinden biridir. Kaburga kemiği çevresinden alınan bu özel kesim, marbling (yağ damarları) yapısı sayesinde pişirme sırasında kendiliğinden yumuşar ve eşsiz bir lezzet sunar.",
      features: [
        "Doğal marbling yapısı",
        "Yumuşak et dokusu",
        "Yoğun et aroması",
        "Kolay pişirme",
        "Yüksek protein değeri",
        "Omega-3 açısından zengin"
      ],
      cookingTips: [
        "Orta ateşte pişirin",
        "Her iki tarafı 3-4 dakika",
        "Fazla çevirmeyin",
        "Baharatları pişirmeden önce ekleyin",
        "Dinlendirme süresi önemli"
      ],
      nutritionalInfo: {
        protein: "24g",
        fat: "12g",
        calories: "220 kcal",
        iron: "2.2mg"
      },
      origin: "Yerli Dana",
      storage: "0-4°C'de muhafaza edin, 2-3 gün içinde tüketin"
    },
    3: {
      name: "Dana Asado",
      price: "800,00₺",
      weight: "400-500g",
      image: "/images/et_resimler/dana_asado.png",
      description: "Özel kesim dana asado, mangal ve ızgara için mükemmel seçim.",
      detailedDescription: "Dana Asado, Arjantin mutfağından gelen özel bir kesim tekniğidir. Kalın kesilmiş bu et parçası, uzun ve yavaş pişirme için idealdir. Mangal kültürünün vazgeçilmez parçası olan asado, sosyal yemeklerin ve özel günlerin yıldızıdır.",
      features: [
        "Kalın kesim özel teknik",
        "Mangal için ideal",
        "Uzun pişirme süresi",
        "Sosyal yemekler için perfect",
        "Yoğun et lezzeti",
        "Geleneksel Arjantin kesimi"
      ],
      cookingTips: [
        "Düşük ateşte uzun süre pişirin",
        "Sürekli çevirmeyin",
        "Tuzlama işlemini erkenden yapın",
        "Mangal közü ideal",
        "Sabırlı olun, acele etmeyin"
      ],
      nutritionalInfo: {
        protein: "28g",
        fat: "18g",
        calories: "280 kcal",
        iron: "3.0mg"
      },
      origin: "Yerli Dana",
      storage: "0-4°C'de muhafaza edin, 2-3 gün içinde tüketin"
    },
    4: {
      name: "Dana Bonfile",
      price: "950,00₺",
      weight: "200-300g",
      image: "/images/et_resimler/dana_bonfile.png",
      description: "En kaliteli dana bonfile, yumuşaklığı ile ünlü premium et.",
      detailedDescription: "Dana bonfile, dana etinin en değerli ve yumuşak bölümüdür. Hayvanın en az çalışan kasından alınan bu özel kesim, eşsiz yumuşaklığı ve lezzeti ile fine dining restoranlarının favorisidir. Minimal yağ oranı ve maksimum protein içeriği ile sağlıklı beslenmenin de vazgeçilmezidir.",
      features: [
        "En yumuşak et dokusu",
        "Minimal yağ oranı",
        "Premium kalite",
        "Fine dining standardı",
        "Hızlı pişirme",
        "Maksimum protein"
      ],
      cookingTips: [
        "Yüksek ateşte hızlı pişirin",
        "İç kısım pembe kalmalı",
        "Aşırı pişirmeyin",
        "Sadece tuz ve karabiber yeterli",
        "2-3 dakika her taraf"
      ],
      nutritionalInfo: {
        protein: "30g",
        fat: "8g",
        calories: "200 kcal",
        iron: "2.8mg"
      },
      origin: "Yerli Dana",
      storage: "0-4°C'de muhafaza edin, 2-3 gün içinde tüketin"
    },
    5: {
      name: "Dana Kemikli Kaburga",
      price: "700,00₺",
      weight: "500-600g",
      image: "/images/et_resimler/dana_kemiklikaburga.png",
      description: "Lezzetli dana kemikli kaburga, uzun pişirme için ideal.",
      detailedDescription: "Dana kemikli kaburga, geleneksel Türk mutfağının vazgeçilmez lezzetlerinden biridir. Kemik içindeki ilik ve et arasındaki bağ dokular, uzun pişirme sürecinde eşsiz bir lezzet ve aroma oluşturur. Haşlama, güveç ve fırın yemekleri için mükemmeldir.",
      features: [
        "Kemik iliği ile zengin lezzet",
        "Uzun pişirme için ideal",
        "Geleneksel Türk mutfağı",
        "Kolajen açısından zengin",
        "Güveç ve haşlama için perfect",
        "Besleyici kemik iliği"
      ],
      cookingTips: [
        "Uzun süre haşlayın",
        "Düşük ateşte pişirin",
        "Sebzelerle birlikte pişirin",
        "Baharatları bol kullanın",
        "Sabırlı olun, acele etmeyin"
      ],
      nutritionalInfo: {
        protein: "22g",
        fat: "20g",
        calories: "300 kcal",
        iron: "3.5mg"
      },
      origin: "Yerli Dana",
      storage: "0-4°C'de muhafaza edin, 2-3 gün içinde tüketin"
    },
    6: {
      name: "Dana Pirzola",
      price: "900,00₺",
      weight: "300-400g",
      image: "/images/et_resimler/dana_pirzola.png",
      description: "Taze dana pirzola, ızgara ve tavada pişirme için mükemmel.",
      detailedDescription: "Dana pirzola, kaburga kemiği ile birlikte kesilmiş özel bir dana eti kesimdir. Kemik sayesinde pişirme sırasında ete özel bir lezzet katar. Izgara ve tavada pişirme için ideal olan pirzola, hem pratik hem de lezzetli bir seçenektir.",
      features: [
        "Kemikli özel kesim",
        "Izgara için ideal",
        "Pratik pişirme",
        "Kemikten gelen lezzet",
        "Orta kalınlık",
        "Hızlı hazırlık"
      ],
      cookingTips: [
        "Orta-yüksek ateşte pişirin",
        "Her tarafı 4-5 dakika",
        "Kemik tarafını son çevirin",
        "Dinlendirme süresi 3 dakika",
        "Limon ile servis edin"
      ],
      nutritionalInfo: {
        protein: "25g",
        fat: "14g",
        calories: "240 kcal",
        iron: "2.6mg"
      },
      origin: "Yerli Dana",
      storage: "0-4°C'de muhafaza edin, 2-3 gün içinde tüketin"
    },
    7: {
      name: "T-Bone Steak",
      price: "950,00₺",
      weight: "400-500g",
      image: "/images/et_resimler/t-bonesteak.png",
      description: "Klasik T-Bone steak, hem bonfile hem kontrfile bir arada.",
      detailedDescription: "T-Bone steak, dünya mutfağının en ünlü steak çeşitlerinden biridir. T şeklindeki kemiğin bir tarafında bonfile, diğer tarafında kontrfile bulunur. Bu sayede iki farklı et dokusunu aynı anda tadabilirsiniz. Amerikan mutfağının klasik temsilcisidir.",
      features: [
        "İki farklı et dokusu",
        "Bonfile + Kontrfile",
        "T şeklinde kemik",
        "Amerikan klasiği",
        "Premium steak deneyimi",
        "Büyük porsiyon"
      ],
      cookingTips: [
        "Yüksek ateşte başlayın",
        "Bonfile tarafı daha hızlı pişer",
        "Kemiği referans alın",
        "Medium-rare ideal",
        "Kalın kesim avantajı"
      ],
      nutritionalInfo: {
        protein: "28g",
        fat: "16g",
        calories: "270 kcal",
        iron: "3.2mg"
      },
      origin: "Yerli Dana",
      storage: "0-4°C'de muhafaza edin, 2-3 gün içinde tüketin"
    }
  };

  const product = products[id];

  if (!product) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Ürün bulunamadı</h2>
        <Link to="/products/beef-steak">Geri Dön</Link>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: 1200,
      margin: "0 auto",
      padding: "2rem",
      background: "var(--white)",
      minHeight: "calc(100vh - 200px)"
    }}>
      {/* Geri Dön Butonu */}
      <Link 
        to="/products/beef-steak"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--primary-color)",
          textDecoration: "none",
          marginBottom: "2rem",
          fontSize: "1.1rem",
          fontWeight: 600,
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.target.style.color = "var(--dark-red)";
          e.target.style.transform = "translateX(-5px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "var(--primary-color)";
          e.target.style.transform = "translateX(0)";
        }}
      >
        ← Geri Dön
      </Link>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "3rem",
        marginBottom: "3rem"
      }}>
        {/* Sol Taraf - Resimler */}
        <div>
          <div style={{
            position: "relative",
            marginBottom: "1rem"
          }}>
            <img 
              src={product.image} 
              alt={product.name}
              style={{
                width: "100%",
                height: 400,
                objectFit: "contain",
                borderRadius: 12,
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                background: "#f8f9fa",
                cursor: "crosshair"
              }}
              onMouseMove={(e) => handleMouseMove(e, product.image)}
              onMouseLeave={handleMouseLeave}
            />
            {/* Fiyat Etiketi */}
            <div style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "linear-gradient(135deg, var(--primary-color), var(--dark-red))",
              color: "white",
              padding: "12px 20px",
              borderRadius: 25,
              fontWeight: 700,
              fontSize: 18,
              boxShadow: "0 4px 12px rgba(139,0,0,0.3)"
            }}>
              {product.price}
            </div>
          </div>
        </div>

        {/* Sağ Taraf - Ürün Bilgileri */}
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

          <p style={{
            fontSize: "1.2rem",
            color: "#666",
            lineHeight: 1.6,
            marginBottom: "2rem"
          }}>
            {product.detailedDescription}
          </p>

          {/* Ürün Özellikleri */}
          <div style={{
            background: "#f8f9fa",
            padding: "1.5rem",
            borderRadius: 12,
            marginBottom: "2rem",
            borderLeft: "4px solid var(--primary-color)"
          }}>
            <h3 style={{
              color: "var(--primary-color)",
              marginBottom: "1rem",
              fontSize: "1.3rem"
            }}>
              Ürün Özellikleri
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.5rem"
            }}>
              <div><strong>Ağırlık:</strong> {product.weight}</div>
              <div><strong>Menşei:</strong> {product.origin}</div>
              <div style={{ gridColumn: "1 / -1" }}>
                <strong>Saklama:</strong> {product.storage}
              </div>
            </div>
          </div>

          {/* Besin Değerleri */}
          <div style={{
            background: "#fff",
            border: "1px solid #e9ecef",
            padding: "1.5rem",
            borderRadius: 12,
            marginBottom: "2rem"
          }}>
            <h3 style={{
              color: "var(--primary-color)",
              marginBottom: "1rem",
              fontSize: "1.3rem"
            }}>
              Besin Değerleri (100g)
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem"
            }}>
              <div style={{ textAlign: "center", padding: "0.5rem" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--primary-color)" }}>
                  {product.nutritionalInfo.protein}
                </div>
                <div style={{ fontSize: "0.9rem", color: "#666" }}>Protein</div>
              </div>
              <div style={{ textAlign: "center", padding: "0.5rem" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--primary-color)" }}>
                  {product.nutritionalInfo.calories}
                </div>
                <div style={{ fontSize: "0.9rem", color: "#666" }}>Kalori</div>
              </div>
              <div style={{ textAlign: "center", padding: "0.5rem" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--primary-color)" }}>
                  {product.nutritionalInfo.fat}
                </div>
                <div style={{ fontSize: "0.9rem", color: "#666" }}>Yağ</div>
              </div>
              <div style={{ textAlign: "center", padding: "0.5rem" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--primary-color)" }}>
                  {product.nutritionalInfo.iron}
                </div>
                <div style={{ fontSize: "0.9rem", color: "#666" }}>Demir</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Bölüm - Özellikler ve Pişirme İpuçları */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "3rem"
      }}>
        {/* Özellikler */}
        <div style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          border: "1px solid #e9ecef"
        }}>
          <h3 style={{
            color: "var(--primary-color)",
            marginBottom: "1.5rem",
            fontSize: "1.5rem",
            borderBottom: "2px solid var(--primary-color)",
            paddingBottom: "0.5rem"
          }}>
            Öne Çıkan Özellikler
          </h3>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0
          }}>
            {product.features.map((feature, index) => (
              <li key={index} style={{
                padding: "0.5rem 0",
                borderBottom: "1px solid #f1f3f4",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}>
                <span style={{
                  color: "var(--primary-color)",
                  fontWeight: 700,
                  fontSize: "1.2rem"
                }}>✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Pişirme İpuçları */}
        <div style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          border: "1px solid #e9ecef"
        }}>
          <h3 style={{
            color: "var(--primary-color)",
            marginBottom: "1.5rem",
            fontSize: "1.5rem",
            borderBottom: "2px solid var(--primary-color)",
            paddingBottom: "0.5rem"
          }}>
            Pişirme İpuçları
          </h3>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0
          }}>
            {product.cookingTips.map((tip, index) => (
              <li key={index} style={{
                padding: "0.5rem 0",
                borderBottom: "1px solid #f1f3f4",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}>
                <span style={{
                  color: "#ff6b35",
                  fontWeight: 700,
                  fontSize: "1.2rem"
                }}>🔥</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Büyüteç Efekti */}
      {magnifier.isVisible && (
        <div style={{
          position: "fixed",
          width: 150,
          height: 150,
          borderRadius: "50%",
          border: "3px solid var(--primary-color)",
          background: `url(${magnifier.imageSrc}) no-repeat`,
          backgroundSize: "800px 600px",
          backgroundPosition: magnifier.backgroundPosition,
          pointerEvents: "none",
          zIndex: 1000,
          left: magnifier.x - 75,
          top: magnifier.y - 75,
          boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
          transform: "scale(1)",
          transition: "opacity 0.2s ease"
        }} />
      )}
    </div>
  );
};

export default BeefSteakDetail; 