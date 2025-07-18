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
        Mağazamızda verilen tüm servisler ve <b>www.BAŞPINARLAR.NET</b>{" "}
        adresinde kayıtlı{" "}
        <b>BAŞPINARLAR HAYVANCILIK GIDA RESTORAN SAN. VE TİC. LTD.ŞKT.</b>{" "}
        firmamıza aittir ve firmamız tarafından işletilir.
      </p>
      <p style={paragraphStyle}>
        Firmamız, çeşitli amaçlarla kişisel veriler toplayabilir. Aşağıda,
        toplanan kişisel verilerin nasıl ve ne şekilde toplandığı, bu verilerin
        nasıl ve ne şekilde korunduğu belirtilmiştir.
      </p>
      <h2 style={subHeadingStyle}>Kişisel Bilgilerin Toplanması</h2>
      <p style={paragraphStyle}>
        Üyelik veya mağazamız üzerindeki çeşitli form ve anketlerin doldurulması
        suretiyle üyelerin kendileriyle ilgili bir takım kişisel bilgileri
        (isim-soy isim, firma bilgileri, telefon, adres veya e-posta adresleri
        gibi) mağazamız tarafından işin doğası gereği toplanmaktadır.
      </p>
      <p style={paragraphStyle}>
        Firmamız bazı dönemlerde müşterilerine ve üyelerine kampanya bilgileri,
        yeni ürünler hakkında bilgiler, promosyon teklifleri gönderebilir.
        Üyelerimiz bu gibi bilgileri alıp almama konusunda her türlü seçimi üye
        olurken yapabilir, sonrasında üye girişi yaptıktan sonra hesap bilgileri
        bölümünden bu seçimi değiştirebilir ya da kendisine gelen bilgilendirme
        iletisindeki linkle bildirim yapabilir.
      </p>
      <p style={paragraphStyle}>
        Mağazamız üzerinden veya eposta ile gerçekleştirilen onay sürecinde,
        üyelerimiz tarafından mağazamıza elektronik ortamdan iletilen kişisel
        bilgiler, üyelerimiz ile yaptığımız "Kullanıcı Sözleşmesi" ile
        belirlenen amaçlar ve kapsam dışında üçüncü kişilere açıklanmayacaktır.
      </p>
      <h2 style={subHeadingStyle}>Veri Güvenliği ve Kullanımı</h2>
      <p style={paragraphStyle}>
        Sistemle ilgili sorunların tanımlanması ve verilen hizmet ile ilgili
        çıkabilecek sorunların veya uyuşmazlıkların hızla çözülmesi için,
        firmamız, üyelerinin IP adresini kaydetmekte ve bunu kullanmaktadır. IP
        adresleri, kullanıcıları genel bir şekilde tanımlamak ve kapsamlı
        demografik bilgi toplamak amacıyla da kullanılabilir.
      </p>
      <p style={paragraphStyle}>
        Firmamız, Üyelik Sözleşmesi ile belirlenen amaçlar ve kapsam dışında da,
        talep edilen bilgileri kendisi veya işbirliği içinde olduğu kişiler
        tarafından doğrudan pazarlama yapmak amacıyla kullanabilir. Kişisel
        bilgiler, gerektiğinde kullanıcıyla temas kurmak için de kullanılabilir.
        Firmamız tarafından talep edilen bilgiler veya kullanıcı tarafından
        sağlanan bilgiler veya mağazamız üzerinden yapılan işlemlerle ilgili
        bilgiler; firmamız ve işbirliği içinde olduğu kişiler tarafından,
        "Üyelik Sözleşmesi" ile belirlenen amaçlar ve kapsam dışında da,
        üyelerimizin kimliği ifşa edilmeden çeşitli istatistiksel
        değerlendirmeler, veri tabanı oluşturma ve pazar araştırmalarında
        kullanılabilir.
      </p>
      <p style={paragraphStyle}>
        Firmamız, gizli bilgileri kesinlikle özel ve gizli tutmayı, bunu bir sır
        saklama yükümü olarak addetmeyi ve gizliliğin sağlanması ve
        sürdürülmesi, gizli bilginin tamamının veya herhangi bir kısmının kamu
        alanına girmesini veya yetkisiz kullanımını veya üçüncü bir kişiye
        ifşasını önlemek için gerekli tüm tedbirleri almayı ve gerekli özeni
        göstermeyi taahhüt etmektedir.
      </p>
      <h2 style={subHeadingStyle}>Kredi Kartı Güvenliği</h2>
      <p style={paragraphStyle}>
        Firmamız, alışveriş sitelerimizden alışveriş yapan kredi kartı
        sahiplerinin güvenliğini ilk planda tutmaktadır. Kredi kartı
        bilgileriniz hiçbir şekilde sistemimizde saklanmamaktadır.
      </p>
      <p style={paragraphStyle}>
        Alışveriş sırasında kullanılan kredi kartı ile ilgili bilgiler alışveriş
        sitelerimizden bağımsız olarak 128 bit SSL (Secure Sockets Layer)
        protokolü ile şifrelenip sorgulanmak üzere ilgili bankaya ulaştırılır.
        Kartın kullanılabilirliği onaylandığı takdirde alışverişe devam edilir.
        Kartla ilgili hiçbir bilgi tarafımızdan görüntülenemediğinden ve
        kaydedilmediğinden, üçüncü şahısların herhangi bir koşulda bu bilgileri
        ele geçirmesi engellenmiş olur.
      </p>
      <p style={paragraphStyle}>
        Online olarak kredi kartı ile verilen siparişlerin ödeme/fatura/teslimat
        adresi bilgilerinin güvenilirliği firmamız tarafından Kredi Kartları
        Dolandırıcılığı'na karşı denetlenmektedir. Bu yüzden, alışveriş
        sitelerimizden ilk defa sipariş veren müşterilerin siparişlerinin
        tedarik ve teslimat aşamasına gelebilmesi için öncelikle finansal ve
        adres/telefon bilgilerinin doğruluğunun onaylanması gereklidir. Bu
        bilgilerin kontrolü için gerekirse kredi kartı sahibi müşteri ile veya
        ilgili banka ile irtibata geçilmektedir.
      </p>
      <p style={paragraphStyle}>
        Üye olurken verdiğiniz tüm bilgilere sadece siz ulaşabilir ve siz
        değiştirebilirsiniz. Üye giriş bilgilerinizi güvenli koruduğunuz
        takdirde başkalarının sizinle ilgili bilgilere ulaşması ve bunları
        değiştirmesi mümkün değildir. Bu amaçla, üyelik işlemleri sırasında 128
        bit SSL güvenlik alanı içinde hareket edilir. Bu sistem kırılması mümkün
        olmayan bir uluslararası bir şifreleme standardıdır.
      </p>
      <h2 style={subHeadingStyle}>
        Mail Order Kredi Kartı Bilgileri Güvenliği
      </h2>
      <p style={paragraphStyle}>
        Kredi kartı mail-order yöntemi ile bize göndereceğiniz kimlik ve kredi
        kart bilgileriniz firmamız tarafından gizlilik prensibine göre
        saklanacaktır. Bu bilgiler olası banka ile oluşabilecek kredi kartından
        para çekim itirazlarına karşı 60 gün süre ile bekletilip daha sonrasında
        imha edilmektedir. Sipariş ettiğiniz ürünlerin bedeli karşılığında bize
        göndereceğiniz tarafınızdan onaylı mail-order formu bedeli dışında
        herhangi bir bedelin kartınızdan çekilmesi halinde doğal olarak bankaya
        itiraz edebilir ve bu tutarın ödenmesini engelleyebileceğiniz için bir
        risk oluşturmamaktadır.
      </p>
      <h2 style={subHeadingStyle}>Üçüncü Taraf Web Siteleri ve Uygulamalar</h2>
      <p style={paragraphStyle}>
        Mağazamız, web sitesi dâhilinde başka sitelere link verebilir. Firmamız,
        bu linkler vasıtasıyla erişilen sitelerin gizlilik uygulamaları ve
        içeriklerine yönelik herhangi bir sorumluluk taşımamaktadır. Firmamıza
        ait sitede yayınlanan reklamlar, reklamcılık yapan iş ortaklarımız
        aracılığı ile kullanıcılarımıza dağıtılır. İş bu sözleşmedeki Gizlilik
        Politikası Prensipleri, sadece mağazamızın kullanımına ilişkindir,
        üçüncü taraf web sitelerini kapsamaz.
      </p>
      <h2 style={subHeadingStyle}>İstisnai Haller</h2>
      <p style={paragraphStyle}>
        Aşağıda belirtilen sınırlı hallerde firmamız, işbu "Gizlilik Politikası"
        hükümleri dışında kullanıcılara ait bilgileri üçüncü kişilere
        açıklayabilir. Bu durumlar sınırlı sayıda olmak üzere;
      </p>
      <ul
        style={{
          fontSize: 18,
          marginBottom: 18,
          marginLeft: 24,
          color: "#222",
        }}
      >
        <li>
          Kanun, Kanun Hükmünde Kararname, Yönetmelik v.b. yetkili hukuki
          otorite tarafından çıkarılan ve yürürlülükte olan hukuk kurallarının
          getirdiği zorunluluklara uymak;
        </li>
        <li>
          Mağazamızın kullanıcılarla akdettiği "Üyelik Sözleşmesi"'nin ve diğer
          sözleşmelerin gereklerini yerine getirmek ve bunları uygulamaya koymak
          amacıyla;
        </li>
        <li>
          Yetkili idari ve adli otorite tarafından usulüne göre yürütülen bir
          araştırma veya soruşturmanın yürütümü amacıyla kullanıcılarla ilgili
          bilgi talep edilmesi;
        </li>
        <li>
          Kullanıcıların hakları veya güvenliklerini korumak için bilgi vermenin
          gerekli olduğu hallerdir.
        </li>
      </ul>
      <h2 style={subHeadingStyle}>E-Posta Güvenliği</h2>
      <p style={paragraphStyle}>
        Mağazamızın Müşteri Hizmetleri'ne, herhangi bir siparişinizle ilgili
        olarak göndereceğiniz e-postalarda, asla kredi kartı numaranızı veya
        şifrelerinizi yazmayınız. E-postalarda yer alan bilgiler üçüncü şahıslar
        tarafından görülebilir. Firmamız e-postalarınızdan aktarılan bilgilerin
        güvenliğini hiçbir koşulda garanti edemez.
      </p>
      <h2 style={subHeadingStyle}>Tarayıcı Çerezleri</h2>
      <p style={paragraphStyle}>
        Firmamız, mağazamızı ziyaret eden kullanıcılar ve kullanıcıların web
        sitesini kullanımı hakkındaki bilgileri teknik bir iletişim dosyası
        (Çerez-Cookie) kullanarak elde edebilir. Bahsi geçen teknik iletişim
        dosyaları, ana bellekte saklanmak üzere bir internet sitesinin
        kullanıcının tarayıcısına (browser) gönderdiği küçük metin dosyalarıdır.
        Teknik iletişim dosyası site hakkında durum ve tercihleri saklayarak
        İnternet'in kullanımını kolaylaştırır.
      </p>
      <p style={paragraphStyle}>
        Teknik iletişim dosyası, siteyi kaç kişinin ziyaret ettiğini, bir
        kişinin siteyi hangi amaçla, kaç kez ziyaret ettiğini ve ne kadar sitede
        kaldıkları hakkında istatistiksel bilgileri elde etmeye ve kullanıcılar
        için özel tasarlanmış kullanıcı sayfalarından dinamik olarak reklam ve
        içerik üretilmesine yardımcı olur. Teknik iletişim dosyası, ana bellekte
        veya e-postanızdan veri veya başkaca herhangi bir kişisel bilgi almak
        için tasarlanmamıştır. Tarayıcıların pek çoğu başta teknik iletişim
        dosyasını kabul eder biçimde tasarlanmıştır ancak kullanıcılar dilerse
        teknik iletişim dosyasının gelmemesi veya teknik iletişim dosyasının
        gönderildiğinde uyarı verilmesini sağlayacak biçimde ayarları
        değiştirebilirler.
      </p>
      <p style={paragraphStyle}>
        Firmamız, işbu "Gizlilik Politikası" hükümlerini dilediği zaman sitede
        yayınlamak veya kullanıcılara elektronik posta göndermek veya sitesinde
        yayınlamak suretiyle değiştirebilir. Gizlilik Politikası hükümleri
        değiştiği takdirde, yayınlandığı tarihte yürürlük kazanır.
      </p>
      <div style={contactBoxStyle}>
        <b>
          Gizlilik politikamız ile ilgili her türlü soru ve önerileriniz için{" "}
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
        <b>Firma Ünvanı:</b> BAŞPINARLAR HAYVANCILIK GIDA RESTORAN SAN VE TİC.
        LMTD.Ş.
        <br />
        <b>Adres:</b> 75.Yıl Mh. ESTİM Toptancılar Sitesi H Blok No:21
        ODUNPAZARI ESKİŞEHİR
        <br />
        <b>Eposta:</b> info@baspinarlaret.com
        <br />
        <b>Tel:</b> 0222 228 0093
      </div>
    </div>
  </>
);

export default PrivacySecurity;
