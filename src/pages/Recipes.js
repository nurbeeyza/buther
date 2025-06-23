import React from "react";
import { Link } from "react-router-dom";
import "./Recipes.css";

const Recipes = () => {
  const recipes = [
    {
      id: 1,
      title: "Başpınarlar Pastırmalı Humus",
      description:
        "Pastırmalı humus için öncelikle haşlanmış nohutlatın kabuklarını soyalım. Bu şekilde humusumuz daha pürüzsüz olacaktır. Ardından blendere alalım. Üzerine tahin, sarımsak, kimyon ve tuzu ekleyelim.",
      image: "/images/yemek_tarif/humus.png",
    },
    {
      id: 2,
      title: "Pastırmalı Fırın Patates",
      description:
        "Patatesleri iyice yıkayıp temizleyelim. Soymadan üzerine bıçakla derin kesikler atarak 180 derece fırında iyice yumuşayana ve kabukları da kızarana kadar pişirelim.",
      image: "/images/yemek_tarif/patates.png",
    },
    {
      id: 3,
      title: "Spagetti Bolognese",
      description:
        "Spagetti için: 1 paket spagetti makarna, 1 litre su, 1 tatlı kaşığı tuz, 1 yemek kaşığı zeytinyağı. Bolonez Sos için: 250 gram kıyma, 1 adet orta boy soğan, 1 adet orta boy havuç, 1 adet orta boy domates, 2 diş sarımsak, 3 yemek kaşığı zeytinyağı.",
      image: "/images/yemek_tarif/spagetti.png",
    },
  ];

  return (
    <div className="recipes page-container">
      <div className="recipes-hero">
        <h1>YEMEK TARİFLERİ</h1>
        <p>
          Başpınarlar et ürünleri ile hazırlayabileceğiniz lezzetli tarifler
        </p>
      </div>

      <div className="container">
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <div className="recipe-card" key={recipe.id}>
              <div className="recipe-image">
                <img src={recipe.image} alt={recipe.title} />
              </div>
              <div className="recipe-content">
                <h3>{recipe.title}</h3>
                <p className="recipe-description">{recipe.description}</p>
                <Link to={`/recipes/${recipe.id}`} className="recipe-button">
                  DETAYLI OKU
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
