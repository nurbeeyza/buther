import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const BeefSteakDetail = () => {
  const { id } = useParams();

  const [magnifier, setMagnifier] = useState({
    isVisible: false,
    x: 0,
    y: 0,
    backgroundPosition: "0% 0%",
  });

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
      name: "Dana Antrikot",
      price: "800,00₺",
      weight: "250-350g",
      image: "/images/et_resimler/dana_antrikot.png",
      description:
        "Dana antrikot, yumuşak dokusu ve yoğun aromasıyla steak severlerin favorisi. Doğal yağ damarları sayesinde pişerken lezzetini korur. Izgara ve tavada kısa sürede pişirilerek sulu ve nefis bir sonuç elde edilir.",
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
    3: {
      name: "Dana Asado",
      price: "800,00₺",
      weight: "400-500g",
      image: "/images/et_resimler/dana_asado.png",
      description:
        "Arjantin usulü kalın kesim dana asado, mangal ve fırın yemekleri için mükemmel bir seçimdir. Uzun ve yavaş pişirme ile etin tüm lezzeti ortaya çıkar.",
      detailedDescription:
        "Dana Asado, Arjantin mutfağından gelen özel bir kesim tekniğidir. Kalın kesilmiş bu et parçası, uzun ve yavaş pişirme için idealdir. Mangalda veya fırında düşük ısıda pişirilerek yumuşacık ve sulu bir sonuç elde edilir. Baharatlarla marine edilip, közlenmiş sebzelerle servis edilebilir.",
      features: [
        "Kalın kesim özel teknik",
        "Mangal için ideal",
        "Uzun pişirme süresi",
        "Sosyal yemekler için mükemmel",
        "Yoğun et lezzeti",
        "Geleneksel Arjantin kesimi",
      ],
      cookingTips: [
        "Düşük ateşte uzun süre pişirin",
        "Sürekli çevirmeyin",
        "Tuzlama işlemini erkenden yapın",
        "Mangal közü ideal",
        "Sabırlı olun, acele etmeyin",
      ],
      nutritionalInfo: {
        protein: "28g",
        fat: "18g",
        calories: "280 kcal",
        iron: "3.0mg",
      },
      origin: "Yerli Dana",
      storage: "0-4°C'de muhafaza edin, 2-3 gün içinde tüketin",
    },
    4: {
      name: "Dana Bonfile",
      price: "950,00₺",
      weight: "200-300g",
      image: "/images/et_resimler/dana_bonfile.png",
      description:
        "Dana bonfile, en yumuşak ve değerli et parçasıdır. İnce dilimlenip kısa sürede pişirilerek, ağızda dağılan bir lezzet sunar. Fine dining restoranlarının vazgeçilmezidir.",
      detailedDescription:
        "Dana bonfile, dana etinin en değerli ve yumuşak bölümüdür. Hayvanın en az çalışan kasından alınan bu özel kesim, eşsiz yumuşaklığı ve lezzeti ile fine dining restoranlarının favorisidir. Minimal yağ oranı ve maksimum protein içeriği ile sağlıklı beslenmenin de vazgeçilmezidir. Yüksek ateşte hızlıca mühürlenip, içi pembe kalacak şekilde pişirilir.",
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
    5: {
      name: "Dana Kemikli Kaburga",
      price: "700,00₺",
      weight: "500-600g",
      image: "/images/et_resimler/dana_kemiklikaburga.png",
      description:
        "Lezzetli dana kemikli kaburga, uzun pişirme için ideal. Kemik iliği ve bağ dokularıyla zengin bir aroma sunar.",
      detailedDescription:
        "Dana kemikli kaburga, geleneksel Türk mutfağının vazgeçilmez lezzetlerinden biridir. Kemik içindeki ilik ve et arasındaki bağ dokular, uzun pişirme sürecinde eşsiz bir lezzet ve aroma oluşturur. Haşlama, güveç ve fırın yemekleri için mükemmeldir. Düşük ısıda uzun süre pişirilerek, etin kemiğinden kolayca ayrılması sağlanır.",
      features: [
        "Kemik iliği ile zengin lezzet",
        "Uzun pişirme için ideal",
        "Geleneksel Türk mutfağı",
        "Kolajen açısından zengin",
        "Güveç ve haşlama için mükemmel",
        "Besleyici kemik iliği",
      ],
      cookingTips: [
        "Uzun süre haşlayın",
        "Düşük ateşte pişirin",
        "Sebzelerle birlikte pişirin",
        "Baharatları bol kullanın",
        "Sabırlı olun, acele etmeyin",
      ],
      nutritionalInfo: {
        protein: "22g",
        fat: "20g",
        calories: "300 kcal",
        iron: "3.5mg",
      },
      origin: "Yerli Dana",
      storage: "0-4°C'de muhafaza edin, 2-3 gün içinde tüketin",
    },
    6: {
      name: "Dana Pirzola",
      price: "900,00₺",
      weight: "300-400g",
      image: "/images/et_resimler/dana_pirzola.png",
      description:
        "Dana pirzola, kemikli özel kesimiyle ızgara ve tavada pişirme için idealdir. Kemikten gelen lezzet ve yumuşak dokusuyla sofraların yıldızı.",
      detailedDescription:
        "Dana pirzola, kaburga kemiği ile birlikte kesilmiş özel bir dana eti kesimidir. Kemik sayesinde pişirme sırasında ete özel bir lezzet katar. Izgara ve tavada pişirme için ideal olan pirzola, hem pratik hem de lezzetli bir seçenektir. Orta kalınlıkta kesilip, yüksek ateşte mühürlenerek pişirilir.",
      features: [
        "Kemikli özel kesim",
        "Izgara için ideal",
        "Pratik pişirme",
        "Kemikten gelen lezzet",
        "Orta kalınlık",
        "Hızlı hazırlık",
      ],
      cookingTips: [
        "Orta-yüksek ateşte pişirin",
        "Her tarafı 4-5 dakika",
        "Kemik tarafını son çevirin",
        "Dinlendirme süresi 3 dakika",
        "Limon ile servis edin",
      ],
      nutritionalInfo: {
        protein: "25g",
        fat: "14g",
        calories: "240 kcal",
        iron: "2.6mg",
      },
      origin: "Yerli Dana",
      storage: "0-4°C'de muhafaza edin, 2-3 gün içinde tüketin",
    },
    7: {
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
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>
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
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>
              Besin Değerleri (100g)
            </h3>
            <div
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
                  style={{ fontWeight: "bold", color: "var(--primary-color)" }}
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
                  style={{ fontWeight: "bold", color: "var(--primary-color)" }}
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
                  style={{ fontWeight: "bold", color: "var(--primary-color)" }}
                >
                  Kalori
                </div>
                <div>
                  {product.nutritionalInfo && product.nutritionalInfo.calories}
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
                  style={{ fontWeight: "bold", color: "var(--primary-color)" }}
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
            to="/products/beef-steak"
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
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 16px #80002044";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 12px #80002033";
            }}
          >
            ← Beef Steak Ürünlerine Dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeefSteakDetail;
