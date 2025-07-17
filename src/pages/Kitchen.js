import React from "react";
import { Link } from "react-router-dom";

const Kitchen = () => {
  return (
    <>
      <div style={{ background: '#111', color: '#fff', padding: '4rem 0', textAlign: 'center', marginBottom: '2rem', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', marginTop: '7rem', zIndex: 0 }}>
        <h1 style={{ color: '#fff', fontSize: 36, fontWeight: 800, letterSpacing: 1, textShadow: '0 2px 8px #000', margin: 0 }}>BAŞPINARLAR MUTFAK</h1>
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
        <h2 style={{ color: '#800020', fontWeight: 700, fontSize: 28, marginBottom: 16 }}>Hoş Geldiniz!</h2>
        <p style={{ fontSize: 20, color: '#222', fontWeight: 500, lineHeight: 1.6, margin: '18px 0 32px 0' }}>
          Başpınarlar Mutfağı'nda; mutfağımızdan güncel haberler, lezzetli yemek tarifleri, püf noktalar ve sizden gelen yorumlar gibi birçok içeriğe ulaşabilirsiniz. Aşağıdaki başlıklara tıklayarak ilgili bölümlere kolayca erişebilirsiniz.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginTop: 32 }}>
          <Link to="/user-recipes" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            background: '#800020', color: '#fff', textDecoration: 'none', borderRadius: 12, padding: '2rem 2.5rem', minWidth: 220, fontSize: 22, fontWeight: 700, boxShadow: '0 4px 16px #80002022', transition: 'transform 0.2s',
          }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-6px) scale(1.04)'}
            onMouseOut={e => e.currentTarget.style.transform = 'none'}
          >
            Sizden Gelenler
            <span style={{ fontSize: 16, fontWeight: 400, marginTop: 8, color: '#fff', opacity: 0.8 }}>Yorum ve deneyimler</span>
          </Link>
          <Link to="/tips" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            background: '#d4af37', color: '#800020', textDecoration: 'none', borderRadius: 12, padding: '2rem 2.5rem', minWidth: 220, fontSize: 22, fontWeight: 700, boxShadow: '0 4px 16px #d4af3722', transition: 'transform 0.2s',
          }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-6px) scale(1.04)'}
            onMouseOut={e => e.currentTarget.style.transform = 'none'}
          >
            Püf Noktalar
            <span style={{ fontSize: 16, fontWeight: 400, marginTop: 8, color: '#800020', opacity: 0.8 }}>Et ve mutfak tüyoları</span>
          </Link>
          <Link to="/recipes" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            background: '#fff', color: '#800020', textDecoration: 'none', borderRadius: 12, padding: '2rem 2.5rem', minWidth: 220, fontSize: 22, fontWeight: 700, boxShadow: '0 4px 16px #80002022', border: '2px solid #800020', transition: 'transform 0.2s',
          }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-6px) scale(1.04)'}
            onMouseOut={e => e.currentTarget.style.transform = 'none'}
          >
            Yemek Tarifleri
            <span style={{ fontSize: 16, fontWeight: 400, marginTop: 8, color: '#800020', opacity: 0.8 }}>Lezzetli tarifler</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Kitchen; 