import React from "react";
import { Link, useNavigate } from "react-router-dom";

const IslenmisUrunGrubu = () => {
  console.log("IslenmisUrunGrubu component loaded!");
  
  const products = [
    {
      id: 1,
      name: "Dana Köfte",
      price: "440,00₺",
      weight: "400 gr/paket",
      image: "/images/et_resimler/kasap_köfte.png",
      description: "Geleneksel dana köfte, özel baharatlarla hazırlanmıştır."
    },
    {
      id: 2,
      name: "Dana Hamburger Köfte",
      price: "640,00₺",
      weight: "4x110 gr/paket",
      image: "/images/et_resimler/steak_burger.png",
      description: "Premium dana hamburger köftesi, hamburger için ideal."
    },
    {
      id: 3,
      name: "Görye İnegöl Köfte",
      price: "560,00₺",
      weight: "400 gr/paket",
      image: "/images/et_resimler/görye_köfte.png",
      description: "Geleneksel İnegöl köftesi, özel baharatlarla hazırlanmıştır."
    },
    {
      id: 4,
      name: "Görye Kangal Sucuk",
      price: "550,00₺",
      weight: "350 gr/paket",
      image: "/images/et_resimler/kangal_sucuk.png",
      description: "Geleneksel yöntemlerle hazırlanmış, baharatlı ve lezzetli kangal sucuk. Kahvaltı ve yemekleriniz için ideal."
    }
  ];

  const navigate = useNavigate();

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
          İŞLENMİŞ ÜRÜN GRUBU
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
          Özenle hazırlanmış işlenmiş et ürünlerimiz ile pratik ve lezzetli yemekler.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
        }}
      >
        {products.map((product) => (
          <Link 
            key={product.id}
            to={`/products/islenmis-urun-grubu/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <div style={{
              background: "#fff",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 4px 16px #80002011",
              transition: "all 0.3s ease",
              position: "relative",
              cursor: "pointer",
              borderLeft: "6px solid var(--primary-color)",
              height: "420px",
              display: "flex",
              flexDirection: "column"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 8px 24px #80002022";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 16px #80002011";
            }}>
              
              {/* Resim Alanı */}
              <div style={{
                position: "relative",
                width: "100%",
                height: 180,
                overflow: "hidden",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f8f9fa"
              }}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={{
                    maxWidth: "90%",
                    maxHeight: "90%",
                    objectFit: "contain",
                    transition: "transform 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                />
                
                {/* Fiyat Etiketi */}
                <div style={{
                  position: "absolute",
                  top: 15,
                  right: 15,
                  background: "linear-gradient(135deg, var(--primary-color), var(--dark-red))",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: 20,
                  fontWeight: 700,
                  fontSize: 16,
                  boxShadow: "0 4px 12px #80002033",
                  transform: "rotate(3deg)"
                }}>
                  {product.price}
                </div>
              </div>
              
              {/* İçerik Alanı */}
              <div style={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                flex: 1,
                justifyContent: "space-between"
              }}>
                <div>
                  <h3 style={{
                    color: "var(--primary-color)",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: 1.3,
                    marginBottom: "0.5rem"
                  }}>
                    {product.name}
                  </h3>
                  
                  <p style={{
                    color: "#666",
                    fontSize: 14,
                    lineHeight: 1.5,
                    margin: 0
                  }}>
                    {product.description}
                  </p>
                </div>
                
                <div style={{
                  marginTop: 12,
                  padding: "8px 16px",
                  background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
                  borderRadius: 8,
                  textAlign: "center",
                  color: "var(--primary-color)",
                  fontWeight: 600,
                  fontSize: 14,
                  border: "1px solid #dee2e6"
                }}>
                  Detayları Görüntüle
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
        <button
          onClick={() => navigate('/#urunlerimiz')}
          style={{
            background: "var(--primary-color)",
            color: "white",
            border: "none",
            borderRadius: 8,
            padding: "0.7rem 2rem",
            fontWeight: 700,
            fontSize: 16,
            cursor: "pointer",
            boxShadow: "0 2px 8px #80002022",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => e.target.style.background = "#a0002a"}
          onMouseLeave={e => e.target.style.background = "var(--primary-color)"}
        >
          Kategorilere Dön
        </button>
      </div>
    </div>
  );
};

export default IslenmisUrunGrubu; 