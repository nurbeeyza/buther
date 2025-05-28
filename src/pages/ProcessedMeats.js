import React from "react";
import { Link } from "react-router-dom";

const ProcessedMeats = () => {
  console.log("ProcessedMeats component loaded!");
  
  const products = [
    {
      id: 1,
      name: "Avcı Sosis",
      price: "1.200,00₺",
      weight: "1 kg",
      image: "/images/et_resimler/avci_sosis.png",
      description: "Geleneksel lezzetimiz avcı sosis, özel baharatlarla hazırlanmıştır."
    },
    {
      id: 2,
      name: "Dana İsli Et",
      price: "120,00₺",
      weight: "80 gr/paket",
      image: "/images/et_resimler/dana_isli_et.png",
      description: "Özel isleme tekniği ile hazırlanan dana isli et."
    },
    {
      id: 3,
      name: "Et Çubuğu",
      price: "300,00₺",
      weight: "200 gr/paket",
      image: "/images/et_resimler/et_cubugu.png",
      description: "Pratik ve lezzetli et çubuğu, atıştırmalık için ideal."
    },
    {
      id: 4,
      name: "Lukanka",
      price: "400,00₺",
      weight: "300 gr/paket",
      image: "/images/et_resimler/lukanka.png",
      description: "Geleneksel Balkan lezzeti lukanka, özel baharatlarla."
    },
    {
      id: 5,
      name: "Merguez",
      price: "250,00₺",
      weight: "180 gr/paket",
      image: "/images/et_resimler/merguez.png",
      description: "Baharatlı ve lezzetli merguez sosis, mangal için perfect."
    },
    {
      id: 6,
      name: "Rozbif",
      price: "250,00₺",
      weight: "200 gr/paket",
      image: "/images/et_resimler/rozbif.png",
      description: "Yumuşak ve lezzetli rozbif, sandviç ve salata için ideal."
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
        İŞLENMİŞ ETLER
      </h1>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem"
      }}>
        {products.map((product) => (
          <Link 
            key={product.id}
            to={`/products/processed-meats/${product.id}`}
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

export default ProcessedMeats; 