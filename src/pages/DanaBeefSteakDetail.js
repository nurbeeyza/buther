import React from "react";
import { useParams, Link } from "react-router-dom";

const DanaBeefSteakDetail = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1
          style={{
            color: "var(--primary-color)",
            fontSize: "2.5rem",
            fontWeight: 800,
            marginBottom: "1rem",
          }}
        >
          DANA BEEF'S STEAK - ÜRÜN DETAYI
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#666",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Ürün ID: {id}
        </p>
        <p
          style={{
            fontSize: "1rem",
            color: "#888",
            marginTop: "1rem",
          }}
        >
          Bu ürünün detay sayfası yakında eklenecek.
        </p>
        <Link
          to="/products/dana-beef-steak"
          style={{
            display: "inline-block",
            marginTop: "2rem",
            padding: "1rem 2rem",
            background: "var(--primary-color)",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "600",
          }}
        >
          DANA BEEF'S STEAK'a Geri Dön
        </Link>
      </div>
    </div>
  );
};

export default DanaBeefSteakDetail; 