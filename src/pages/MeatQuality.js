import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MeatQuality.css';

const MeatQuality = () => {
  return (
    <div className="meat-quality-container">
      <div className="back-button">
        <Link to="/" className="back-link">← Geri Dön</Link>
      </div>
      
      <div className="header-image">
        <img src="/images/9f3e4a6c9a5464acfbdec7958c3bd608.png" alt="Et Kalitesi" />
      </div>

      <h1 className="page-title">Kaliteli Et Nasıl Seçilir?</h1>
      
      <div className="content-section">
        <div className="intro-section">
          <p>
            Bonfile, kontrfile, T-bone steak, pirzola… Hangi eti severseniz sevin, 
            satın alırken ve pişirirken dikkat etmeniz gereken önemli noktalar var. 
            Mükemmel lezzette bir kırmızı et hazırlamak için önce onu nasıl seçeceğimizi öğrenelim.
          </p>
          <p>
            Çoğumuz en taze etin parlak kırmızı renkte olduğunu düşünürüz, 
            ama bu her zaman doğru değil. Kasabınıza en lezzetli parçanın hangisi olduğunu sorun. 
            Size hem yumuşak hem de lezzetli olan doğru eti gösterecektir.
          </p>
        </div>

        <div className="quality-section">
          <h2>Et Alırken Nelere Dikkat Edelim?</h2>
          <p>Kaliteli et seçmek için şu noktalara dikkat edin:</p>
          
          <ul className="quality-list">
            <li><strong>Yağ:</strong> Etteki yağ lezzeti artırır. Sarımsı yağ, hayvanın doğal beslenmiş olduğunu gösterir.</li>
            <li><strong>Yüzey:</strong> Etin yüzeyi pürüzsüz olmalı. Yapışkan veya sümüksü olması bozulduğunu işaret eder.</li>
            <li><strong>Koku:</strong> Etin hafif bir kokusu olur ama bu koku rahatsız edici olmamalı.</li>
            <li><strong>Doku:</strong> Yumuşak et için ince lifli, sert et için daha kalın lifli kısımları seçin.</li>
            <li><strong>Şiş için:</strong> Yağlı ve lifli etler tercih edin.</li>
            <li><strong>Mozaik görünüm:</strong> Etteki yağ dağılımı lezzetli olduğunu gösterir.</li>
          </ul>
        </div>

        <div className="time-section">
          <h2>Etin Rengi Zamanla Nasıl Değişir?</h2>
          <div className="time-grid">
            <div className="time-item">
              <h3>Yeni Kesilmiş</h3>
              <p>Vakumlu paketlerde morumsu renkte olabilir. Bu normaldir.</p>
            </div>
            <div className="time-item">
              <h3>3 Saat Sonra</h3>
              <p>Hava ile temas edince parlak kırmızı renge döner.</p>
            </div>
            <div className="time-item">
              <h3>7 Saat Sonra</h3>
              <p>Hava ile temas devam ettikçe rengi koyulaşmaya başlar.</p>
            </div>
            <div className="time-item">
              <h3>9 Gün Sonra</h3>
              <p>Hava ile temas sürdükçe rengi gittikçe koyulaşır.</p>
            </div>
          </div>
        </div>

        <div className="color-section">
          <h2>Kahverengi Et Kötü mü?</h2>
          <p>
            Etin rengi tek başına tazeliğini göstermez. Etin doğal rengi, 
            kaslarda bulunan kırmızı renk maddesinden gelir. Bu madde farklı hayvanlarda 
            farklı miktarlarda bulunur. Kırmızı ette beyaz etten daha fazla bulunur.
          </p>
          <p>
            Vakumlu paketlerdeki etler havasız kaldığı için mor görünebilir. 
            Hava ile temas edince kırmızı renge döner. Bu tamamen normal bir durumdur.
          </p>
        </div>

        <div className="cuts-section">
          <h2>Et Kesimleri ve Pişirme Önerileri</h2>
          <div className="cuts-grid">
            <div className="cut-item">
              <h3>Bonfile</h3>
              <p>Çok yumuşak ve hassas bir et. Yağı azdır. Fazla pişirilirse kurur. Az pişmiş en iyisidir.</p>
            </div>
            <div className="cut-item">
              <h3>Kontrfile</h3>
              <p>Yağlı ve lezzetli bir et. Mermer görünümlüdür. Hızlı pişirilmelidir. Az-orta pişmiş ideal.</p>
            </div>
            <div className="cut-item">
              <h3>T-Bone Biftek</h3>
              <p>Ortasında kemik olan değerli bir et. Bir tarafı bonfile, diğer tarafı kontrfiledir. Kemik ete lezzet katar. Az pişmiş en iyisidir.</p>
            </div>
            <div className="cut-item">
              <h3>Pirzola</h3>
              <p>Kaburga bölgesinden gelen lezzetli et. Orta pişmiş olmalıdır. Yağları yumuşayınca daha lezzetli olur.</p>
            </div>
            <div className="cut-item">
              <h3>But</h3>
              <p>Bonfileden daha sert ama lezzetli bir et. Yağı yaygındır. Orta pişmiş ideal.</p>
            </div>
          </div>
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

export default MeatQuality; 