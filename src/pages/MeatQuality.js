import React from "react";
import "../styles/MeatQuality.css";

const MeatQuality = () => (
  <div className="meat-quality-container">
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
  </div>
);

export default MeatQuality;
