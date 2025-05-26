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

const CancellationPolicy = () => (
  <div style={sectionStyle}>
    <h1 style={headingStyle}>TÜKETİCİ HAKLARI – CAYMA – İPTAL İADE KOŞULLARI</h1>
    <h2 style={subHeadingStyle}>GENEL</h2>
    <p style={paragraphStyle}>
      Kullanmakta olduğunuz <b>www.Başpınarlar.net</b> web sitesi üzerinden elektronik ortamda sipariş verdiğiniz takdirde, size sunulan ön bilgilendirme formunu ve mesafeli satış sözleşmesini kabul etmiş sayılırsınız.<br />
      Alıcılar, satın aldıkları ürünün satış ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği (RG:27.11.2014/29188) hükümleri ile yürürlükteki diğer yasalara tabidir.<br />
      Ürün sevkiyat masrafı olan kargo ücretleri alıcılar tarafından ödenecektir.<br />
      Satın alınan her bir ürün, 30 günlük yasal süreyi aşmamak kaydı ile alıcının gösterdiği adresteki kişi ve/veya kuruluşa teslim edilir. Bu süre içinde ürün teslim edilmez ise, Alıcılar sözleşmeyi sona erdirebilir.<br />
      Satın alınan ürün, eksiksiz ve siparişte belirtilen niteliklere uygun teslim edilmek zorundadır.<br />
      Satın alınan ürünün satılmasının imkansızlaşması durumunda, satıcı bu durumu öğrendiğinden itibaren 3 gün içinde yazılı olarak alıcıya bu durumu bildirmek zorundadır. 14 gün içinde de toplam bedel Alıcı'ya iade edilmek zorundadır.
    </p>
    <h2 style={subHeadingStyle}>SATIN ALINAN ÜRÜN BEDELİ ÖDENMEZ İSE</h2>
    <p style={paragraphStyle}>
      Alıcı, satın aldığı ürün bedelini ödemez veya banka kayıtlarında iptal ederse, Satıcının ürünü teslim yükümlülüğü sona erer.
    </p>
    <h2 style={subHeadingStyle}>KREDİ KARTININ YETKİSİZ KULLANIMI İLE YAPILAN ALIŞVERİŞLER</h2>
    <p style={paragraphStyle}>
      Ürünün tesliminden sonra Alıcı'ya ait kartın Alıcı'nın kusurundan kaynaklanmayan bir şekilde yetkisiz kişilerce haksız veya hukuka aykırı olarak kullanılması nedeni ile ilgili banka veya finans kuruluşunun ürün bedelini Satıcı'ya ödememesi halinde, Alıcı, borcun gecikmeli ifasından dolayı Satıcı'nın oluşan zarar ve ziyanını ödemeyi kabul eder.
    </p>
    <h2 style={subHeadingStyle}>ÖNGÖRÜLEMEYEN SEBEPLERLE ÜRÜN SÜRESİNDE TESLİM EDİLEMEZ İSE</h2>
    <p style={paragraphStyle}>
      Satıcı'nın öngöremeyeceği mücbir sebepler oluşursa ve ürün süresinde teslim edilemez ise, durum Alıcı'ya bildirilir. Alıcı, siparişin iptalini, ürünün benzeri ile değiştirilmesini veya engel ortadan kalkana dek teslimatın ertelenmesini talep edebilir. Alıcı siparişi iptal ederse; ödemeyi nakit ile yapmış ise iptalinden itibaren 14 gün içinde kendisine nakden bu ücret ödenir. Alıcı, ödemeyi kredi kartı ile yapmış ise ve iptal ederse, bu iptalden itibaren yine 14 gün içinde ürün bedeli bankaya iade edilir, ancak bankanın alıcının hesabına 2-3 hafta içerisinde aktarması olasıdır.
    </p>
    <h2 style={subHeadingStyle}>ALICININ ÜRÜNÜ KONTROL ETME YÜKÜMLÜLÜĞÜ</h2>
    <p style={paragraphStyle}>
      Alıcı, sözleşme konusu mal/hizmeti teslim almadan önce muayene edecek; ezik, kırık, ambalajı yırtılmış vb. hasarlı ve ayıplı mal/hizmeti kargo şirketinden teslim almayacaktır. Teslim alınan mal/hizmetin hasarsız ve sağlam olduğu kabul edilecektir. ALICI, teslimden sonra mal/hizmeti özenle korunmak zorundadır.
    </p>
    <h2 style={subHeadingStyle}>CAYMA HAKKININ OLMAYIŞI</h2>
    <p style={paragraphStyle}>
      Satıcı ile tüketici sıfatını haiz Alıcı arasında işbu Mesafeli Satış Sözleşmesi'nin akdedilmesinden itibaren 14 gün içinde ve Mesafeli Sözleşmeler Yönetmeliği Madde 9 hükümleri uyarınca hiçbir hukuki ve cezai sorumluluk üstlenmeksizin, hiçbir gerekçe göstermeksizin ve cezai şart ödemeksizin tüketicinin hizmeti reddederek cayma hakkına sahip olması ile birlikte; Mesafeli Sözleşmeler Yönetmeliği Madde 15'in 1. fıkrasının (c) bendi uyarınca, çabuk bozulabilen veya son kullanma tarihi geçebilecek malların teslimine ilişkin sözleşmelerde, (ç) bendi uyarınca tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış olan mallardan; iadesi sağlık ve hijyen açısından uygun olmayanların teslimine ilişkin sözleşmelerde ve aynı maddenin (g) bendi uyarınca, belirli bir tarihte veya dönemde yapılması gereken, konaklama, eşya taşıma, araba kiralama, yiyecek-içecek tedariki ve eğlence veya dinlenme amacıyla yapılan boş zamanın değerlendirilmesine ilişkin sözleşmelerde tüketici cayma hakkını kullanamaz. Bu çerçevede Alıcı'nın cayma hakkı bulunmamaktadır.
    </p>
  </div>
);

export default CancellationPolicy;
