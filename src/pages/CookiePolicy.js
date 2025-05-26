import React from "react";

const sectionStyle = {
  background: "#fff",
  borderRadius: 16,
  boxShadow: "0 2px 16px #80002022",
  padding: "40px 32px",
  maxWidth: 900,
  margin: "48px auto",
  color: "#222",
  fontFamily: "'Segoe UI', 'Arial', sans-serif"
};

const headingStyle = {
  color: "#800020",
  fontSize: 32,
  fontWeight: 800,
  marginBottom: 28,
  textAlign: "center",
  letterSpacing: 1
};

const subHeadingStyle = {
  color: "#800020",
  fontSize: 20,
  fontWeight: 700,
  margin: "28px 0 12px 0"
};

const paragraphStyle = {
  fontSize: 18,
  lineHeight: 1.7,
  marginBottom: 18
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginBottom: 24,
  fontSize: 16
};

const thStyle = {
  background: "#800020",
  color: "#fff",
  padding: "10px 8px",
  fontWeight: 700,
  border: "1px solid #800020"
};

const tdStyle = {
  border: "1px solid #80002033",
  padding: "8px 8px",
  background: "#f8f8f8"
};

const CookiePolicy = () => (
  <div style={sectionStyle}>
    <h1 style={headingStyle}>Çerez Politikası</h1>
    <p style={paragraphStyle}>
      Ziyaretçilerin işbu internet sitesini nasıl kullandıklarını kavramak amacıyla tarayıcı türü ve işletim sistemi, referans sayfası, site içinde izlenen yol ve benzeri kişisel bilgileri toplamak için takip teknolojisi (‘Çerezler’) kullanılmaktadır. Çerezler, işbu internet sitesini kişisel ihtiyaçlarınıza göre özelleştirmemize imkan tanımaktadır.
    </p>
    <p style={paragraphStyle}>
      Bu teknolojilerin kullanımı başta 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK Kanunu) olmak üzere tabi olduğumuz mevzuata uygun şekilde gerçekleştirilmektedir.
    </p>
    <p style={paragraphStyle}>
      İşbu Çerez politikasının amacı, sitenin kullanımı sırasında yararlanılan çerez ve kişisel verilerin işlenmesine ilişkin olarak sizlere bilgi vermektir. İşbu çerez politikamızda ve uygulamamızda hangi amaçlarla hangi tür çerezleri kullandığımızı ve bu çerezleri nasıl kontrol edebileceğinizi sizlere açıklamak istiyoruz.
    </p>
    <p style={paragraphStyle}>
      Çerezler aracılığıyla elde edilecek tüm veriler Başpınarlar Hayvancılık Gıda Restoran San. ve Tic. Limited Şirketi veya önceden belirlenmiş üçüncü taraflar dışına bildirilmeyecektir; istenmeyen iletişim için de kullanılmayacaktır. Çerez uygulaması sadece üyeler için ve üye olunurken paylaşılan bilgilerle sınırlı olacak şekilde uygulanacaktır.
    </p>
    <p style={paragraphStyle}>
      Başpınarlar Hayvancılık Gıda Restoran San. ve Tic. Limited Şirketi olarak sitemizde kullandığımız çerezleri kullanmaktan vazgeçebilir, bunların türlerini veya fonksiyonlarını değiştirebilir veya sitemize yeni çerezler ekleyebiliriz. Dolayısıyla işbu çerez politikası hükümlerini dilediğimiz zaman değiştirme hakkını saklı tutarız. Güncel politika üzerinde gerçekleştirilmiş olan her türlü değişiklik sitede veya herhangi bir kamuya açık mecrada yayımlanmakla birlikte yürürlük kazanacaktır.
    </p>
    <p style={paragraphStyle}>
      Kişisel verilerinizin Başpınarlar Hayvancılık Gıda Restoran San. ve Tic. Limited Şirketi tarafından işlenmesi hakkında daha detaylı bilgi için <a href="https://xn--bapnarlar-xpb81c.net/gizlilik-ve-guvenlik/" style={{ color: '#800020', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">Gizlilik ve Güvenlik</a> sayfasını okumanızı öneririz.
    </p>
    <h2 style={subHeadingStyle}>Çerez nedir?</h2>
    <p style={paragraphStyle}>
      Çerez bir web sitesinin sizi daha sonra tanıyabilmesi için gerekli ufak bir metin dosyasıdır. Bu metin dosyası size özel olup, sadece bu kodu tanımlayan web sunucusu tarafından okunabilir. Kesinlikle bir virüs değildir. Sizi zaman kaybından korur, kayıt olmuşsanız daha sonraki girişlerinizde vermiş olduğunuz cevapları otomatik olarak hatırlar.
    </p>
    <h2 style={subHeadingStyle}>Kullanılan Çerez Türleri ve Amaçları</h2>
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Çerez Adı</th>
          <th style={thStyle}>Açıklama</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style={tdStyle}>INSOPTOUT</td><td style={tdStyle}>Mevcuttaki kullanıcının devre dışı bırakma durumunu saklar</td></tr>
        <tr><td style={tdStyle}>customDataSet-*</td><td style={tdStyle}>Özel segmentasyonları tutar</td></tr>
        <tr><td style={tdStyle}>ins-storage-version</td><td style={tdStyle}>localStorage değerlerinin çalışandan ortak siteye taşınmasını önler veya bunlara izin verir</td></tr>
        <tr><td style={tdStyle}>first-permission-impression</td><td style={tdStyle}>Kullanıcı ile katılım izni ekranı arasındaki durumu saklar. Onay formunu görmeyen kullanıcılar için tekrar giriş ekranını göstermemize yardımcı olur.</td></tr>
        <tr><td style={tdStyle}>native-permission-impression</td><td style={tdStyle}>Kullanıcı ve olağan katılım izni ekranı arasındaki durumu saklar. Görmeyen kullanıcılar için tekrar giriş ekranını göstermemize yardımcı olur.</td></tr>
        <tr><td style={tdStyle}>ins-gaSSId</td><td style={tdStyle}>Google Analytics kullanıcılarını 30 dakikalık oturumlar için izler.</td></tr>
        <tr><td style={tdStyle}>ins-test-cookie</td><td style={tdStyle}>Kullanıcının şu anda kullanmakta olduğu tarayıcıda çerezlerin etkin olup olmadığını test eder.</td></tr>
        <tr><td style={tdStyle}>variationCandidate</td><td style={tdStyle}>Panelimizde Test Link ile ziyaret edilen kampanyalarda kullanılır ve kampanyalarımızı test etmemizi sağlar</td></tr>
        <tr><td style={tdStyle}>insdrSubsId</td><td style={tdStyle}>Web Push izni veren kullanıcının Web Push Token'ini tutar.</td></tr>
        <tr><td style={tdStyle}>insdrSubsIdCreateDate</td><td style={tdStyle}>Web Push Token'ın oluşturulma ve Web Push izni verilme tarihini tutar.</td></tr>
        <tr><td style={tdStyle}>push-request-sent</td><td style={tdStyle}>Mevcut partneleri opt-in izinlerine göre toplar</td></tr>
        <tr><td style={tdStyle}>campaignId-countdownId-until</td><td style={tdStyle}>Tek bir kampanyanın geri sayım bilgilerini depolar</td></tr>
        <tr><td style={tdStyle}>insdrPushCookieStatus</td><td style={tdStyle}>Opt-in göre mevcut olup olmadığını gösterir</td></tr>
        <tr><td style={tdStyle}>isVAPID</td><td style={tdStyle}>Web push token'ın vapid anahtarı ile verildiğini onaylar</td></tr>
        <tr><td style={tdStyle}>migratedSDK</td><td style={tdStyle}>Kayıtlı sw-sdk yolunu saklar</td></tr>
        <tr><td style={tdStyle}>insdrDH, insdrAuth, insdrPayloadComplete</td><td style={tdStyle}>Token'ı olan kullanıcı ve sw migration'ı gereki olanı kontrol etmek için kullanılır</td></tr>
        <tr><td style={tdStyle}>ins-c</td><td style={tdStyle}>Browserda cookie support var mı yok mu ona bakar</td></tr>
        <tr><td style={tdStyle}>_ga, _gc, _gat</td><td style={tdStyle}>Google Analytics için kullanılır, kullanıcı farklılaştırması ve taleplerin dengelenmesi için kullanılır</td></tr>
      </tbody>
    </table>
    <h2 style={subHeadingStyle}>Çerez Kullanım Amaçları</h2>
    <p style={paragraphStyle}>
      Sitedeki çerezler işlevsellik, performans ve istatistik amaçlarıyla kullanılmaktadır. Sitede pazarlama veya reklam için kullanılan bir çerez tutulmamaktadır.
    </p>
    <h2 style={subHeadingStyle}>Çerez Paylaşımı</h2>
    <p style={paragraphStyle}>
      Çerezlerde tutulan bilgiler yukarıda belirlenen amaçlar doğrultusunda PınarOnline için kullanılmak üzere veri analiz çözüm ortaklarımızla paylaşılmaktadır.
    </p>
    <h2 style={subHeadingStyle}>Çerezlerin Kullanımının Kontrolü</h2>
    <p style={paragraphStyle}>
      Çerez ve benzeri teknolojilerin kullanımı konusunda ziyaretçi ve kullanıcılarımızın tercihleri bizler için asıldır. Bununla birlikte, Platform'un çalışması için zorunlu olan Çerezler'in kullanılması gerekmektedir. Ek olarak bazı çerezlerin kapatılması halinde Platform'un birtakım işlevlerinin kısmen ya da tamamen çalışmayabileceğini hatırlatırız.
    </p>
    <div style={{...paragraphStyle, marginTop: 32}}>
      <b>Başpınarlar Hayvancılık Gıda Restoran San. ve Tic. Limited Şirketi</b>
    </div>
  </div>
);

export default CookiePolicy;
