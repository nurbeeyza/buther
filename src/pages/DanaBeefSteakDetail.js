import React from "react";
import { useParams, Link } from "react-router-dom";

const products = {
  1: {
    name: "Dallas Steak",
    price: "950,00₺",
    weight: "300-400g",
    image: "/images/et_resimler/dallas_steak.png",
    description:
      "Dallas Steak, Amerika'nın en ünlü steaklerinden biridir. Özel olarak seçilmiş dana etinin en kaliteli bölümünden elde edilir. Yumuşaklığı ve yoğun lezzetiyle öne çıkar. Dallas Steak, yüksek ateşte mühürlenip kısa sürede pişirilerek sulu ve aromatik bir sonuç elde edilir. Genellikle deniz tuzu ve taze çekilmiş karabiber ile sade şekilde servis edilir. Yanında közlenmiş sebzeler ve patates püresiyle mükemmel bir uyum sağlar. Etin doğal aroması ve dokusu, steak severler için unutulmaz bir deneyim sunar.",
    detailedDescription:
      "Dallas Steak, Amerika'nın en ünlü steak çeşitlerinden biridir. Özel olarak seçilmiş dana etinin en kaliteli bölümlerinden elde edilen bu steak, yumuşaklığı ve lezzeti ile ünlüdür. Uzman kasaplarımız tarafından özenle kesilir ve özel marinasyon işleminden geçirilir. Dallas Steak, yüksek ateşte kısa sürede mühürlenerek pişirilir ve içi sulu kalır. Etin doğal aroması ve dokusu korunur. Genellikle deniz tuzu ve taze çekilmiş karabiber ile sade şekilde servis edilir. Yanında közlenmiş sebzeler, patates püresi veya taze salata ile sunulabilir. Steak severler için unutulmaz bir lezzet deneyimi sunar.",
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
      iron: "2.5mg",
    },
    origin: "Yerli Dana",
    storage: "0-4°C'de muhafaza edin, 2-3 gün içinde tüketin",
  },
  2: {
    name: "T-Bone Steak",
    price: "950,00₺",
    weight: "400-500g",
    image: "/images/et_resimler/t-bonesteak.png",
    description:
      "T-Bone steak, hem bonfile hem kontrfileyi bir arada sunan, büyük porsiyonlu ve doyurucu bir steak çeşididir. Amerikan mutfağının klasiği.",
    detailedDescription:
      "T-Bone steak, dünya mutfağının en ünlü steak çeşitlerinden biridir. T şeklindeki kemiğin bir tarafında bonfile, diğer tarafında kontrfile bulunur. Bu sayede iki farklı et dokusunu aynı anda tadabilirsiniz. Amerikan mutfağının klasik temsilcisidir. Kalın kesimiyle yüksek ateşte mühürlenip, orta-az pişmiş olarak servis edilir.",
    features: [
      "İki farklı et dokusu",
      "Bonfile + Kontrfile",
      "T şeklinde kemik",
      "Amerikan klasiği",
      "Premium steak deneyimi",
      "Büyük porsiyon",
    ],
    cookingTips: [
      "Yüksek ateşte başlayın",
      "Bonfile tarafı daha hızlı pişer",
      "Kemiği referans alın",
      "Medium-rare ideal",
      "Kalın kesim avantajı",
    ],
    nutritionalInfo: {
      protein: "28g",
      fat: "16g",
      calories: "270 kcal",
      iron: "3.2mg",
    },
    origin: "Yerli Dana",
    storage: "0-4°C'de muhafaza edin, 2-3 gün içinde tüketin",
  },
  3: {
    name: "New York Steak",
    price: "900,00₺",
    weight: "300-400g",
    image: "/images/et_resimler/newyorksteak.png",
    description:
      "Amerikan klasiği New York steak, mükemmel marbling yapısı ve yoğun lezzetiyle steak severlerin favorisi. Izgara ve tavada pişirme için idealdir.",
    detailedDescription:
      "New York Steak, Amerika'nın en ünlü steak çeşitlerinden biridir. Sığır etinin sırt bölümünden alınan bu özel kesim, mükemmel marbling (yağ damarları) yapısı sayesinde pişirme sırasında kendiliğinden yumuşar ve eşsiz bir lezzet sunar. Orta kalınlıkta kesilip, yüksek ateşte mühürlenerek pişirilir. New York'un ünlü steakhouse'larının vazgeçilmez lezzetidir.",
    features: [
      "Mükemmel marbling yapısı",
      "Amerikan klasiği",
      "Orta kalınlık kesim",
      "Izgara için ideal",
      "Yoğun et aroması",
      "Premium steak deneyimi",
    ],
    cookingTips: [
      "Yüksek ateşte mühürleyin",
      "Her tarafı 4-5 dakika",
      "Medium-rare ideal pişirme",
      "Dinlendirme süresi 5 dakika",
      "Sadece tuz ve karabiber yeterli",
    ],
    nutritionalInfo: {
      protein: "26g",
      fat: "14g",
      calories: "240 kcal",
      iron: "2.8mg",
    },
    origin: "Yerli Dana",
    storage: "0-4°C'de muhafaza edin, 2-3 gün içinde tüketin",
  },
  4: {
    name: "Toma Hawk Steak",
    price: "1000,00₺",
    weight: "800-1200g",
    image: "/images/et_resimler/tomahawk.png",
    description:
      "Premium Toma Hawk steak, özel kesim ve kalın dilim. Uzun kemikli, etkileyici görünümlü bu steak çeşidi, sosyal yemeklerin yıldızıdır.",
    detailedDescription:
      "Toma Hawk Steak, dünya mutfağının en etkileyici steak çeşitlerinden biridir. Uzun kaburga kemiği ile birlikte kesilmiş bu özel steak, hem görsel hem de lezzet açısından benzersizdir. Kemik sayesinde pişirme sırasında ete özel bir aroma katar. Kalın kesimi ve büyük porsiyonu ile sosyal yemeklerin vazgeçilmezidir. Yüksek ateşte mühürlenip, düşük ısıda yavaşça pişirilerek mükemmel sonuç elde edilir.",
    features: [
      "Uzun kemikli özel kesim",
      "Etkileyici görünüm",
      "Sosyal yemekler için ideal",
      "Kalın kesim premium et",
      "Kemikten gelen aroma",
      "Büyük porsiyon",
    ],
    cookingTips: [
      "Yüksek ateşte mühürleyin",
      "Düşük ısıda yavaş pişirin",
      "Kemiği referans alın",
      "Medium-rare ideal",
      "Dinlendirme süresi 10 dakika",
    ],
    nutritionalInfo: {
      protein: "32g",
      fat: "20g",
      calories: "320 kcal",
      iron: "3.5mg",
    },
    origin: "Yerli Dana",
    storage: "0-4°C'de muhafaza edin, 2-3 gün içinde tüketin",
  },
  5: {
    name: "Bonfile",
    price: "950,00₺",
    weight: "200-300g",
    image: "/images/et_resimler/dana_bonfile.png",
    description:
      "En kaliteli dana bonfile, yumuşaklığı ile ünlü premium et. Fine dining restoranlarının vazgeçilmez lezzeti.",
    detailedDescription:
      "Dana bonfile, dana etinin en değerli ve yumuşak bölümüdür. Hayvanın en az çalışan kasından alınan bu özel kesim, eşsiz yumuşaklığı ve lezzeti ile fine dining restoranlarının favorisidir. Minimal yağ oranı ve maksimum protein içeriği ile sağlıklı beslenmenin de vazgeçilmezidir. Yüksek ateşte hızlıca mühürlenip, içi pembe kalacak şekilde pişirilir. Ağızda dağılan dokusu ile unutulmaz bir lezzet deneyimi sunar.",
    features: [
      "En yumuşak et dokusu",
      "Minimal yağ oranı",
      "Premium kalite",
      "Fine dining standardı",
      "Hızlı pişirme",
      "Maksimum protein",
    ],
    cookingTips: [
      "Yüksek ateşte hızlı pişirin",
      "İç kısım pembe kalmalı",
      "Aşırı pişirmeyin",
      "Sadece tuz ve karabiber yeterli",
      "2-3 dakika her taraf",
    ],
    nutritionalInfo: {
      protein: "30g",
      fat: "8g",
      calories: "200 kcal",
      iron: "2.8mg",
    },
    origin: "Yerli Dana",
    storage: "0-4°C'de muhafaza edin, 2-3 gün içinde tüketin",
  },
  6: {
    name: "Antrikot",
    price: "800,00₺",
    weight: "250-350g",
    image: "/images/et_resimler/dana_antrikot.png",
    description:
      "Yumuşacık dana antrikot, ızgara ve tavada pişirme için ideal. Doğal yağ damarları sayesinde pişerken lezzetini korur.",
    detailedDescription:
      "Dana antrikot, dana etinin en lezzetli ve yumuşak bölümlerinden biridir. Kaburga kemiği çevresinden alınan bu özel kesim, marbling (yağ damarları) yapısı sayesinde pişirme sırasında kendiliğinden yumuşar ve eşsiz bir lezzet sunar. Orta ateşte pişirilip, dinlendirildikten sonra dilimlenerek servis edilir. Yanında taze roka ve parmesan ile harika bir uyum yakalar.",
    features: [
      "Doğal marbling yapısı",
      "Yumuşak et dokusu",
      "Yoğun et aroması",
      "Kolay pişirme",
      "Yüksek protein değeri",
      "Omega-3 açısından zengin",
    ],
    cookingTips: [
      "Orta ateşte pişirin",
      "Her iki tarafı 3-4 dakika",
      "Fazla çevirmeyin",
      "Baharatları pişirmeden önce ekleyin",
      "Dinlendirme süresi önemli",
    ],
    nutritionalInfo: {
      protein: "24g",
      fat: "12g",
      calories: "220 kcal",
      iron: "2.2mg",
    },
    origin: "Yerli Dana",
    storage: "0-4°C'de muhafaza edin, 2-3 gün içinde tüketin",
  },
  7: {
    name: "Kontrfile",
    price: "800,00₺",
    weight: "250-350g",
    image: "/images/et_resimler/dana_kontrfile.png",
    description:
      "Premium dana kontrfile, steak ve ızgara için mükemmel seçim. Yumuşak dokusu ve yoğun lezzetiyle steak severlerin favorisi.",
    detailedDescription:
      "Dana kontrfile, dana etinin en kaliteli bölümlerinden biridir. Sığır etinin sırt bölümünden alınan bu özel kesim, yumuşak dokusu ve yoğun lezzeti ile steak severlerin favorisidir. Orta kalınlıkta kesilip, yüksek ateşte mühürlenerek pişirilir. Izgara ve tavada pişirme için ideal olan kontrfile, hem pratik hem de lezzetli bir seçenektir.",
    features: [
      "Yumuşak et dokusu",
      "Yoğun et aroması",
      "Premium kalite",
      "Izgara için ideal",
      "Orta kalınlık kesim",
      "Hızlı pişirme",
    ],
    cookingTips: [
      "Yüksek ateşte mühürleyin",
      "Her tarafı 4-5 dakika",
      "Medium-rare ideal",
      "Dinlendirme süresi 5 dakika",
      "Sadece tuz ve karabiber yeterli",
    ],
    nutritionalInfo: {
      protein: "26g",
      fat: "14g",
      calories: "240 kcal",
      iron: "2.6mg",
    },
    origin: "Yerli Dana",
    storage: "0-4°C'de muhafaza edin, 2-3 gün içinde tüketin",
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
    <>
      <style>
        {`
          @media (max-width: 700px) {
            .detail-container {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            .product-image {
              max-width: 80% !important;
              margin: 0 auto !important;
              display: block !important;
            }
            .product-info {
              order: 2 !important;
            }
            .cooking-nutrition {
              order: 3 !important;
              margin-top: 2rem !important;
            }
            .nutrition-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            .detail-page {
              padding: 1rem !important;
            }
          }
        `}
      </style>
      <div
        className="detail-page"
        style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}
      >
        <div
          className="detail-container"
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
              className="product-image"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </div>

          {/* Sağ taraf - Ürün bilgileri */}
          <div className="product-info">
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
              <h3
                style={{ color: "var(--primary-color)", marginBottom: "1rem" }}
              >
                Özellikler
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {product.features &&
                  product.features.map((feature, index) => (
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
            <div className="cooking-nutrition" style={{ marginBottom: "2rem" }}>
              <h3
                style={{ color: "var(--primary-color)", marginBottom: "1rem" }}
              >
                Pişirme Önerileri
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {product.cookingTips &&
                  product.cookingTips.map((tip, index) => (
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
            <div className="cooking-nutrition" style={{ marginBottom: "2rem" }}>
              <h3
                style={{ color: "var(--primary-color)", marginBottom: "1rem" }}
              >
                Besin Değerleri (100g)
              </h3>
              <div
                className="nutrition-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
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
                    style={{
                      fontWeight: "bold",
                      color: "var(--primary-color)",
                    }}
                  >
                    Protein
                  </div>
                  <div>
                    {product.nutritionalInfo && product.nutritionalInfo.protein}
                  </div>
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
                    style={{
                      fontWeight: "bold",
                      color: "var(--primary-color)",
                    }}
                  >
                    Yağ
                  </div>
                  <div>
                    {product.nutritionalInfo && product.nutritionalInfo.fat}
                  </div>
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
                    style={{
                      fontWeight: "bold",
                      color: "var(--primary-color)",
                    }}
                  >
                    Kalori
                  </div>
                  <div>
                    {product.nutritionalInfo &&
                      product.nutritionalInfo.calories}
                  </div>
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
                    style={{
                      fontWeight: "bold",
                      color: "var(--primary-color)",
                    }}
                  >
                    Demir
                  </div>
                  <div>
                    {product.nutritionalInfo && product.nutritionalInfo.iron}
                  </div>
                </div>
              </div>
            </div>

            {/* Menşei ve Saklama */}
            <div style={{ marginBottom: "2rem" }}>
              <div>
                <strong>Menşei:</strong> {product.origin}
              </div>
              <div>
                <strong>Saklama:</strong> {product.storage}
              </div>
            </div>

            {/* Geri dön butonu */}
            <Link
              to="/products?category=dana-beef-steak"
              style={{
                display: "inline-block",
                background:
                  "linear-gradient(135deg, var(--primary-color), var(--dark-red))",
                color: "white",
                padding: "1rem 2rem",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 600,
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px #80002033",
                marginTop: "1rem",
              }}
              onClick={() => {
                // Ensure scroll to top when navigating back
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 100);
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
              ← Dana Beef's Steak Ürünlerine Dön
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DanaBeefSteakDetail;
