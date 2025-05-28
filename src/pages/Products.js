import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tüm Ürünler', count: 37 },
    { id: 'beef-steak', name: 'BEEF\'S STEAK', count: 7 },
    { id: 'processed-meats', name: 'İŞLENMİŞ ETLER', count: 6 },
    { id: 'butcher-group', name: 'KASAP GRUBU', count: 8 },
    { id: 'delicatessen-group', name: 'ŞARKÜTERİ GRUBU', count: 5 },
    { id: 'pastirma', name: 'PASTIRMA', count: 2 },
    { id: 'sucuk', name: 'SUCUK', count: 6 },
    { id: 'kofte', name: 'KÖFTE', count: 3 }
  ];

  const allProducts = {
    'beef-steak': [
      { id: 1, name: 'Dallas Steak', price: '950,00₺', weight: 'kg', image: '/images/et_resimler/dallas_steak.png', link: '/products/beef-steak/1' },
      { id: 2, name: 'Dana Antrikot', price: '800,00₺', weight: 'kg', image: '/images/et_resimler/dana_antrikot.png', link: '/products/beef-steak/2' },
      { id: 3, name: 'Dana Asado', price: '800,00₺', weight: 'kg', image: '/images/et_resimler/dana_asado.png', link: '/products/beef-steak/3' },
      { id: 4, name: 'Dana Bonfile', price: '950,00₺', weight: 'kg', image: '/images/et_resimler/dana_bonfile.png', link: '/products/beef-steak/4' },
      { id: 5, name: 'Dana Kemikli Kaburga', price: '700,00₺', weight: 'kg', image: '/images/et_resimler/dana_kemiklikaburga.png', link: '/products/beef-steak/5' },
      { id: 6, name: 'Dana Pirzola', price: '900,00₺', weight: 'kg', image: '/images/et_resimler/dana_pirzola.png', link: '/products/beef-steak/6' },
      { id: 7, name: 'T-Bone Steak', price: '950,00₺', weight: 'kg', image: '/images/et_resimler/t-bonesteak.png', link: '/products/beef-steak/7' }
    ],
    'processed-meats': [
      { id: 8, name: 'Avcı Sosis', price: '1.200,00₺', weight: '1 kg', image: '/images/et_resimler/avci_sosis.png', link: '/products/processed-meats/1' },
      { id: 9, name: 'Dana İsli Et', price: '120,00₺', weight: '80 gr/paket', image: '/images/et_resimler/dana_isli_et.png', link: '/products/processed-meats/2' },
      { id: 10, name: 'Et Çubuğu', price: '300,00₺', weight: '200 gr/paket', image: '/images/et_resimler/et_cubugu.png', link: '/products/processed-meats/3' },
      { id: 11, name: 'Lukanka', price: '400,00₺', weight: '300 gr/paket', image: '/images/et_resimler/lukanka.png', link: '/products/processed-meats/4' },
      { id: 12, name: 'Merguez', price: '250,00₺', weight: '180 gr/paket', image: '/images/et_resimler/merguez.png', link: '/products/processed-meats/5' },
      { id: 13, name: 'Rozbif', price: '250,00₺', weight: '200 gr/paket', image: '/images/et_resimler/rozbif.png', link: '/products/processed-meats/6' }
    ],
    'butcher-group': [
      { id: 14, name: 'Dana Ayna', price: '750,00₺', weight: 'kg', image: '/images/et_resimler/dana_ayna.png', link: '/products/butcher-group/1' },
      { id: 15, name: 'Dana Jülyen', price: '750,00₺', weight: 'kg', image: '/images/et_resimler/dana_jülyen.png', link: '/products/butcher-group/2' },
      { id: 16, name: 'Dana Kaburga Kıyma', price: '300,00₺', weight: '400 gr/paket', image: '/images/et_resimler/dana_kaburga_kiyma.png', link: '/products/butcher-group/3' },
      { id: 17, name: 'Dana Kıyma', price: '240,00₺', weight: '400 gr/paket', image: '/images/et_resimler/dana_kiyma.png', link: '/products/butcher-group/4' },
      { id: 18, name: 'Dana Kontrfile', price: '800,00₺', weight: 'kg', image: '/images/et_resimler/dana_kontrfile.png', link: '/products/butcher-group/5' },
      { id: 19, name: 'Dana Kuşbaşı', price: '680,00₺', weight: 'kg', image: '/images/et_resimler/dana_kusbasi.png', link: '/products/butcher-group/6' },
      { id: 20, name: 'Dana Rosto', price: '700,00₺', weight: 'kg', image: '/images/et_resimler/dana_rosto.png', link: '/products/butcher-group/7' },
      { id: 21, name: 'Kuzu Bel', price: '700,00₺', weight: 'kg', image: '/images/et_resimler/kuzu_bel.png', link: '/products/butcher-group/8' }
    ],
    'delicatessen-group': [
      { id: 22, name: 'Dana Bacon', price: '90,00₺', weight: '100 gr/paket', image: '/images/et_resimler/dana_bacon.png', link: '/products/delicatessen-group/1' },
      { id: 23, name: 'Dana Jambon', price: '85,00₺', weight: '100 gr/paket', image: '/images/et_resimler/dana_jambon.png', link: '/products/delicatessen-group/2' },
      { id: 24, name: 'Dana Kavurma', price: '90,00₺', weight: '100 gr/paket', image: '/images/et_resimler/dana_kavurma.png', link: '/products/delicatessen-group/3' },
      { id: 25, name: 'Dana Salam', price: '85,00₺', weight: '100 gr/paket', image: '/images/et_resimler/dana_salam.png', link: '/products/delicatessen-group/4' },
      { id: 26, name: 'Dana Sosis', price: '80,00₺', weight: '100 gr/paket', image: '/images/et_resimler/dana_sosis.png', link: '/products/delicatessen-group/5' }
    ],
    'pastirma': [
      { id: 27, name: 'Başpınarlar Pastırma', price: '250,00₺', weight: '250 gr/paket', image: '/images/et_resimler/baspinarlar_pastirma.png', link: '/products/pastirma/1' },
      { id: 28, name: 'Dilim Pastırma', price: '100,00₺', weight: '100 gr/paket', image: '/images/et_resimler/dilimli_pastirma.png', link: '/products/pastirma/2' }
    ],
    'sucuk': [
      { id: 29, name: 'Baton Sucuk', price: '350,00₺', weight: '350 gr/paket', image: '/images/et_resimler/baton_sucuk.png', link: '/products/sucuk/1' },
      { id: 30, name: 'Baton Sucuk', price: '1.000,00₺', weight: 'kg', image: '/images/et_resimler/baton_kgsucuk.png', link: '/products/sucuk/2' },
      { id: 31, name: 'Baton Sucuk (Hellim peyniri, Antep fıstıklı)', price: '1.350,00₺', weight: 'kg', image: '/images/et_resimler/baton_sucuk_hellimpeynir.png', link: '/products/sucuk/3' },
      { id: 32, name: 'Dilimli Sucuk', price: '300,00₺', weight: '500 gr/paket', image: '/images/et_resimler/dilim_sucuk.png', link: '/products/sucuk/4' },
      { id: 33, name: 'Kangal Sucuk', price: '550,00₺', weight: 'kg', image: '/images/et_resimler/kangal_sucuk.png', link: '/products/sucuk/5' },
      { id: 34, name: 'Osmanlı Sucuğu', price: '1.200,00₺', weight: 'kg', image: '/images/et_resimler/osmanlı_sucugu.png', link: '/products/sucuk/6' }
    ],
    'kofte': [
      { id: 35, name: 'İnegöl Köfte', price: '220,00₺', weight: '400 gr/paket', image: '/images/et_resimler/görye_köfte.png', link: '/products/kofte/1' },
      { id: 36, name: 'Kasap Köfte', price: '210,00₺', weight: '400 gr/paket', image: '/images/et_resimler/kasap_köfte.png', link: '/products/kofte/2' },
      { id: 37, name: 'Steak Burger', price: '230,00₺', weight: '4x110 gr/paket', image: '/images/et_resimler/steak_burger.png', link: '/products/kofte/3' }
    ]
  };

  const getDisplayProducts = () => {
    if (selectedCategory === 'all') {
      return Object.values(allProducts).flat();
    }
    return allProducts[selectedCategory] || [];
  };

  const ProductCard = ({ product }) => (
    <Link 
      to={product.link}
      style={{ textDecoration: "none" }}
    >
      <div style={{
        background: "#fff",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 3px 12px #80002011",
        transition: "all 0.3s ease",
        position: "relative",
        cursor: "pointer",
        borderLeft: "4px solid var(--primary-color)",
        height: "320px",
        display: "flex",
        flexDirection: "column"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 6px 20px #80002022";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 3px 12px #80002011";
      }}>
        
        {/* Resim Alanı */}
        <div style={{
          position: "relative",
          width: "100%",
          height: 140,
          overflow: "hidden",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f8f9fa"
        }}>
          <img 
            src={product.image} 
            alt={product.name}
            style={{
              maxWidth: "80%",
              maxHeight: "80%",
              objectFit: "contain",
              transition: "transform 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />
          
          {/* Fiyat Etiketi */}
          <div style={{
            position: "absolute",
            top: 8,
            right: 8,
            background: "linear-gradient(135deg, var(--primary-color), var(--dark-red))",
            color: "white",
            padding: "4px 10px",
            borderRadius: 12,
            fontWeight: 700,
            fontSize: 12,
            boxShadow: "0 3px 8px #80002033",
            transform: "rotate(2deg)"
          }}>
            {product.price}
          </div>
        </div>
        
        {/* İçerik Alanı */}
        <div style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          flex: 1,
          justifyContent: "space-between"
        }}>
          <div>
            <h3 style={{
              color: "var(--primary-color)",
              fontSize: "1.1rem",
              fontWeight: 700,
              margin: 0,
              lineHeight: 1.3,
              marginBottom: "0.3rem"
            }}>
              {product.name}
            </h3>
            
            <p style={{
              color: "#888",
              fontSize: 10,
              margin: "0 0 0.3rem 0",
              fontWeight: 600
            }}>
              {product.weight}
            </p>
          </div>
          
          <div style={{
            marginTop: 6,
            padding: "4px 10px",
            background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
            borderRadius: 4,
            textAlign: "center",
            color: "var(--primary-color)",
            fontWeight: 600,
            fontSize: 10,
            border: "1px solid #dee2e6"
          }}>
            Detayları Görüntüle
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div style={{
      maxWidth: 1400,
      margin: "0 auto",
      padding: "2rem",
      background: "var(--white)",
      minHeight: "calc(100vh - 200px)"
    }}>
      <h1 style={{
        textAlign: "center",
        color: "var(--primary-color)",
        marginBottom: "2rem",
        marginTop: "1rem",
        fontSize: "2.5rem",
        fontWeight: 800,
        letterSpacing: 1,
        textShadow: "0 2px 8px #80002022"
      }}>
        ÜRÜNLERİMİZ
      </h1>

      {/* Kategori Menüsü */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "0.5rem",
        marginBottom: "3rem",
        padding: "1rem",
        background: "#f8f9fa",
        borderRadius: 16,
        boxShadow: "0 2px 8px #80002011"
      }}>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            style={{
              background: selectedCategory === category.id 
                ? "linear-gradient(135deg, var(--primary-color), var(--dark-red))" 
                : "#fff",
              color: selectedCategory === category.id ? "white" : "var(--primary-color)",
              border: selectedCategory === category.id ? "none" : "2px solid var(--primary-color)",
              padding: "0.8rem 1.5rem",
              borderRadius: 25,
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: selectedCategory === category.id 
                ? "0 4px 12px #80002033" 
                : "0 2px 6px #80002011",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
            onMouseEnter={(e) => {
              if (selectedCategory !== category.id) {
                e.target.style.background = "var(--primary-color)";
                e.target.style.color = "white";
                e.target.style.transform = "translateY(-2px)";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== category.id) {
                e.target.style.background = "#fff";
                e.target.style.color = "var(--primary-color)";
                e.target.style.transform = "translateY(0)";
              }
            }}
          >
            <span>{category.name}</span>
            <span style={{
              background: selectedCategory === category.id ? "rgba(255,255,255,0.3)" : "var(--primary-color)",
              color: selectedCategory === category.id ? "white" : "white",
              padding: "2px 6px",
              borderRadius: 10,
              fontSize: 10,
              fontWeight: 700
            }}>
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Seçili Kategori Başlığı */}
      {selectedCategory !== 'all' && (
        <div style={{
          textAlign: "center",
          marginBottom: "2rem"
        }}>
          <h2 style={{
            color: "var(--primary-color)",
            fontSize: "1.8rem",
            fontWeight: 700,
            margin: 0,
            padding: "1rem 2rem",
            background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
            borderRadius: 12,
            display: "inline-block",
            border: "2px solid var(--primary-color)"
          }}>
            {categories.find(cat => cat.id === selectedCategory)?.name}
          </h2>
        </div>
      )}
      
      {/* Ürün Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "1.2rem"
      }}>
        {getDisplayProducts().map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Kategori Linkları */}
      <div style={{
        marginTop: "4rem",
        textAlign: "center"
      }}>
        <h3 style={{
          color: "var(--primary-color)",
          fontSize: "1.5rem",
          fontWeight: 700,
          marginBottom: "2rem"
        }}>
          Kategori Sayfalarını Ziyaret Edin
        </h3>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem"
        }}>
          {categories.slice(1).map((category) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, var(--primary-color), var(--dark-red))",
                color: "white",
                padding: "0.8rem 1.5rem",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 14,
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px #80002033"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 16px #80002044";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 12px #80002033";
              }}
            >
              {category.name} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products; 