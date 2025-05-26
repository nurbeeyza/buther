import React from "react";
import "./Branches.css";

const Branches = () => {
  const branches = [
    {
      id: 1,
      name: "BAŞPINARLAR ET ENTEGRE TESİSİ",
      description:
        "Eskişehir ESTİM Toptancılar Sitesinde bulunan entegre tesisimiz, yüksek kalitede, avrupa standartlarında et ve hazırlanmış et ürünlerini, işinin ehli personelimizle Türk gıda kodekslerine uygun, sağlıklı ve hijyenik bir ortamda üretimini yapmaktadır.",
      hours: "Pazartesi-Cumartesi 08.00-18.00",
      phone: "0 222 228 00 93",
      address:
        "75.Yıl (Sultandere) Mh. ESTİM Toptancılar Sitesi H Blok No:21 Odunpazarı/ESKİŞEHİR",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d98171.2095313107!2d30.527228496288355!3d39.74301347083766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x14cc3b6994a8217b%3A0xe8abba33ecd88399!2s75Y%C4%B1l%20Mh%2C%20P%C4%B1narhisar%20Sk.%20Estim%20Toptanc%C4%B1lar%20Sitesi%20H%20Blok%20NO%3A21%2C%2026250%20Odunpazar%C4%B1%2FEski%C5%9Fehir!3m2!1d39.743042599999995!2d30.6096294!5e0!3m2!1str!2str!4v1703055477859!5m2!1str!2str",
      icon: "fa-industry",
    },
    {
      id: 2,
      name: "OSMANGAZİ KASAP & ŞARKÜTERİ",
      description:
        "Eskişehir'in merkezinde Osmangazi mahallesinde modern ve geniş ortamıyla, BAŞPINARLAR kalite ve güvencesiyle üretilen et ve hazırlanmış et ürünlerini, ayrıca ete dair aradığınız herşeyi bulabileceğiniz parakende satış magazamız.",
      hours: "Haftanın Her Günü 08.00-20.00",
      phone: "0 222 225 83 48",
      address: "Osmangazi Mh. Kemer Cad. No:57/B Odunpazarı/ESKİŞEHİR",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d98130.34995522114!2d30.41016869776599!3d39.771684765442785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x14cc17eda653b3af%3A0xfa1c852d085000ec!2sOsmangazi%2C%20Kemer%20Sk.%20no%3A57%2FB%2C%2026230%20Odunpazar%C4%B1%2FEski%C5%9Fehir!3m2!1d39.7717139!2d30.4925696!5e0!3m2!1str!2str!4v1703055511337!5m2!1str!2str",
      icon: "fa-store",
    },
    {
      id: 3,
      name: "KÖPRÜBAŞI KASAP & ŞARKÜTERİ / STEAK HOUSE",
      description:
        "Eskişehir'in merkezinde modern ortamıyla, BAŞPINARLAR kalite ve güvencesiyle üretilen et ve hazırlanmış et ürünlerini, zengin şarküteri ürünlerini bulabileceğiniz Fabrika Satış Mağazası.",
      hours: "Haftanın Her Günü 08.00-20.00",
      phone: "0 532 419 65 08",
      address: "Arifiye Mh. Köprübaşı Cad. No:14 B Odunpazarı/ESKİŞEHİR",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.435795180342!2d30.516572075685456!3d39.77477439446135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc1607a9b9bc13%3A0x5ead731bf03897fe!2zQXJpZml5ZSwgS8O2cHLDvGJhxZ_EsSBDZC4gTm86MTQsIDI2MDEwIE9kdW5wYXphcsSxL0Vza2nFn2VoaXI!5e0!3m2!1str!2str!4v1714551921064!5m2!1str!2str",
      icon: "fa-utensils",
    },
  ];

  return (
    <div className="branches-page">
      <div className="branches-hero">
        <div className="container">
          <h1>ŞUBELERİMİZ</h1>
          <p>Başpınarlar Et ürünlerine ulaşabileceğiniz satış noktalarımız</p>
        </div>
      </div>

      <div className="container">
        <div className="branches-content">
          {branches.map((branch) => (
            <div className="branch-card" key={branch.id}>
              <div className="branch-header">
                <div className="branch-icon">
                  <i className={`fas ${branch.icon}`}></i>
                </div>
                <h2>{branch.name}</h2>
              </div>

              <div className="branch-details">
                <div className="branch-info">
                  <p className="branch-description">{branch.description}</p>
                  <ul className="branch-contact-info">
                    <li>
                      <i className="fas fa-clock"></i>
                      <span>
                        <strong>Çalışma Saatleri:</strong> {branch.hours}
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-phone-alt"></i>
                      <span>
                        <strong>Telefon:</strong> {branch.phone}
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      <span>
                        <strong>Adres:</strong> {branch.address}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="branch-map">
                  <iframe
                    src={branch.mapUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Google Map - ${branch.name}`}
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Branches;
