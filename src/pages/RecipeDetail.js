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
          "4-5 adet orta boy patates",
          "8-10 dilim pastırma",
          "1 su bardağı rendelenmiş kaşar peyniri",
          "2 yemek kaşığı zeytinyağı",
          "Tuz, karabiber",
          "(İsteğe bağlı) 1 tatlı kaşığı kırmızı toz biber veya kekik",
        ],
        instructions: [
          "Patatesleri soyup ince dilimleyin.",
          "Zeytinyağı, tuz ve baharatlarla harmanlayın.",
          "Yağlı kağıt serili fırın kabına dizin.",
          "180°C fırında 25-30 dakika pişirin.",
          "Üzerine pastırma dilimlerini ve kaşar peynirini ekleyip 10 dakika daha fırınlayın.",
          "Sıcak servis yapın.Afiyet olsun! 🍽️",
        ],
      },
      {
        id: 3,
        title:
          "Başpınarlar Kıymasıyla Hazırlanan Klasik İtalyan Bolonez Soslu Spagetti",
        shortDescription:
          "İtalyan mutfağının en sevilen tariflerinden, Başpınarlar'ın özel kıyması ile hazırlanan enfes bolonez soslu spagetti.",
        image: "/images/yemek_tarif/spagetti.png",
        spagettiIngredients: [
          "1 paket (yaklaşık 500 g) spagetti makarna",
          "1 litre su",
          "1 tatlı kaşığı tuz",
          "1 yemek kaşığı zeytinyağı",
        ],
        sauceIngredients: [
          "250 g Başpınarlar özel dana kıyma",
          "1 adet orta boy kuru soğan (ince doğranmış)",
          "1 adet orta boy havuç (küçük küpler halinde doğranmış)",
          "1 adet orta boy domates (rendelenmiş)",
          "2 diş sarımsak (ince kıyılmış)",
          "3 yemek kaşığı zeytinyağı",
          "1 çay kaşığı tuz",
          "1 çay kaşığı taze çekilmiş karabiber",
        ],
        instructions: [
          "Geniş bir tencerede suyu kaynamaya bırakın. Su kaynadıktan sonra tuzu ekleyin.",
          "Spagettiyi tencereye ilave edin ve ambalaj üzerinde belirtilen sürede, al dente kıvamına gelene kadar haşlayın.",
          "Pişen makarnayı süzün, soğumaması için 1 yemek kaşığı zeytinyağı ile karıştırın ve bekletin.",
          "Geniş tabanlı bir sote tavasında zeytinyağını ısıtın.",
          "Soğanları ekleyin ve şeffaflaşana kadar orta ateşte kavurun.",
          "Ardından sarımsakları ilave edip 1 dakika daha soteleyin.",
          "Kıymayı ekleyin ve rengi tamamen dönene kadar kavurmaya devam edin.",
          "Doğranmış havuçları ilave edin, birkaç dakika birlikte soteleyin.",
          "Son olarak rendelenmiş domatesi, tuzu ve karabiberi ekleyin.",
          "Sosu kapağı kapalı şekilde, kısık ateşte 15-20 dakika pişirin. Ara ara karıştırarak kıvamını kontrol edin.",
          "Spagettiyi servis tabağına aldıktan sonra bolonez sosla kaplayın.",
          "Son dokunuş olarak birkaç yaprak taze fesleğen veya defne yaprağı ile süsleyebilirsiniz. Afiyet olsun !",
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
