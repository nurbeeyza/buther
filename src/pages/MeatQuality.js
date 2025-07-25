import React from "react";
import "../styles/MeatQuality.css";

const MeatQuality = () => (
  <div className="meat-quality-container">
    <h2 className="section-title">ET Nasıl Olmalı?</h2>
    <div
      className="et-nasil-olmali-section"
      style={{
        marginBottom: '2rem',
        background: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('/images/et_resimler/etnasil.png') center/cover no-repeat`,
        padding: '1.5rem',
        borderRadius: 8,
        minHeight: 220,
        boxShadow: '0 2px 12px #80002011'
      }}
    >
      <p style={{ fontWeight: 500, color: '#333', fontSize: '1.1rem' }}>
        Etin iyi olması için öncelikli olarak yetiştiği doğanın et yetiştiriciliğine uygun olması gerekir, çevresel koşullar ve hayvanın besin kaynakları etin besleyiciliğini, lezzetini belirleyen en önemli faktörlerdendir.<br/><br/>
        Bir diğer faktör ise hayvanın ırkıdır, eğer ırkı yetiştiği bölge ile uyum göstermese, tüm koşullar uygun olsa bile uygun et verimi alınamaz. Ayrıca iyi et elde etmek için, hayvanın beslenirken, sadece doğal yemler yemesi, uygun olmayan ilaç almaması, asla hormon kullanılmaması gerekir. Bu zengin besin kaynağı yetiştirilen hayvanların etinin mineral bakımından doğru ve yeterli seviyede olmasını sağlamaktadır.
      </p>
    </div>
    <h2 className="section-title">Et Satın Alırken Dikkat Edilmesi Gerekenler?</h2>
    <div
      className="et-satin-alirken-section"
      style={{
        marginBottom: '2rem',
        background: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('/images/et_resimler/satinalirken.png') center/cover no-repeat`,
        padding: '1.5rem',
        borderRadius: 8,
        minHeight: 220,
        boxShadow: '0 2px 12px #80002011'
      }}
    >
      <p style={{ fontWeight: 500, color: '#333', fontSize: '1.1rem' }}>
        Et alırken ilk bakılması gereken şey, sağlık koşullarıdır. Sağlıklı etin anlaşılması için ilk bakılması gereken etin damgasıdır.<br/>
        Tüm etlerin üzerinde, sağlık kontrollerinin yapıldığına ve uygun bir mezbahada kesildiğine dair damga vardır. Genellikle mavi renkli olan bu damga vitrinde gördüğünüz etlerde mutlaka olmalıdır.<br/><br/>
        İkinci olarak kontrol edilmesi gereken şey ise sağlık raporlarıdır, bu raporlar mezbahada resmi veterinerler tarafından düzenlenir ve satış noktalarında bir nüshasının bulunması gerekir. Et alırken bu raporlar sorulmalı ve tarih bakımındanda kontrol edilmelidir.<br/><br/>
        Bunların dışında et alınacak noktanın temiz olması, eti hazırlayacak personelin eldiven kullanmasına ve kişisel hijyeni kontrol edilmelidir. Satın alınacak etler, canlı pembe renkte olmalı, etrafında kararma olmamalıır. Etler reyonda başka ürünlere temas etmemeli, soğukta uygun şartlarda muhafaza ediliyor olmalıdırlar.<br/><br/>
        Et seçildikten sonra hazırlanırken mutlaka uygun yüzeyde, tavuk vb. gibi diğer ürünler ile temas etmeden hazırlanmalıdır. Hazırlandıktan sonra gıdaya uygun ambalaj ile paketlenmeli ve mümkün olan en kısa sürede eve götürülerek buzdolabına konmalıdır.
      </p>
    </div>
    <h1 className="page-title">Aldığımız Etin Kaliteli Olduğunu Nasıl Anlarız?</h1>
    <div className="intro-section">
      <p>Bonfile, kontrfile, T-bone steak, pirzola… Favoriniz hangisi olursa olsun, satın alırken ve pişirirken dikkat etmeniz gereken önemli noktalar var. Mükemmel lezzette bir kırmızı et hazırlamak için öncelikle onu biraz daha yakından tanımaya ne dersiniz?</p>
    </div>
    <div className="quality-section">
      <h2>Etin Kalitesini Anlamanın Yolları</h2>
      <ul className="quality-list">
        <li><b>Renk:</b> Taze dana eti parlak kırmızı, kuzu eti ise açık pembe renkte olur.</li>
        <li><b>Koku:</b> Kaliteli etin kendine has hoş bir kokusu vardır, ağır ve ekşi kokular olmamalı.</li>
        <li><b>Doku:</b> Etin dokusu sıkı ve elastik olmalı, parmakla bastırınca eski haline dönmeli.</li>
        <li><b>Yağ Dağılımı:</b> Mermerimsi yağ dağılımı (marbling) lezzet ve yumuşaklık için önemlidir.</li>
        <li><b>Nem:</b> Et yüzeyi hafif nemli olmalı, aşırı ıslak veya kuru olmamalı.</li>
      </ul>
    </div>
    <div className="time-section">
      <h2>Pişirme Zamanı ve Sıcaklığı</h2>
      <div className="time-grid">
        <div className="time-item">
          <h3>Az Pişmiş (Rare)</h3>
          <p>İç sıcaklık: 50-52°C<br/>Kısa sürede yüksek ateşte pişirilir, içi kırmızı ve sulu kalır.</p>
        </div>
        <div className="time-item">
          <h3>Orta Pişmiş (Medium)</h3>
          <p>İç sıcaklık: 60-65°C<br/>Daha uzun süre pişirilir, içi pembe ve sulu olur.</p>
        </div>
        <div className="time-item">
          <h3>İyi Pişmiş (Well Done)</h3>
          <p>İç sıcaklık: 70°C ve üzeri<br/>Et tamamen pişer, içi kahverengi ve daha az sulu olur.</p>
        </div>
      </div>
    </div>
    <details style={{ marginTop: '2rem' }}>
      <summary style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--primary-color)', fontSize: '1.1rem' }}>tamamını oku</summary>
      <div style={{ marginTop: '1rem', background: '#f8f9fa', padding: '1rem', borderRadius: 8 }}>
        <p>
          Etin iyi olması için öncelikli olarak yetiştiği doğanın et yetiştiriciliğine uygun olması gerekir, çevresel koşullar ve hayvanın besin kaynakları etin besleyiciliğini, lezzetini belirleyen en önemli faktörlerdendir.<br/><br/>
          Bir diğer faktör ise hayvanın ırkıdır, eğer ırkı yetiştiği bölge ile uyum göstermese, tüm koşullar uygun olsa bile uygun et verimi alınamaz. Ayrıca iyi et elde etmek için, hayvanın beslenirken, sadece doğal yemler yemesi, uygun olmayan ilaç almaması, asla hormon kullanılmaması gerekir. Bu zengin besin kaynağı yetiştirilen hayvanların etinin mineral bakımından doğru ve yeterli seviyede olmasını sağlamaktadır.
        </p>
      </div>
    </details>
  </div>
);

export default MeatQuality;
