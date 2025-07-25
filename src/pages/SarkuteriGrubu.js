import React from "react";
import { Link } from "react-router-dom";

const SarkuteriGrubu = () => {
  console.log("SarkuteriGrubu component loaded!");
  
  const products = [
    {
      id: 1,
      name: "Dana Bacon",
      price: "1130,00₺",
      weight: "100 gr/paket",
      image: "/images/et_resimler/dana_bacon.png",
      description: "Taze dana bacon, kahvaltılarınıza lezzet katacak."
    },
    {
      id: 2,
      name: "Dana Jambon",
      price: "980,00₺",
      weight: "100 gr/paket",
      image: "/images/et_resimler/dana_jambon.png",
      description: "Premium dana jambon, sandviç ve kahvaltı için ideal."
    },
    {
      id: 3,
      name: "Dana Kavurma",
      price: "1020,00₺",
      weight: "100 gr/paket",
      image: "/images/et_resimler/dana_kavurma.png",
      description: "Geleneksel dana kavurma, kahvaltıların vazgeçilmezi."
    },
    {
      id: 4,
      name: "Dana Salam",
      price: "900,00₺",
      weight: "100 gr/paket",
      image: "/images/et_resimler/dana_salam.png",
      description: "Taze dana salam, çeşitli yemekler için mükemmel."
    },
    {
      id: 5,
      name: "Dana İsli Et",
      price: "1530,00₺",
      weight: "80 gr/paket",
      image: "/images/et_resimler/dana_isli_et.png",
      description: "Özel baharatlarla hazırlanmış dana isli et."
    },
    {
      id: 6,
      name: "Dana Roast Beef",
      price: "1450,00₺",
      weight: "200 gr/paket",
      image: "/images/et_resimler/rozbif.png",
      description: "Geleneksel dana rozbif, özel kesim ve hazırlama."
    },
    {
      id: 7,
      name: "Dana Kekikli Roast Beef",
      price: "1450,00₺",
      weight: "200 gr/paket",
      image: "/images/et_resimler/roastbeef-kekikli-2.png",
      description: "Kekikli dana rozbif, özel aroması ile fark yaratır."
    },
    {
      id: 8,
      name: "Dana Karabiberli Roast Beef",
      price: "1450,00₺",
      weight: "200 gr/paket",
      image: "/images/et_resimler/danakarabiberliroastbeef.jpg",
      description: "Karabiberli dana rozbif, özel aroması ile fark yaratır."
    },
    {
      id: 9,
      name: "Dana Antrikot Pastırma",
      price: "1510,00₺",
      weight: "250 gr/paket",
      image: "/images/et_resimler/danaantrikotpastırma.png",
      description: "Premium dana antrikot pastırma, geleneksel lezzet."
    },
    {
      id: 10,
      name: "Dana Kontrafile Pastırma",
      price: "1460,00₺",
      weight: "250 gr/paket",
      image: "/images/et_resimler/250gr-dana-kontrafile-pastirma-95fa24.png",
      description: "Özel kesim dana kontrfile pastırma."
    },
    {
      id: 11,
      name: "Dana Seçme Pastırma",
      price: "1310,00₺",
      weight: "250 gr/paket",
      image: "/images/et_resimler/danaseçmepastırma.png",
      description: "En kaliteli dana seçme pastırma."
    },
    {
      id: 12,
      name: "Dana İspanyol Salam",
      price: "940,00₺",
      weight: "100 gr/paket",
      image: "/images/et_resimler/ispanyolsalam.png",
      description: "İspanyol usulü dana salam, özel baharatlarla."
    },
    {
      id: 13,
      name: "Dana Dilim Sucuk",
      price: "375,00₺",
      weight: "300 gr/paket",
      image: "/images/et_resimler/dilim_sucuk.png",
      description: "Pratik dana dilim sucuk, hazır kesim."
    },
    {
      id: 14,
      name: "Dana Baton Sucuk",
      price: "720,00₺",
      weight: "350 gr/paket",
      image: "/images/et_resimler/BATON-SUCUK.png",
      description: "Klasik dana baton sucuk, geleneksel lezzet."
    }
  ];

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
          ŞARKÜTERİ GRUBU
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
          Çeşit çeşit şarküteri ürünlerimiz ile kahvaltılarınıza lezzet katın.
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
            to={`/products/sarkuteri-grubu/${product.id}`}
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
    </div>
  );
};

export default SarkuteriGrubu; 