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
    text: "Gerçek kasap kalitesi! Marketten aldıklarımın yanından geçmez. Tavuk göğsü bile bu kadar lezzetli olur mu ya :) Teşekkür ederim!",
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
      <h1
        style={{
          textAlign: "center",
          marginTop: "3rem",
          marginBottom: "1.5rem",
          color: "var(--primary-color)",
          fontWeight: 800,
          fontSize: 36,
          letterSpacing: 1,
          textShadow: "0 2px 8px #80002022",
        }}
      >
        SİZDEN GELENLER
      </h1>
      {/* Yorum Ekleme Paneli */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          borderRadius: 14,
          boxShadow: "0 2px 12px #80002011",
          padding: "1.5rem 1.2rem 1.2rem 1.2rem",
          marginBottom: 36,
          borderLeft: "7px solid var(--primary-color)",
          width: "100%",
          maxWidth: 600,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", gap: 12 }}>
          <input
            type="text"
            name="name"
            placeholder="Adınız"
            value={form.name}
            onChange={handleChange}
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 6,
              border: "1.5px solid #8b0000",
              fontSize: 15,
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
              padding: 10,
              borderRadius: 6,
              border: "1.5px solid #8b0000",
              fontSize: 15,
            }}
          />
        </div>
        <textarea
          name="text"
          placeholder="Yorumunuz"
          value={form.text}
          onChange={handleChange}
          rows={2}
          style={{
            padding: 10,
            borderRadius: 6,
            border: "1.5px solid #8b0000",
            fontSize: 15,
            resize: "vertical",
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
        style={{
          width: "100%",
          maxWidth: 900,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 28,
        }}
      >
        {reviews.map((review, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              borderRadius: 14,
              boxShadow: "0 2px 12px #80002011",
              padding: "1.5rem 1.2rem 1.2rem 1.2rem",
              borderLeft: "7px solid var(--primary-color)",
              display: "flex",
              flexDirection: "column",
              gap: 6,
              minHeight: 120,
            }}
          >
            <div
              style={{ marginBottom: 8, display: "flex", alignItems: "center" }}
            >
              <span style={{ color: "#eab308", fontSize: 20, fontWeight: 700 }}>
                {"⭐️".repeat(review.stars)}
              </span>
              <span
                style={{
                  color: "#111",
                  marginLeft: 10,
                  fontWeight: 600,
                  fontSize: 15,
                }}
              >
                – {review.name} / {review.city}
              </span>
            </div>
            <div
              style={{
                fontSize: 17,
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
  );
};

export default UserRecipes;
