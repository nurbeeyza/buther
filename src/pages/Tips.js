import React from "react";
import { Link } from "react-router-dom";

const Tips = () => {
  const articles = [
    {
      id: 1,
      title: "Aldığımız etin kaliteli olduğunu nasıl anlarız?",
      image: "/images/9f3e4a6c9a5464acfbdec7958c3bd608.png",
      excerpt: "Bonfile, kontrfile, T-bone steak, pirzola… Favoriniz hangisi olursa olsun, satın alırken ve pişirirken dikkat etmeniz gereken önemli noktalar var. Mükemmel lezzette bir kırmızı et hazırlamak için öncelikle onu biraz daha yakından tanımaya ne dersiniz?",
      link: "/tips/meat-quality"
    },
    {
      id: 2,
      title: "Dana Eti Bölümleri ve Yemeklerde Kullanımı",
      image: "/images/dana_parts.png",
      excerpt: "Dana etini herkes sever ancak biftek, bonfile, antrikot dananın hangi bölümünde yer alır diye sorulsa birçok kişi cevap veremez. Şimdi dana eti bölümleri ve bu bölümlerin hangi yemekler için nasıl kullanıldığından bahsedelim.",
      link: "/tips/meat-cuts"
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
        fontSize: "2.5rem",
        fontWeight: 800,
        letterSpacing: 1,
        textShadow: "0 2px 8px #80002022"
      }}>
        PÜF NOKTALAR
      </h1>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        gap: "2rem"
      }}>
        {articles.map((article) => (
          <div key={article.id} style={{
            background: "#fff",
            borderRadius: 14,
            overflow: "hidden",
            boxShadow: "0 4px 16px #80002011",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            borderLeft: "6px solid var(--primary-color)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 8px 24px #80002022";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 16px #80002011";
          }}>
            
            <div style={{
              width: "100%",
              height: 500,
              overflow: "hidden",
              position: "relative"
            }}>
              <img 
                src={article.image} 
                alt={article.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                  transition: "transform 0.3s ease"
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.style.background = "linear-gradient(135deg, var(--primary-color), var(--dark-red))";
                  e.target.parentElement.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; font-size: 1.2rem; font-weight: 600;">📖 ${article.title}</div>`;
                }}
              />
            </div>
            
            <div style={{
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              flex: 1
            }}>
              <h2 style={{
                color: "var(--primary-color)",
                fontSize: "1.4rem",
                marginBottom: "1rem",
                fontWeight: 700,
                lineHeight: 1.3
              }}>
                {article.title}
              </h2>
              
              <p style={{
                color: "#444",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
                flex: 1,
                fontSize: "1rem"
              }}>
                {article.excerpt}
              </p>
              
              <Link 
                to={article.link} 
                style={{
                  display: "inline-block",
                  padding: "0.8rem 1.5rem",
                  background: "var(--primary-color)",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: 8,
                  transition: "all 0.3s ease",
                  alignSelf: "flex-start",
                  marginTop: "auto",
                  fontWeight: 600,
                  letterSpacing: 0.5,
                  boxShadow: "0 2px 8px #80002022"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "var(--dark-red)";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 4px 12px #80002033";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "var(--primary-color)";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 2px 8px #80002022";
                }}
              >
                Tamamını Oku
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
