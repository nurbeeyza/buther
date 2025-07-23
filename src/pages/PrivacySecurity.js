import React from "react";

const sectionStyle = {
  background: "#fff",
  borderRadius: 16,
  boxShadow: "0 2px 16px #80002022",
  padding: "40px 32px",
  maxWidth: 900,
  margin: "48px auto",
  color: "#222",
  fontFamily: "'Segoe UI', 'Arial', sans-serif",
};

const subHeadingStyle = {
  color: "#800020",
  fontSize: 22,
  fontWeight: 700,
  margin: "32px 0 12px 0",
};

const paragraphStyle = {
  fontSize: 18,
  lineHeight: 1.7,
  marginBottom: 18,
};

const contactBoxStyle = {
  background: "#f8f8f8",
  borderLeft: "6px solid #800020",
  borderRadius: 10,
  boxShadow: "0 2px 8px #80002011",
  padding: "18px 22px",
  margin: "32px 0 0 0",
  fontSize: 18,
};

const PrivacySecurity = () => (
  <>
    <div
      style={{
        background: "#111",
        color: "#fff",
        padding: "4rem 0",
        textAlign: "center",
        marginBottom: "2rem",
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        marginTop: "7rem",
        zIndex: 0,
      }}
    >
      <h1
        style={{
          color: "#fff",
          fontSize: 36,
          fontWeight: 800,
          letterSpacing: 1,
          textShadow: "0 2px 8px #000",
          margin: 0,
        }}
      >
        Gizlilik ve Güvenlik
      </h1>
    </div>
    <div style={sectionStyle}>
      <p style={paragraphStyle}>
        Mağazamızda verilen tüm servisler ve <b>www.BAŞPINARLAR.NET</b> adresinde kayıtlı <b>BAŞPINARLAR HAYVANCILIK GIDA RESTORAN SAN. VE TİC. LTD.ŞKT.</b> firmamıza aittir ve firmamız tarafından işletilir.
      </p>
      <p style={paragraphStyle}>
        Sitemiz üzerinden <b>online satış ve ödeme işlemleri yapılmamaktadır</b>. Kredi kartı veya başka bir ödeme yöntemiyle alışveriş yapılamaz. Sitemiz yalnızca bilgilendirme ve tanıtım amacıyla hizmet vermektedir.
      </p>
      <h2 style={subHeadingStyle}>Kişisel Bilgilerin Toplanması</h2>
      <p style={paragraphStyle}>
        Sitemiz üzerinde üyelik, form doldurma veya anket gibi işlemler bulunmamaktadır. Ziyaretçilerden herhangi bir kişisel bilgi talep edilmez ve toplanmaz.
      </p>
      <h2 style={subHeadingStyle}>Veri Güvenliği ve Kullanımı</h2>
      <p style={paragraphStyle}>
        Sitemiz yalnızca bilgilendirme amacıyla hizmet vermektedir. Ziyaretçilerden herhangi bir kişisel veri toplanmaz, saklanmaz veya üçüncü kişilerle paylaşılmaz.
      </p>
      <h2 style={subHeadingStyle}>Çerezler (Cookies)</h2>
      <p style={paragraphStyle}>
        Sitemiz, kullanıcı deneyimini iyileştirmek amacıyla yalnızca teknik çerezler kullanabilir. Bu çerezler kişisel veri içermez ve ziyaretçilerin kimliğini belirlemez.
      </p>
      <h2 style={subHeadingStyle}>Üçüncü Taraf Web Siteleri ve Uygulamalar</h2>
      <p style={paragraphStyle}>
        Sitemiz, başka sitelere bağlantı verebilir. Bağlantı verilen sitelerin gizlilik politikalarından firmamız sorumlu değildir.
      </p>
      <div style={contactBoxStyle}>
        <b>
          Gizlilik politikamız ile ilgili her türlü soru ve önerileriniz için {" "}
          <a
            href="mailto:info@baspinarlaret.com"
            style={{ color: "#800020", textDecoration: "underline" }}
          >
            info@baspinarlaret.com
          </a>{" "}
          adresine email gönderebilirsiniz.
        </b>
        <br />
        <br />
        <b>Firma Ünvanı:</b> BAŞPINARLAR HAYVANCILIK GIDA RESTORAN SAN VE TİC. LMTD.Ş.
        <br />
        <b>Adres:</b> 75.Yıl Mh. ESTİM Toptancılar Sitesi H Blok No:21 ODUNPAZARI ESKİŞEHİR
        <br />
        <b>Eposta:</b> info@baspinarlaret.com
        <br />
        <b>Tel:</b> 0222 228 0093
      </div>
    </div>
  </>
);

export default PrivacySecurity;
