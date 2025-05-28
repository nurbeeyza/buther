import React from "react";
import { Link } from "react-router-dom";

const Sucuk = () => {
  console.log("Sucuk component loaded!");
  
  const products = [
    {
      id: 1,
      name: "Baton Sucuk",
      price: "350,00₺",
      weight: "350 gr/paket",
      image: "/images/et_resimler/baton_sucuk.png",
      description: "Geleneksel baton sucuk, özel baharatlarla hazırlanmıştır."
    },
    {
      id: 2,
      name: "Baton Sucuk",
      price: "1.000,00₺",
      weight: "kg",
      image: "/images/et_resimler/baton_kgsucuk.png",
      description: "Kilogram olarak satılan baton sucuk, toplu alım için ideal."
    },
    {
      id: 3,
      name: "Baton Sucuk (Hellim peyniri, Antep fıstıklı)",
      price: "1.350,00₺",
      weight: "kg",
      image: "/images/et_resimler/baton_sucuk_hellimpeynir.png",
      description: "Hellim peyniri ve Antep fıstığı ile zenginleştirilmiş özel baton sucuk."
    },
    {
      id: 4,
      name: "Dilimli Sucuk",
      price: "300,00₺",
      weight: "500 gr/paket",
      image: "/images/et_resimler/dilim_sucuk.png",
      description: "Pratik kullanım için hazır dilimlenmiş sucuk."
    },
    {
      id: 5,
      name: "Kangal Sucuk",
      price: "550,00₺",
      weight: "kg",
      image: "/images/et_resimler/kangal_sucuk.png",
      description: "Geleneksel kangal şeklinde sucuk, özel lezzet."
    },
    {
      id: 6,
      name: "Osmanlı Sucuğu",
      price: "1.200,00₺",
      weight: "kg",
      image: "/images/et_resimler/osmanlı_sucugu.png",
      description: "Osmanlı geleneğinden gelen özel tarif sucuk."
    }
  ];

  return (
    <div style={{
      maxWidth: 1200,
      margin: "0 auto",
      padding: "2rem",
      background: "var(--white)",
      minHeight: "calc(100vh - 200px)"
    }}>
      <h1 style={{
        textAlign: "center",
        color: "var(--primary-color)",
        marginBottom: "3rem",
        marginTop: "2rem",
        fontSize: "2.5rem",
        fontWeight: 800,
        letterSpacing: 1,
        textShadow: "0 2px 8px #80002022"
      }}>
        SUCUK
      </h1>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem"
      }}>
        {products.map((product) => (
          <Link 
            key={product.id}
            to={`/products/sucuk/${product.id}`}
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
                    color: "#888",
                    fontSize: 12,
                    margin: "0 0 0.5rem 0",
                    fontWeight: 600
                  }}>
                    {product.weight}
                  </p>
                  
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
    </div>
  );
};

export default Sucuk; 