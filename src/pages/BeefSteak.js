import React from "react";
import { Link } from "react-router-dom";

const BeefSteak = () => {
  console.log("BeefSteak component loaded!");
  
  const products = [
    {
      id: 1,
      name: "Dallas Steak",
      price: "950,00₺",
      image: "/images/et_resimler/dallas_steak.png",
      description: "Premium kalite Dallas steak, özel kesim ve marinasyon ile hazırlanmıştır."
    },
    {
      id: 2,
      name: "Dana Antrikot",
      price: "800,00₺",
      image: "/images/et_resimler/dana_antrikot.png",
      description: "Yumuşacık dana antrikot, ızgara ve tavada pişirme için ideal."
    },
    {
      id: 3,
      name: "Dana Asado",
      price: "800,00₺",
      image: "/images/et_resimler/dana_asado.png",
      description: "Özel kesim dana asado, mangal ve ızgara için mükemmel seçim."
    },
    {
      id: 4,
      name: "Dana Bonfile",
      price: "950,00₺",
      image: "/images/et_resimler/dana_bonfile.png",
      description: "En kaliteli dana bonfile, yumuşaklığı ile ünlü premium et."
    },
    {
      id: 5,
      name: "Dana Kemikli Kaburga",
      price: "700,00₺",
      image: "/images/et_resimler/dana_kemiklikaburga.png",
      description: "Lezzetli dana kemikli kaburga, uzun pişirme için ideal."
    },
    {
      id: 6,
      name: "Dana Pirzola",
      price: "900,00₺",
      image: "/images/et_resimler/dana_pirzola.png",
      description: "Taze dana pirzola, ızgara ve tavada pişirme için mükemmel."
    },
    {
      id: 7,
      name: "T-Bone Steak",
      price: "950,00₺",
      image: "/images/et_resimler/t-bonesteak.png",
      description: "Klasik T-Bone steak, hem bonfile hem kontrfile bir arada."
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
        BEEF'S STEAK
      </h1>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem"
      }}>
        {products.map((product) => (
          <Link 
            key={product.id}
            to={`/products/beef-steak/${product.id}`}
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
                    transition: "transform 0.3s ease",
                    transform: product.name === "Dana Bonfile" ? "none" : "scaleX(1.3)"
                  }}
                  onMouseEnter={(e) => {
                    const baseTransform = product.name === "Dana Bonfile" ? "scale(1.05)" : "scaleX(1.3) scale(1.05)";
                    e.target.style.transform = baseTransform;
                  }}
                  onMouseLeave={(e) => {
                    const baseTransform = product.name === "Dana Bonfile" ? "scale(1)" : "scaleX(1.3)";
                    e.target.style.transform = baseTransform;
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
    </div>
  );
};

export default BeefSteak; 