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
  fontSize: 36,
  fontWeight: 800,
  marginBottom: 28,
  textAlign: "center",
  letterSpacing: 1
};

const subHeadingStyle = {
  color: "#800020",
  fontSize: 22,
  fontWeight: 700,
  margin: "32px 0 12px 0"
};

const paragraphStyle = {
  fontSize: 18,
  lineHeight: 1.7,
  marginBottom: 18
};

const fieldStyle = {
  color: "#800020",
  fontWeight: 700,
  background: "#f8f8f8",
  padding: "1px 6px",
  borderRadius: 4
};

const DistanceSalesAgreement = () => (
  <div style={sectionStyle}>
    <h1 style={headingStyle}>Mesafeli Satış Sözleşmesi</h1>
    <h2 style={subHeadingStyle}>MADDE 1- TARAFLAR</h2>
    <p style={paragraphStyle}><b>1.1- SATICI:</b></p>
    <div style={{...paragraphStyle, marginBottom: 8}}>
      Ünvanı: Başpınarlar Gıda Hayvancılık Restoran Sanayi ve Ticaret limited Şirketi<br />
      Adresi: 75.Yıl Mh. ESTİM Toptancılar Sitesi H Blok No:21 Odunpazarı/ESKİŞEHİR<br />
      Telefon: +0 222 228 0093<br />
      E-mail: info@baspinarlaret.com
    </div>
    <p style={paragraphStyle}><b>1.2- ALICI:</b></p>
    <div style={{...paragraphStyle, marginBottom: 8}}>
      Adı/Soyadı/Ünvanı: <span style={fieldStyle}>{'{_aliciad_} {_alicisoyad_}'}</span><br />
      Adresi: <span style={fieldStyle}>{'{_teslimatadresi_}'}</span><br />
      Telefon: <span style={fieldStyle}>{'{_alicitelefon_}'}</span><br />
      E-mail: <span style={fieldStyle}>{'{_alicimail_}'}</span><br />
      Tc No: <span style={fieldStyle}>{'{_tcid_}'}</span>
    </div>
    <h2 style={subHeadingStyle}>MADDE 2- KONU</h2>
    <p style={paragraphStyle}>
      İşbu sözleşmenin konusu, ALICI'nın SATICI'ya ait <b>www.başpınarlar.net</b> internet sitesinden elektronik ortamda sipariş verdiği ve Satıcı'dan satın aldığı, sözleşmede belirtilen nitelikleri haiz, satış ve teslimat fiyatı aşağıda belirtilen ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği (beraber "Mevzuat" olarak anılacaktır) hükümleri uyarınca tarafların hak ve yükümlülüklerinin saptanmasıdır.
    </p>
    <h2 style={subHeadingStyle}>MADDE 3- SÖZLEŞME KONUSU ÜRÜN</h2>
    <div style={{...paragraphStyle, marginBottom: 8}}>
      Tarih: <span style={fieldStyle}>{'{_tarih_}'}</span><br /><br />
      <span style={fieldStyle}>{'{_urunbilgileri_}'}</span><br /><br />
      Kargo Tutarı: <span style={fieldStyle}>{'{_kargo_}'}</span><br /><br />
      Ürünlerin cinsi ve türü, miktarı, marka/modeli, rengi, satış bedeli yukarıda belirtildiği gibidir.<br />
      Ödeme şekli: <span style={fieldStyle}>{'{_odemesekli_}'}</span><br />
      Teslimat adresi: <span style={fieldStyle}>{'{_teslimatadresi_}'}</span><br />
      <span style={fieldStyle}>{'{_odemetablosu_}'}</span>
    </div>
    <h2 style={subHeadingStyle}>MADDE 4- GENEL HÜKÜMLER</h2>
    <ol style={{ fontSize: 18, marginBottom: 18, marginLeft: 24, color: "#222", lineHeight: 1.7 }}>
      <li>ALICI, <span style={fieldStyle}>{'{_siteadi_}'}</span> internet sitesinde sözleşme konusu ürünün temel nitelikleri, satış fiyatı ve ödeme şekli ile teslimata ilişkin ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini beyan eder.</li>
      <li>Alıcı bu sözleşmeyi elektronik ortamda teyit etmekle, mesafeli sözleşmelerin akdinden önce, Satıcı tarafından tüketiciye verilmesi gereken adres, telefon numarası, siparişi verilen ürünlere ait temel özellikler, ürünlerin vergiler dâhil fiyatı, ödeme ve teslimat bilgilerini ve cayma hakkına ilişkin doğru ve eksiksiz olarak edindiğini teyit etmiş olur.</li>
      <li>Sözleşme konusu ürün, ALICI'dan başka bir kişi/kuruluşa teslim edilecek ise, teslim edilecek kişi/kuruluşun teslimatı kabul etmemesinden SATICI sorumlu tutulamaz.</li>
      <li>SATICI, sözleşme konusu ürünün sağlam, eksiksiz, siparişte belirtilen niteliklere uygun teslim edilmesinden sorumludur.</li>
      <li>Alıcı, sözleşme konusu ürünü teslim almadan önce muayene edecek; ezik, kırık, ambalajı yırtılmış vb. hasarlı ve ayıplı ürün kargo şirketinden teslim almayacaktır. Alıcı, ürünün kargo şirketinden teslim alınması sırasında fark edilemeyecek olan hasar veya ayıpları teslim sonrası fark ederse Satıcı'yı durumdan <a href="mailto:info@baspinarlaret.com" style={{ color: '#800020', textDecoration: 'underline' }}>info@baspinarlaret.com</a> e-posta adresi üzerinden derhal haberdar edecektir.</li>
      <li>Sözleşme konusu ürünün teslimatı için işbu sözleşmenin imzalı nüshasının SATICI'ya ulaştırılmış olması ve bedelinin ALICI'nın tercih ettiği ödeme şekli ile ödenmiş olması şarttır. Herhangi bir nedenle ürün bedeli ödenmez veya banka kayıtlarında iptal edilir ise, SATICI ürünün teslimi yükümlülüğünden kurtulmuş kabul edilir.</li>
      <li>Ürünün tesliminden sonra Alıcı'ya ait kartın Alıcı'nın kusurundan kaynaklanmayan bir şekilde yetkisiz kişilerce haksız veya hukuka aykırı olarak kullanılması nedeni ile ilgili banka veya finans kuruluşunun ürün bedelini Satıcı'ya ödememesi halinde, Alıcı, borcun gecikmeli ifasından dolayı Satıcı'nın oluşan zarar ve ziyanını ödemeyi kabul eder.</li>
      <li>SATICI mücbir sebepler veya nakliyeyi engelleyen hava muhalefeti, ulaşımın kesilmesi gibi olağanüstü durumlar nedeni ile sözleşme konusu ürünü süresi içinde teslim edemez ise, durumu ALICI'ya bildirmekle yükümlüdür. Bu takdirde ALICI siparişin iptal edilmesini, sözleşme konusu ürünün varsa emsali ile değiştirilmesini, ve/veya teslimat süresinin engelleyici durumun ortadan kalkmasına kadar ertelenmesi haklarından birini kullanabilir. ALICI'nın siparişi iptal etmesi halinde ödediği tutar 10 gün içinde kendisine nakten ve defaten ödenir.</li>
      <li>Alıcı, işbu sözleşme çerçevesinde verdiği kişisel bilgilerin doğru olduğunu beyan ve taahhüt eder. Kişisel bilgilerin doğruluğundan Alıcı sorumludur. Satıcı'nın bu bilgilerin doğru olmaması nedeniyle uğrayacağı tüm zararlardan Alıcı sorumludur.</li>
    </ol>
    <h2 style={subHeadingStyle}>MADDE 5- CAYMA HAKKININ OLMAYIŞI</h2>
    <p style={paragraphStyle}>
      Satıcı ile tüketici sıfatını haiz Alıcı arasında işbu Mesafeli Satış Sözleşmesi'nin akdedilmesinden itibaren 14 gün içinde ve Mesafeli Sözleşmeler Yönetmeliği Madde 9 hükümleri uyarınca hiçbir hukuki ve cezai sorumluluk üstlenmeksizin, hiçbir gerekçe göstermeksizin ve cezai şart ödemeksizin tüketicinin hizmeti reddederek cayma hakkına sahip olması ile birlikte; Mesafeli Sözleşmeler Yönetmeliği Madde 15'in 1. fıkrasının (c) bendi uyarınca, çabuk bozulabilen veya son kullanma tarihi geçebilecek malların teslimine ilişkin sözleşmelerde, (ç) bendi uyarınca tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış olan mallardan; iadesi sağlık ve hijyen açısından uygun olmayanların teslimine ilişkin sözleşmelerde ve aynı maddenin (g) bendi uyarınca, belirli bir tarihte veya dönemde yapılması gereken, konaklama, eşya taşıma, araba kiralama, yiyecek-içecek tedariki ve eğlence veya dinlenme amacıyla yapılan boş zamanın değerlendirilmesine ilişkin sözleşmelerde tüketici cayma hakkını kullanamaz. Bu çerçevede Alıcı'nın cayma hakkı bulunmamaktadır.
    </p>
    <h2 style={subHeadingStyle}>MADDE 6- YETKİLİ MAHKEME</h2>
    <p style={paragraphStyle}>
      İşbu sözleşmenin uygulanmasında, Sanayi ve Ticaret Bakanlığınca ilan edilen değere kadar Tüketici Hakem Heyetleri ile ALICI'nın veya SATICI'nın yerleşim yerindeki Tüketici Mahkemeleri yetkilidir.
    </p>
    <p style={paragraphStyle}>
      Siparişin gerçekleşmesi durumunda ALICI işbu sözleşmenin tüm koşullarını kabul etmiş sayılır.
    </p>
    <div style={{...paragraphStyle, marginTop: 32}}>
      <b>SATICI</b><br />
      Başpınarlar Et Entegre &amp; Steak House<br />
      (Başpınarlar Gıda Hayvancılık Restoran Sanayi ve Ticaret limited Şirketi)
      <br /><br />
      <b>ALICI</b><br />
      <span style={fieldStyle}>{'{_aliciad_} {_alicisoyad_}'}</span>
    </div>
  </div>
);

export default DistanceSalesAgreement;
