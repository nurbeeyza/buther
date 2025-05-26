import React from "react";
import { Link } from "react-router-dom";
import "../styles/Tips.css";

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
    <div className="tips-container">
      <h1 className="tips-title">Püf Noktalar</h1>
      <div className="articles-container">
        {articles.map((article) => (
          <div key={article.id} className="article-box">
            <div className="article-image">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="article-content">
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
              <Link to={article.link} className="read-more">
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
