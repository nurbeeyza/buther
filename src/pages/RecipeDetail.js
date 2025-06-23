import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./RecipeDetail.css";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // This would typically fetch from an API, but we're using static data
    const recipes = [
      {
        id: 1,
        title: "Başpınarlar Pastırmalı Humus",
        shortDescription:
          "Geleneksel humus tarifimize Başpınarlar'ın özel pastırması ile lezzet katıyoruz.",
        image: "/images/yemek_tarif/humus.png",
        ingredients: [
          "3 su bardağı haşlanmış nohut",
          "1/3 su bardağı tahin",
          "1 adet limon suyu",
          "Yarım çay kaşığı kimyon",
          "1 çay kaşığı tuz",
          "2 diş sarımsak",
        ],
        toppings: [
          "2 yemek kaşığı zeytinyağı",
          "1 çay kaşığı toz kırmızı biber",
          "4-5 dilim pastırma",
          "1 tatlı kaşığı tereyağı",
          "Maydanoz",
        ],
        instructions: [
          "Pastırmalı humus için öncelikle haşlanmış nohutlatın kabuklarını soyalım. Bu şekilde humusumuz daha pürüzsüz olacaktır.",
          "Ardından blendere alalım. Üzerine tahin, sarımsak, kimyon ve tuzu ekleyelim.",
          "Bütün malzemeleri blenderde iyice püre haline gelene kadar ezelim. (Arzuya göre eğer kıvamını daha sıvı isterseniz birkaç kaşık su ilave edebilirsiniz).",
          "Üzeri için ocağa aldığımız tavaya zeytinyağını alalım ve ısıtalım. Üzerine toz kırmızı biberi ekleyerek yakmadan kızdıralım ve ocaktan alalım.",
          "Ayrı bir tavaya tereyağını alalım ve eritelim.",
          "Eriyen yağın üzerine pastırmaları ekleyerek çevirelim.",
          "Hazır olan humusumuzu geniş bir servis tabağına alarak yayalım.",
          "Üzerine hazırladığımız toz biberli sosu, ince kıyılmış maydanoz ve bir kaç tane haşlanmış nohutu yerleştirelim.",
          "Son olarak pastırmaları da ekleyerek humusumuzu servis edelim. Afiyet olsun!",
        ],
      },
      {
        id: 2,
        title: "Pastırmalı Fırın Patates",
        shortDescription:
          "Lezzetli fırın patateslerine Başpınarlar pastırmasının muhteşem eşliği ile doyumsuz bir lezzet.",
        image: "/images/yemek_tarif/patates.png",
        ingredients: [
          "4 adet orta boy patates",
          "2 yemek kaşığı tereyağı",
          "Tuz",
          "100 gram beyaz peynir",
          "1 adet kırmızı biber",
          "5-6 dilim pastırma",
          "100 gram cheddar peyniri",
          "2 dal taze soğan",
          "Maydanoz",
        ],
        instructions: [
          "Patatesleri iyice yıkayıp temizleyelim.",
          "Soymadan üzerine bıçakla derin kesikler atarak 180 derece fırında iyice yumuşayana ve kabukları da kızarana kadar pişirelim.",
          "Fırından çıkarınca üstlerinden hafifçe kesip ikiye ayıralım ve tereyağı, tuz koyup kumpir gibi içlerini karıştıralım.",
          "Beyaz peynir dilimlerini, kırmızı biberleri, pastırmaları ve cheddar peynirleri ekleyip tekrar fırına sürelim ve peynirler eriyinceye kadar pişirmeyi sürdürelim.",
          "Fırından çıkınca incecik kıydığımız maydanoz ve taze soğan dilimleriyle süsleyip servis edebiliriz.",
          "Afiyet Olsun!",
        ],
      },
      {
        id: 3,
        title: "Spagetti Bolognese",
        shortDescription:
          "İtalyan mutfağının en sevilen tariflerinden, Başpınarlar'ın özel kıyması ile hazırlanan enfes bolonez soslu spagetti.",
        image: "/images/yemek_tarif/spagetti.png",
        spagettiIngredients: [
          "1 paket spagetti makarna",
          "1 litre su",
          "1 tatlı kaşığı tuz",
          "1 yemek kaşığı zeytinyağı",
        ],
        sauceIngredients: [
          "250 gram kıyma",
          "1 adet orta boy soğan",
          "1 adet orta boy havuç",
          "1 adet orta boy domates",
          "2 diş sarımsak",
          "3 yemek kaşığı zeytinyağı",
          "1 çay kaşığı tuz",
          "1 çay kaşığı karabiber",
        ],
        instructions: [
          "Geniş bir tencerede suyu kaynatın ve içine tuz ekleyin.",
          "Kaynar suya makarnayı ekleyin ve ambalajında belirtilen süre kadar pişirin.",
          "Makarna pişerken bolonez sosu için soğanı ve sarımsağı ince ince doğrayın.",
          "Havuçları küçük küpler halinde doğrayın ve domatesleri rendeleyin.",
          "Derin bir tavada zeytinyağını ısıtın ve soğanları pembeleşene kadar kavurun.",
          "Soğanlar pembeleşince sarımsakları ekleyin ve 1 dakika daha kavurun.",
          "Kıymayı ekleyin ve rengi değişene kadar kavurun.",
          "Havuçları ekleyip birkaç dakika kavurduktan sonra domatesleri, tuz ve karabiberi ekleyin.",
          "Sosu kısık ateşte 15-20 dakika pişirin.",
          "Pişen makarnayı süzün ve 1 yemek kaşığı zeytinyağı ile karıştırın.",
          "Makarnanın üzerine bolonez sosu dökerek servis edin.",
          "Afiyet olsun!",
        ],
      },
    ];

    const selectedRecipe = recipes.find((r) => r.id === parseInt(id));
    if (selectedRecipe) {
      setRecipe(selectedRecipe);
    }
  }, [id]);

  if (!recipe) {
    return (
      <div className="loading-container">
        <p>Tarif yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className="recipe-detail page-container">
      <div className="recipe-detail-hero">
        <h1>{recipe.title}</h1>
      </div>

      <div className="container">
        <div className="recipe-detail-container">
          <div className="recipe-detail-content">
            <div className="recipe-detail-image">
              <img src={recipe.image} alt={recipe.title} />
            </div>

            <div className="recipe-detail-info">
              <p className="recipe-intro">{recipe.shortDescription}</p>

              <div className="recipe-ingredients">
                <h2>Malzemeler</h2>

                {recipe.ingredients && (
                  <ul className="ingredients-list">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                )}

                {recipe.toppings && (
                  <>
                    <h3>Üzeri için:</h3>
                    <ul className="ingredients-list">
                      {recipe.toppings.map((topping, index) => (
                        <li key={index}>{topping}</li>
                      ))}
                    </ul>
                  </>
                )}

                {recipe.spagettiIngredients && (
                  <>
                    <h3>Spagetti için:</h3>
                    <ul className="ingredients-list">
                      {recipe.spagettiIngredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </>
                )}

                {recipe.sauceIngredients && (
                  <>
                    <h3>Bolonez Sos için:</h3>
                    <ul className="ingredients-list">
                      {recipe.sauceIngredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="recipe-instructions">
            <h2>Nasıl Yapılır?</h2>
            <ol className="instructions-list">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="back-to-recipes">
            <Link to="/recipes" className="back-button">
              Tariflere Dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
