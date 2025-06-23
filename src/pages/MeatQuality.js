import React from "react";
import { Link } from "react-router-dom";
import "../styles/MeatQuality.css";

const MeatQuality = () => {
  return (
    <div
      className="page-container"
      style={{
        maxWidth: 1400,
        margin: "0 auto",
        padding: "2rem",
        background: "#f8f9fa",
        minHeight: "calc(100vh - 200px)",
      }}
    >
      <div className="meat-quality-container">
        <div className="back-button">
          <Link to="/" className="back-link">
            ← Geri Dön
          </Link>
        </div>

        <div className="header-image">
          <img
            src="/images/9f3e4a6c9a5464acfbdec7958c3bd608.png"
            alt="Et Kalitesi"
          />
        </div>

        <h1 className="page-title">
          Aldığımız etin kaliteli olduğunu nasıl anlarız?
        </h1>

        <div className="content-section">
          <div className="intro-section">
            <p>
              Bonfile, kontrfile, T-bone steak, pirzola… Favoriniz hangisi
              olursa olsun, satın alırken ve pişirirken dikkat etmeniz gereken
              önemli noktalar var. Mükemmel lezzette bir kırmızı et hazırlamak
              için öncelikle onu biraz daha yakından tanımaya ne dersiniz?
            </p>
            <p>
              En taze ve lezzetli etin parlak kırmızı renge sahip olduğuna
              inanırız, pekiyi bu doğru mu? Kasabınıza en lezzetli parçanın
              hangisi olduğunu sorun. Sizlere zamanla yumuşak bir dokuya ve
              derinleşmiş tada sahip doğru eti gösterir.
            </p>
          </div>

          <div className="quality-section">
            <h2>Kırmızı et alırken nelere dikkat edelim?</h2>
            <p>
              Kırmızı et seçerken aşağıda belirtilenleri dikkate alırsanız daha
              kaliteli bir ürün almış olursunuz:
            </p>

            <ul className="quality-list">
              <li>
                Yağ lezzeti artırır. Sarı renk tonu hayvanın çim ile
                beslendiğini gösterir.
              </li>
              <li>
                Etin yüzeyi pürüzsüz olmalıdır. Yapışkan veya sümüksü yapıya
                sahip olması üründe bakteri ürediğine işaret edebilir.
              </li>
              <li>
                Etin hafif bir kokusu olur fakat bu koku rahatsız edici düzeyde
                olmamalı.
              </li>
              <li>
                Yumuşak kesimler için küçük taneli ve biraz bağ dokulu et tercih
                edin. Daha sert kesimler için ise kasın daha iyi kullanıldığını
                gösterir bölümler seçin.
              </li>
              <li>Şiş için yağ ve bağ dokulu etler tercih edin.</li>
              <li>Mozaik yapı etin lezzet dolu olduğuna işaret eder.</li>
            </ul>
          </div>

          <div className="time-section">
            <h2>Etin Rengi ve Zaman İlişkisi</h2>
            <div className="time-grid">
              <div className="time-item">
                <h3>0 saat</h3>
                <p>
                  Yeni kesilmiş. Kesildikten sonra vakumlanan etin doğal mor
                  dokusu olabilir.
                </p>
              </div>
              <div className="time-item">
                <h3>3 saat</h3>
                <p>
                  Oksijene maruz kalmış ve rengi parlak kırmızıya dönmüş et.
                </p>
              </div>
              <div className="time-item">
                <h3>7 saat</h3>
                <p>Hava ile teması devam eden etin rengi koyulaşmaya başlar.</p>
              </div>
              <div className="time-item">
                <h3>9 gün</h3>
                <p>
                  Miyoglobin, hava ile temas devam ettiği sürece etin rengini
                  gittikçe koyulaştırır.
                </p>
              </div>
            </div>
          </div>

          <div className="color-section">
            <h2>Rengi kahverengiye dönmüş etleri almaktan kaçınmalı mıyız?</h2>
            <p>
              Etin rengi tek başına tazeliği veya kaliteyi ölçen bir kıstas
              değil. Etin doğal rengi, kas dokusunda depolanan miyoglobin isimli
              kırmızı oksijen taşıyan pigmentten geliyor. Farklı hayvanlarda
              farklı düzeyde miyoglobin bulunuyor. Kırmızı ette beyaz etten
              fazla bulunuyor, yaşlı hayvanlarda yine bu pigmentin düzeyi
              fazlalık gösteriyor.
            </p>
            <p>
              Vakumlanmış paketlerde bulunan etlerde oksijenden mahrum kalındığı
              için doğal olarak mor renk katmanı ortaya çıkıyor. Hava ile temasa
              geçildiğinde ise miyoglobin rengi değiştiriyor ve parlak kırmızı
              oluyor.
            </p>
          </div>

          <div className="cuts-section">
            <h2>Dana Eti Kesimleri ve Pişirme Önerileri</h2>
            <div className="cuts-grid">
              <div className="cut-item">
                <h3>Bonfile</h3>
                <p>
                  Oldukça yumuşak ve hassas bir yapıya sahiptir. Yağ dokusu
                  azdır. Orta dereceden fazla pişirilmemelidir, az yağ dokusu
                  sebebiyle fazla pişirilirse et kurur.
                </p>
              </div>
              <div className="cut-item">
                <h3>Kontrfile</h3>
                <p>
                  Etin üst kısmı alt kısmına göre daha hassas olup mermerimsi
                  bir görüntüye sahiptir. Dolgun yağ dokusu sayesinde çok zengin
                  tada sahip bir ettir. Hızlı pişirilmelidir, az-orta en iyi
                  derece olacaktır.
                </p>
              </div>
              <div className="cut-item">
                <h3>T-Bone biftek</h3>
                <p>
                  Etin ortasında bulunan kemik, T-bone'u ikiye ayırır. Bu etin
                  bir tarafı bonfile, bir tarafı kontrfile olur. Çok lezzetli ve
                  değerli bir ettir. Kemik de ayrıca ete lezzet katar. Mükemmel
                  lezzet için tava ya da ızgarada az veya az-orta şeklinde
                  pişirilmeli.
                </p>
              </div>
              <div className="cut-item">
                <h3>Kemiksiz pirzola</h3>
                <p>
                  Çok kullanılan kaslarla çevrelenmiş kaburga bölgesinde bulunan
                  lezzetli bir ettir. Bağ dokuları ve yağların yumuşayabilmesi
                  için en az orta derecede pişirilmesi gerekir.
                </p>
              </div>
              <div className="cut-item">
                <h3>But (sığır)</h3>
                <p>
                  3 ayrı kas dokusundan oluşur, fileminyon ve bonfileden daha
                  sert bir ettir. Yağ dokusu yaygın olduğundan lezzetli bir et
                  olarak kabul edilir. Tavada az-orta veya orta derecesinde
                  pişirilmesi uygun olur.
                </p>
              </div>
            </div>
          </div>

          <div className="wagyu-section">
            <h2>Wagyu et neden bu kadar pahalı?</h2>
            <p>
              Wagyu yani Japon sığır etini ('wa', 'Japon' ve 'gyu' da 'inek'
              anlamına geliyor) lezzet açısından zengin kılan yüzde 40'a kadar
              çıkabilen mermer görüntüsünün (çeşitli miktarlarda kas içi yağ
              içeren et) olması. Wagyu ette bulunan kalpain isimli enzimler etin
              yumuşaklaşmasını sağlıyor.
            </p>
            <p>
              Japonya'da bu etlerin en kaliteli düzeye ulaşabilmesi için
              sığırlara harcanan hiçbir masraftan kaçınılmıyor. Bazı çobanlar
              hayvanlara masaj yaparken, bazıları da yağ dokusu fazla olsun diye
              onları bira ile besliyor. Bu yorucu ve zaman alan iş sonucunda
              ortaya çıkan aşırı lezzetli ve harika kıvamlı et, oldukça yüksek
              fiyatlarla alıcı buluyor.
            </p>
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
                <textarea
                  id="comment"
                  name="comment"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="form-group checkbox">
                <input type="checkbox" id="save-info" name="save-info" />
                <label htmlFor="save-info">
                  Daha sonraki yorumlarımda kullanılması için adım, e-posta
                  adresim ve site adresim bu tarayıcıya kaydedilsin.
                </label>
              </div>
              <button type="submit" className="submit-button">
                Yorum Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeatQuality;
