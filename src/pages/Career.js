import React from "react";

const Career = () => {
  return (
    <>
      <div style={{ background: '#111', color: '#fff', padding: '4rem 0', textAlign: 'center', marginBottom: '2rem', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', marginTop: '7rem', zIndex: 0 }}>
        <h1 style={{ color: '#fff', fontSize: 36, fontWeight: 800, letterSpacing: 1, textShadow: '0 2px 8px #000', margin: 0 }}>KARİYER</h1>
      </div>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '40px 32px 48px 32px',
          background: '#fff',
          borderRadius: '18px',
          boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
          fontFamily: "'Segoe UI', 'Arial', sans-serif",
        }}
      >
        {/* Üst: Görsel ve Başlık yan yana */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 40, marginBottom: 24 }}>
          <img
            src="/images/career.jpg"
            alt="Kariyer"
            style={{ width: '100%', maxWidth: '600px', borderRadius: '16px', boxShadow: '0 4px 24px #80002033', objectFit: 'cover', border: '4px solid #800020' }}
          />
          <div>
            <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: 1, color: '#800020', textShadow: '0 2px 8px #80002022', margin: 0, lineHeight: 1.1, textAlign: 'left' }}>
              BAŞPINARLAR<br />KARİYER
            </h2>
            <p style={{ fontSize: 20, color: '#222', fontWeight: 500, lineHeight: 1.6, margin: '18px 0 0 0' }}>
              Modern ve huzurlu bir ortamda deneyim kazanmak isterseniz, başvuru formunu doldurarak bize ulaşın.
            </p>
          </div>
        </div>
        {/* Açıklama metni */}
        <div style={{ fontSize: 20, color: '#222', fontWeight: 500, lineHeight: 1.6, margin: '0 auto 40px auto', background: '#f8f8f8', borderRadius: 10, boxShadow: '0 2px 8px #80002011', padding: '18px 22px', borderLeft: '6px solid #800020', maxWidth: 900 }}>
          Biz geniş bir aileyiz; modern ve huzurlu bir ortamda deneyim kazanmak isterseniz,<br />
          başvuru formunu doldurarak, CV'nizle birlikte bize ulaştırın.<br />
          <span style={{ color: '#800020', fontWeight: 700 }}>Size en yakın zamanda geri döneceğiz.</span><br />
          <span style={{ color: '#000', fontWeight: 700 }}>Bize gösterdiğiniz ilgiden dolayı teşekkür ederiz!</span>
        </div>
        {/* İş Başvuru Formu */}
        <h2 style={{ fontSize: 28, color: '#800020', fontWeight: 700, marginBottom: 18, letterSpacing: 0.5, textAlign: 'center' }}>İş Başvuru Formu</h2>
        <form style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 18, background: '#f9f9f9', borderRadius: 12, boxShadow: '0 2px 8px #80002011', padding: '2rem' }}>
          <label style={{ textAlign: 'left', fontWeight: 600, fontSize: 19, color: '#800020' }}>
            Başvurduğun Pozisyon *
            <select name="position" required style={{ marginTop: 10, padding: 14, width: '100%', borderRadius: 8, border: '2px solid #800020', fontSize: 19, background: '#fff', color: '#222' }}>
              <option value="">Pozisyon Seçiniz</option>
              <option value="Muhasebe Elemanı">Muhasebe Elemanı</option>
              <option value="Genel Başvuru">Genel Başvuru</option>
            </select>
          </label>
          <label style={{ textAlign: 'left', fontWeight: 600, fontSize: 19, color: '#800020' }}>
            Ad/Soyad *
            <input type="text" name="name" required style={{ marginTop: 10, padding: 14, width: '100%', borderRadius: 8, border: '2px solid #800020', fontSize: 19, background: '#f8f8f8', color: '#222' }} />
          </label>
          <label style={{ textAlign: 'left', fontWeight: 600, fontSize: 19, color: '#800020' }}>
            Email *
            <input type="email" name="email" required style={{ marginTop: 10, padding: 14, width: '100%', borderRadius: 8, border: '2px solid #800020', fontSize: 19, background: '#f8f8f8', color: '#222' }} />
          </label>
          <label style={{ textAlign: 'left', fontWeight: 600, fontSize: 19, color: '#800020' }}>
            Telefon *
            <input type="tel" name="phone" required style={{ marginTop: 10, padding: 14, width: '100%', borderRadius: 8, border: '2px solid #800020', fontSize: 19, background: '#f8f8f8', color: '#222' }} />
          </label>
          <label style={{ textAlign: 'left', fontWeight: 600, fontSize: 19, color: '#800020' }}>
            İkamet Adresi
            <input type="text" name="address" style={{ marginTop: 10, padding: 14, width: '100%', borderRadius: 8, border: '2px solid #800020', fontSize: 19, background: '#f8f8f8', color: '#222' }} />
          </label>
          <label style={{ textAlign: 'left', fontWeight: 600, fontSize: 19, color: '#800020' }}>
            Kısaca Kendinden Bahset
            <textarea name="about" rows={2} style={{ marginTop: 10, padding: 14, width: '100%', borderRadius: 8, border: '2px solid #800020', fontSize: 19, background: '#f8f8f8', color: '#222', resize: 'vertical' }} />
          </label>
          <label style={{ textAlign: 'left', fontWeight: 600, fontSize: 19, color: '#800020' }}>
            İş Tecrübelerin
            <textarea name="experience" rows={2} style={{ marginTop: 10, padding: 14, width: '100%', borderRadius: 8, border: '2px solid #800020', fontSize: 19, background: '#f8f8f8', color: '#222', resize: 'vertical' }} />
          </label>
          <label style={{ textAlign: 'left', fontWeight: 600, fontSize: 19, color: '#800020' }}>
            Eğitim Durumu
            <input type="text" name="education" value="İlköğretim" readOnly style={{ marginTop: 10, padding: 14, width: '100%', borderRadius: 8, border: '2px solid #800020', fontSize: 19, background: '#f8f8f8', color: '#222' }} />
          </label>
          <label style={{ textAlign: 'left', fontWeight: 600, fontSize: 19, color: '#800020' }}>
            Son mezun olduğun okul:
            <input type="text" name="lastSchool" style={{ marginTop: 10, padding: 14, width: '100%', borderRadius: 8, border: '2px solid #800020', fontSize: 19, background: '#f8f8f8', color: '#222' }} />
          </label>
          <button type="submit" style={{ marginTop: 18, background: '#800020', color: '#fff', padding: '1rem 2rem', border: 'none', borderRadius: 8, fontSize: 20, fontWeight: 700, letterSpacing: 1, cursor: 'pointer', boxShadow: '0 2px 8px #80002022', transition: 'background 0.2s' }}>Başvur</button>
        </form>
      </div>
    </>
  );
};

export default Career;
