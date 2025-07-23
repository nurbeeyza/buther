import React, { useState } from "react";

const reviewsData = [
  {
    stars: 5,
    name: "Ayşe K.",
    city: "İstanbul",
    text: "Etler inanılmaz tazeydi, özellikle dana kuşbaşı yumuşacık pişti. Siparişim zamanında ve özenli paketlenmiş şekilde geldi. Kesinlikle tekrar sipariş vereceğim.",
  },
  {
    stars: 4,
    name: "Mehmet T.",
    city: "Ankara",
    text: "Genel olarak çok memnun kaldım, sucuklar gerçekten lezzetliydi. Sadece kargo biraz geç geldi ama ürün kalitesi bunu telafi etti.",
  },
  {
    stars: 5,
    name: "Elif A.",
    city: "İzmir",
    text: "Gerçek kasap kalitesi! Marketten aldıklarımın yanından geçmez. Bonfile bile bu kadar lezzetli olur mu ya :) Teşekkür ederim!",
  },
  {
    stars: 5,
    name: "Burak Y.",
    city: "Bursa",
    text: "İlk kez internetten et alıyorum diye biraz tedirgindim ama boşuna endişelenmişim. Paketleme harika, hijyenik ve güven verici.",
  },
  {
    stars: 4,
    name: "Serkan D.",
    city: "Antalya",
    text: "Ürün kalitesi gayet iyiydi ama kargo firmasından kaynaklı bir gecikme yaşadım. Yine de destek ekibi çok ilgiliydi.",
  },
  {
    stars: 5,
    name: "Zeynep H.",
    city: "Konya",
    text: "Kangal sucuğun lezzeti muazzam. Kahvaltılarda vazgeçilmezimiz oldu. Kesinlikle tavsiye ederim.",
  },
];

const UserRecipes = () => {
  const [reviews, setReviews] = useState(reviewsData);
  const [form, setForm] = useState({ name: "", city: "", text: "", stars: 5 });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleStars = (stars) => {
    setForm((prev) => ({ ...prev, stars }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.city || !form.text) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }
    setReviews([{ ...form }, ...reviews]);
    setForm({ name: "", city: "", text: "", stars: 5 });
    setError("");
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 583px) {
            .form-inputs-container {
              flex-direction: column !important;
            }
            .form-inputs-container input {
              min-width: 100% !important;
            }
          }
          
          @media (max-width: 512px) {
            .review-grid {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
            }
            .review-card {
              padding: 1rem !important;
              min-height: auto !important;
              max-width: 100% !important;
            }
            .review-text {
              font-size: 16px !important;
            }
            .review-name {
              font-size: 14px !important;
            }
            .page-container {
              padding: 1rem !important;
            }
            .form-container {
              padding: 1rem !important;
            }
          }
        `}
      </style>
      <div
        className="page-container"
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "2rem",
          background: "#f8f9fa",
          minHeight: "calc(100vh - 200px)",
        }}
      >
      <div style={{ background: '#111', color: '#fff', padding: '4rem 0', textAlign: 'center', marginBottom: '2rem', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <h1 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 800, letterSpacing: 1, textShadow: '0 2px 8px #000' }}>SİZDEN GELENLER</h1>
      </div>
      {/* Yorum Ekleme Paneli */}
      <form
        onSubmit={handleSubmit}
        className="form-container"
        style={{
          background: "#fff",
          borderRadius: 14,
          boxShadow: "0 2px 12px #80002011",
          padding: "2.5rem 2rem 2rem 2rem",
          marginBottom: 36,
          borderLeft: "7px solid var(--primary-color)",
          width: "100%",
          maxWidth: 800,
          margin: "0 auto 36px auto",
          display: "flex",
          flexDirection: "column",
          gap: 18,
          alignItems: "center",
        }}
      >
        <div style={{ 
          display: "flex", 
          gap: 16, 
          width: "100%",
          flexDirection: "row"
        }}
        className="form-inputs-container"
        >
          <input
            type="text"
            name="name"
            placeholder="Adınız"
            value={form.name}
            onChange={handleChange}
            style={{
              flex: 1,
              padding: 12,
              borderRadius: 6,
              border: "1.5px solid #8b0000",
              fontSize: 16,
            }}
          />
          <input
            type="text"
            name="city"
            placeholder="Şehir"
            value={form.city}
            onChange={handleChange}
            style={{
              flex: 1,
              padding: 12,
              borderRadius: 6,
              border: "1.5px solid #8b0000",
              fontSize: 16,
            }}
          />
        </div>
        <textarea
          name="text"
          placeholder="Yorumunuz"
          value={form.text}
          onChange={handleChange}
          rows={5}
          style={{
            padding: 14,
            borderRadius: 6,
            border: "1.5px solid #8b0000",
            fontSize: 16,
            resize: "vertical",
            minHeight: 120,
            width: "100%",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontWeight: 600, color: "#800020" }}>Puan:</span>
          {[1, 2, 3, 4, 5].map((s) => (
            <span
              key={s}
              style={{
                cursor: "pointer",
                color: s <= form.stars ? "#eab308" : "#ddd",
                fontSize: 22,
                marginRight: 2,
              }}
              onClick={() => handleStars(s)}
            >
              ⭐️
            </span>
          ))}
        </div>
        {error && (
          <div style={{ color: "#b00020", fontWeight: 600 }}>{error}</div>
        )}
        <button
          type="submit"
          style={{
            background: "var(--primary-color)",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "10px 0",
            fontWeight: 700,
            fontSize: 16,
            cursor: "pointer",
            marginTop: 6,
            letterSpacing: 1,
            boxShadow: "0 2px 8px #80002022",
            transition: "background 0.2s",
          }}
        >
          Yorum Ekle
        </button>
      </form>
      {/* Yorumlar Grid */}
      <div
        className="review-grid"
        style={{
          width: "100%",
          maxWidth: 1200,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: 36,
          margin: "0 auto",
          justifyItems: "center",
        }}
      >
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="review-card"
            style={{
              background: "#fff",
              borderRadius: 18,
              boxShadow: "0 2px 12px #80002011",
              padding: "2.2rem 2rem 2rem 2rem",
              borderLeft: "7px solid var(--primary-color)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              minHeight: 180,
              width: "100%",
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            <div
              style={{ marginBottom: 14, display: "flex", alignItems: "center" }}
            >
              <span style={{ color: "#eab308", fontSize: 28, fontWeight: 700 }}>
                {"⭐️".repeat(review.stars)}
              </span>
              <span
                className="review-name"
                style={{
                  color: "#111",
                  marginLeft: 16,
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                – {review.name} / {review.city}
              </span>
            </div>
            <div
              className="review-text"
              style={{
                fontSize: 22,
                color: "#222",
                fontStyle: "italic",
                lineHeight: 1.7,
              }}
            >
              "{review.text}"
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default UserRecipes;
