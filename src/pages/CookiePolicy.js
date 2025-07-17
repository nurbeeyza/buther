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
  <>
    <div style={{ background: '#111', color: '#fff', padding: '4rem 0', textAlign: 'center', marginBottom: '2rem', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', marginTop: '7rem', zIndex: 0 }}>
      <h1 style={{ color: '#fff', fontSize: 32, fontWeight: 800, letterSpacing: 1, textShadow: '0 2px 8px #000', margin: 0 }}>ÇEREZ POLİTİKASI</h1>
    </div>
    <div style={sectionStyle}>
      <h1 style={headingStyle}>BAŞPINARLAR GIDA SANAYİ VE TİCARET ANONİM ŞİRKETİ</h1>
      
      <p style={paragraphStyle}>
        Değerli Ziyaretçi,
      </p>
      
      <p style={paragraphStyle}>
        Bu Çerez Politikası'nın amacı, internet sitemizde kullanılan çerezlerin cihazınıza yerleştirilmesi aracılığıyla otomatik yolla elde edilen kişisel verilerin işlenmesine ilişkin olarak, hangi amaçlarla hangi tür çerezleri kullandığımız, hukuki sebebi ve haklarınız hakkında sizlere bilgi vermektir.
      </p>

      <h2 style={subHeadingStyle}>Çerez Nedir?</h2>
      <p style={paragraphStyle}>
        Çerezler (cookies), internet sitemizi ziyaret ettiğinizde bilgisayarınıza ya da mobil cihazınıza kaydedilen ve isim-değer formatında veri barındıran küçük metin dosyalarıdır. Bu metin dosyaları ile beraber, web işaretçileri, pikseller veya etiketler gibi diğer takip teknolojileri işbu Çerez Bilgilendirme Metni kapsamında çerez olarak kabul edilir.
      </p>

      <h2 style={subHeadingStyle}>Çerezlerin Kullanım Amaçları Nelerdir?</h2>
      <p style={paragraphStyle}>
        Çerezleri aşağıdaki amaçlarla kullanmaktayız:
      </p>
      <ul style={{...paragraphStyle, paddingLeft: 20}}>
        <li>Sitemizin güvenli bir şekilde çalışmasını sağlamak,</li>
        <li>Sitemizde gezinmenizi ve sitemizde yer alan hizmet ve özelliklerden yararlanmanızı sağlamak,</li>
        <li>Kullanıcılar (kullanıcı cihazları ve tarayıcı ön bellekleri üzerinden) ve site kullanımı hakkındaki bilgileri saklamak,</li>
        <li>Kullanıcı davranışlarını analiz etmek ve sitemiz üzerindeki genel kullanıcı eğilimini tespit etmek,</li>
        <li>Sizlere daha iyi bir deneyim sunmak ve hizmetlerimizi size uygun olarak kişiselleştirmek,</li>
        <li>Sitemizin performansını artırmak ve internet sitemizi kullanıcı dostu hale getirmek,</li>
        <li>Reklam ve pazarlama faaliyetlerimizi geliştirmek,</li>
        <li>Mevcut ve potansiyel kullanıcılarımızın sitemize eklenen içerikleri sosyal medya ağlarında paylaşmasına imkân vermek,</li>
        <li>Sitemizin farklı sürümlerinin performansını ölçmek ve kullanıcıların devamlı aynı sürümü görüntülemesini sağlamak.</li>
      </ul>

      <h2 style={subHeadingStyle}>Çerez Çeşitleri Nelerdir?</h2>
      <p style={paragraphStyle}>
        <strong>Kullanım Süresine Göre Çerezler:</strong>
      </p>
      <ul style={{...paragraphStyle, paddingLeft: 20}}>
        <li>Oturum çerezleri: Tarayıcı kapatıldığında silinir.</li>
        <li>Kalıcı çerezler: Belirli bir süre boyunca cihazda kalır.</li>
      </ul>
      
      <p style={paragraphStyle}>
        <strong>Kaynağa Göre Çerezler:</strong>
      </p>
      <ul style={{...paragraphStyle, paddingLeft: 20}}>
        <li>Birinci taraf çerezler: Ziyaret edilen site tarafından yerleştirilir.</li>
        <li>Üçüncü taraf çerezler: Ziyaret edilen site dışındaki etki alanları tarafından yerleştirilir.</li>
      </ul>
      
      <p style={paragraphStyle}>
        <strong>Amaca Göre Çerezler:</strong>
      </p>
      <ul style={{...paragraphStyle, paddingLeft: 20}}>
        <li>Zorunlu çerezler</li>
        <li>İşlevsel çerezler</li>
        <li>Performans-analitik çerezler</li>
        <li>Reklam ve pazarlama çerezleri</li>
      </ul>

      <h2 style={subHeadingStyle}>Sitemizde Kullanılan Çerezler</h2>
      <p style={paragraphStyle}>
        İnternet sitemizde, aşağıdaki çerezler aracılığıyla kişisel verileriniz işlenmektedir:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Çerez Adı</th>
            <th style={thStyle}>Açıklama</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={tdStyle}>PHPSESSID</td><td style={tdStyle}>Birinci taraf, zorunlu, oturum çerezi – oturum süresince geçerli.</td></tr>
          <tr><td style={tdStyle}>_ga</td><td style={tdStyle}>Birinci taraf, kalıcı, performans-analitik çerezi – 2 yıl geçerli.</td></tr>
          <tr><td style={tdStyle}>_gid</td><td style={tdStyle}>Üçüncü taraf, performans-analitik çerezi – 24 saat geçerli.</td></tr>
          <tr><td style={tdStyle}>gat_gtag_UA*</td><td style={tdStyle}>Performans-analitik çerezi – 1 dakika geçerli.</td></tr>
          <tr><td style={tdStyle}>ga*</td><td style={tdStyle}>Performans-analitik çerezi – 2 yıl geçerli.</td></tr>
        </tbody>
      </table>
      
      <p style={paragraphStyle}>
        Bu çerezler IP bilgilerinizle ilişkilendirilerek kişisel verilerinizi işler, ancak başka veri sorumlularına aktarılmaz.
      </p>

      <h2 style={subHeadingStyle}>Çerezler Nasıl Toplanır?</h2>
      <p style={paragraphStyle}>
        Çerezler, internet sitemizi ve uygulamamızı kullandığınız cihazlar aracılığıyla toplanır. Bu veriler, sadece kullanılan cihaza özgüdür. Farklı bir cihazla giriş yaptığınızda, önceki cihazdaki çerezler kullanılmaz.
      </p>

      <h2 style={subHeadingStyle}>Çerez Yönetimi</h2>
      <p style={paragraphStyle}>
        Cihazınızda çerez kullanımını istemiyorsanız, tarayıcı ayarlarınız üzerinden çerezleri engelleyebilir, sınırlayabilir veya silebilirsiniz. Bu ayarlar sonradan değiştirilebilir.
      </p>

      <h2 style={subHeadingStyle}>Kişisel Verilerin İşlenme Hukuki Dayanağı</h2>
      <p style={paragraphStyle}>
        Çerezler yoluyla işlenen kişisel verileriniz, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 5. maddesinin 2. fıkrasının (f) bendi uyarınca, "ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması" hukuki sebebine dayanılarak işlenmektedir.
      </p>

      <h2 style={subHeadingStyle}>İletişim</h2>
      <p style={paragraphStyle}>
        Çerez Bilgilendirme Metni veya internet sitemizdeki çerez kullanımı hakkında her türlü soru, görüş ve öneriniz için bizimle <a href="mailto:kvkk@baspinarlar.com.tr" style={{ color: '#800020', textDecoration: 'underline' }}>kvkk@baspinarlar.com.tr</a> adresi üzerinden iletişime geçebilirsiniz.
      </p>

      <div style={{...paragraphStyle, marginTop: 32, textAlign: 'center'}}>
        <strong>BAŞPINARLAR GIDA SANAYİ VE TİCARET ANONİM ŞİRKETİ</strong>
      </div>
    </div>
  </>
);

export default CookiePolicy;
