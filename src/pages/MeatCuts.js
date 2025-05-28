import React from 'react';
import '../styles/MeatCuts.css';

const MeatCuts = () => {
  const cuts = [
    {
      title: "Boyun Bölümü",
      cuts: [
        {
          name: "Gerdan",
          description: "Dananın boyun bölümünde elde edilir. Kıyma, çorba ve yahni yapımında kullanılır.",
          uses: ["Kıyma", "Çorba", "Yahni"]
        }
      ]
    },
    {
      title: "Göğüs Bölümü",
      cuts: [
        {
          name: "Göğüs",
          description: "Dana etinin göğüs kısmından elde edilir. Haşlama, çorba ve kıyma yapımında kullanılır.",
          uses: ["Haşlama", "Çorba", "Kıyma"]
        }
      ]
    },
    {
      title: "Sırt Bölümü",
      cuts: [
        {
          name: "Antrikot",
          description: "Sırtın üst kısmından elde edilir. Izgara ve biftek yapımı için idealdir.",
          uses: ["Izgara", "Biftek"]
        },
        {
          name: "Bonfile",
          description: "Sırtın en iç kısmından elde edilir. En yumuşak ve değerli et parçasıdır.",
          uses: ["Izgara", "Biftek", "Rosto"]
        },
        {
          name: "Kontrfile",
          description: "Sırtın alt kısmından elde edilir. Izgara ve biftek için uygundur.",
          uses: ["Izgara", "Biftek"]
        }
      ]
    },
    {
      title: "But Bölümü",
      cuts: [
        {
          name: "Nuar",
          description: "Butun üst kısmından elde edilir. Rosto ve biftek yapımında kullanılır.",
          uses: ["Rosto", "Biftek"]
        },
        {
          name: "Pirzola",
          description: "Butun orta kısmından elde edilir. Izgara için idealdir.",
          uses: ["Izgara", "Tavada"]
        }
      ]
    }
  ];

  return (
    <div className="meat-cuts-container">
      <div className="header-image">
        <img src="/images/dana_parts.png" alt="Dana Eti Bölümleri" />
      </div>

      <h1 className="page-title">Dana Eti Bölümleri ve Yemeklerde Kullanımı</h1>
      
      <div className="content-section">
        <p className="intro-text">
          Dana etini herkes sever ancak biftek, bonfile, antrikot dananın hangi bölümünde 
          yer alır diye sorulsa birçok kişi cevap veremez. Şimdi dana eti bölümleri ve bu 
          bölümlerin hangi yemekler için nasıl kullanıldığından bahsedelim.
        </p>

        <div className="cuts-grid">
          {cuts.map((section, index) => (
            <div key={index} className="cut-section">
              <h2 className="section-title">{section.title}</h2>
              <div className="cuts-list">
                {section.cuts.map((cut, cutIndex) => (
                  <div key={cutIndex} className="cut-card">
                    <h3 className="cut-name">{cut.name}</h3>
                    <p className="cut-description">{cut.description}</p>
                    <div className="cut-uses">
                      <h4>Kullanım Alanları:</h4>
                      <ul>
                        {cut.uses.map((use, useIndex) => (
                          <li key={useIndex}>{use}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
           <div className="comment-section">
          <h2>Yorum Yap</h2>
          <form className="comment-form">
            <div className="form-group">
              <label htmlFor="name">Ad *</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta *</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="website">İnternet sitesi</label>
              <input type="url" id="website" name="website" />
            </div>
            <div className="form-group">
              <label htmlFor="comment">Yorum *</label>
              <textarea id="comment" name="comment" rows="5" required></textarea>
            </div>
            <div className="form-group checkbox">
              <input type="checkbox" id="save-info" name="save-info" />
              <label htmlFor="save-info">
                Daha sonraki yorumlarımda kullanılması için adım, e-posta adresim ve site adresim bu tarayıcıya kaydedilsin.
              </label>
            </div>
            <button type="submit" className="submit-button">Yorum Gönder</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MeatCuts; 