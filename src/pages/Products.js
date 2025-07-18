import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { setCategory, syncFromUrl } from "../store/categorySlice";

const Products = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // Get category from Redux store
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );

  // Initialize from URL on mount
  useEffect(() => {
    const urlCategory = searchParams.get("category");
    if (urlCategory && urlCategory !== selectedCategory) {
      // If URL has a category different from store, sync the store
      dispatch(syncFromUrl(urlCategory));
    } else if (!urlCategory && selectedCategory !== "all") {
      // If URL has no category but store has one, update URL
      updateUrl(selectedCategory);
    }
  }, []); // Only run on mount

  // Listen to URL changes (back/forward navigation)
  useEffect(() => {
    const urlCategory = searchParams.get("category") || "all";
    if (urlCategory !== selectedCategory) {
      dispatch(syncFromUrl(urlCategory));
    }
  }, [searchParams.toString()]);

  const updateUrl = (categoryId) => {
    const newSearchParams = new URLSearchParams();
    if (categoryId !== "all") {
      newSearchParams.set("category", categoryId);
    }

    const newUrl = newSearchParams.toString()
      ? `${location.pathname}?${newSearchParams.toString()}`
      : location.pathname;

    navigate(newUrl, { replace: true });
  };

  const handleCategoryChange = (categoryId) => {
    // Update Redux store (this will also update localStorage)
    dispatch(setCategory(categoryId));

    // Update URL
    updateUrl(categoryId);
  };

  const categories = [
    { id: "all", name: "Tüm Ürünler", count: 41 },
    { id: "dana-grubu", name: "DANA GRUBU", count: 5 },
    { id: "kuzu-grubu", name: "KUZU GRUBU", count: 10 },
    { id: "dana-beef-steak", name: "DANA BEEF'S STEAK", count: 7 },
    { id: "sarkuteri-grubu", name: "ŞARKÜTERİ GRUBU", count: 15 },
    { id: "islenmis-urun-grubu", name: "İŞLENMİŞ ÜRÜN GRUBU", count: 4 },
  ];

  const allProducts = {
    "dana-grubu": [
      {
        id: 1,
        name: "Dana Ayna",
        price: "750,00₺",
        weight: "kg",
        image: "/images/et_resimler/dana_ayna.png",
        link: "/products/dana-grubu/1",
      },
      {
        id: 2,
        name: "Dana Kuşbaşı",
        price: "680,00₺",
        weight: "kg",
        image: "/images/et_resimler/dana_kusbasi.png",
        link: "/products/dana-grubu/2",
      },
      {
        id: 3,
        name: "Dana Kaburga Kıyma",
        price: "300,00₺",
        weight: "400 gr/paket",
        image: "/images/et_resimler/dana_kaburga_kiyma.png",
        link: "/products/dana-grubu/3",
      },
      {
        id: 4,
        name: "Dana Rosto",
        price: "700,00₺",
        weight: "kg",
        image: "/images/et_resimler/dana_rosto.png",
        link: "/products/dana-grubu/4",
      },
      {
        id: 5,
        name: "Dana Asado",
        price: "800,00₺",
        weight: "kg",
        image: "/images/et_resimler/dana_asado.png",
        link: "/products/dana-grubu/5",
      },
    ],
    "kuzu-grubu": [
      {
        id: 6,
        name: "Kuzu Bel",
        price: "700,00₺",
        weight: "kg",
        image: "/images/et_resimler/kuzu_bel.png",
        link: "/products/kuzu-grubu/1",
      },
      {
        id: 7,
        name: "Kuzu Gerdan",
        price: "650,00₺",
        weight: "kg",
        image: "/images/et_resimler/kuzu_gerdan.png",
        link: "/products/kuzu-grubu/2",
      },
      {
        id: 8,
        name: "Kuzu Kol",
        price: "680,00₺",
        weight: "kg",
        image: "/images/et_resimler/kuzu_kol.png",
        link: "/products/kuzu-grubu/3",
      },
      {
        id: 9,
        name: "Kuzu Kaburga",
        price: "720,00₺",
        weight: "kg",
        image: "/images/et_resimler/kuzu_kaburga.png",
        link: "/products/kuzu-grubu/4",
      },
      {
        id: 10,
        name: "Kuzu Döş",
        price: "750,00₺",
        weight: "kg",
        image: "/images/et_resimler/kuzu_dos.png",
        link: "/products/kuzu-grubu/5",
      },
      {
        id: 11,
        name: "Kuzu Pirzola",
        price: "850,00₺",
        weight: "kg",
        image: "/images/et_resimler/kuzu_pirzola.png",
        link: "/products/kuzu-grubu/6",
      },
      {
        id: 12,
        name: "Kuzu But",
        price: "780,00₺",
        weight: "kg",
        image: "/images/et_resimler/kuzu_but.png",
        link: "/products/kuzu-grubu/7",
      },
      {
        id: 13,
        name: "Kuzu Küşleme",
        price: "820,00₺",
        weight: "kg",
        image: "/images/et_resimler/kuzu_kusleme.png",
        link: "/products/kuzu-grubu/8",
      },
      {
        id: 14,
        name: "Kuzu Külbastı",
        price: "800,00₺",
        weight: "kg",
        image: "/images/et_resimler/kuzu_kulbasti.png",
        link: "/products/kuzu-grubu/9",
      },
      {
        id: 15,
        name: "Kuzu Lokum",
        price: "900,00₺",
        weight: "kg",
        image: "/images/et_resimler/kuzu_lokum.png",
        link: "/products/kuzu-grubu/10",
      },
    ],
    "dana-beef-steak": [
      {
        id: 16,
        name: "Dallas Steak",
        price: "950,00₺",
        weight: "kg",
        image: "/images/et_resimler/dallas_steak.png",
        link: "/products/dana-beef-steak/1",
      },
      {
        id: 17,
        name: "T-bone Steak",
        price: "950,00₺",
        weight: "kg",
        image: "/images/et_resimler/t-bonesteak.png",
        link: "/products/dana-beef-steak/2",
      },
      {
        id: 18,
        name: "New York Steak",
        price: "900,00₺",
        weight: "kg",
        image: "/images/et_resimler/newyorksteak.png",
        link: "/products/dana-beef-steak/3",
      },
      {
        id: 19,
        name: "Toma Hawk Steak",
        price: "1000,00₺",
        weight: "kg",
        image: "/images/et_resimler/tomahawk.png",
        link: "/products/dana-beef-steak/4",
      },
      {
        id: 20,
        name: "Bonfile",
        price: "950,00₺",
        weight: "kg",
        image: "/images/et_resimler/dana_bonfile.png",
        link: "/products/dana-beef-steak/5",
      },
      {
        id: 21,
        name: "Antrikot",
        price: "800,00₺",
        weight: "kg",
        image: "/images/et_resimler/dana_antrikot.png",
        link: "/products/dana-beef-steak/6",
      },
      {
        id: 22,
        name: "Kontrfile",
        price: "800,00₺",
        weight: "kg",
        image: "/images/et_resimler/dana_kontrfile.png",
        link: "/products/dana-beef-steak/7",
      },
    ],
    "sarkuteri-grubu": [
      {
        id: 24,
        name: "Dana Bacon",
        price: "90,00₺",
        weight: "100 gr/paket",
        image: "/images/et_resimler/dana_bacon.png",
        link: "/products/sarkuteri-grubu/1",
      },
      {
        id: 25,
        name: "Dana Jambon",
        price: "85,00₺",
        weight: "100 gr/paket",
        image: "/images/et_resimler/dana_jambon.png",
        link: "/products/sarkuteri-grubu/2",
      },
      {
        id: 26,
        name: "Dana Kavurma",
        price: "90,00₺",
        weight: "100 gr/paket",
        image: "/images/et_resimler/dana_kavurma.png",
        link: "/products/sarkuteri-grubu/3",
      },
      {
        id: 27,
        name: "Dana Salam",
        price: "85,00₺",
        weight: "100 gr/paket",
        image: "/images/et_resimler/dana_salam.png",
        link: "/products/sarkuteri-grubu/4",
      },
      {
        id: 28,
        name: "Dana İsli Et",
        price: "120,00₺",
        weight: "80 gr/paket",
        image: "/images/et_resimler/dana_isli_et.png",
        link: "/products/sarkuteri-grubu/5",
      },
      {
        id: 29,
        name: "Dana Rozbif",
        price: "250,00₺",
        weight: "200 gr/paket",
        image: "/images/et_resimler/rozbif.png",
        link: "/products/sarkuteri-grubu/6",
      },
      {
        id: 30,
        name: "Dana Kekikli Rozbif",
        price: "260,00₺",
        weight: "200 gr/paket",
        image: "/images/et_resimler/dana_kekikli_rozbif.png",
        link: "/products/sarkuteri-grubu/7",
      },
      {
        id: 31,
        name: "Dana Karabiberli Rozbif",
        price: "270,00₺",
        weight: "200 gr/paket",
        image: "/images/et_resimler/dana_karabiberli_rozbif.png",
        link: "/products/sarkuteri-grubu/8",
      },
      {
        id: 32,
        name: "Dana Antrikot Pastırma",
        price: "280,00₺",
        weight: "250 gr/paket",
        image: "/images/et_resimler/dana_antrikot_pastirma.png",
        link: "/products/sarkuteri-grubu/9",
      },
      {
        id: 33,
        name: "Dana Kontrfile Pastırma",
        price: "290,00₺",
        weight: "250 gr/paket",
        image: "/images/et_resimler/dana_kontrfile_pastirma.png",
        link: "/products/sarkuteri-grubu/10",
      },
      {
        id: 34,
        name: "Dana Seçme Pastırma",
        price: "300,00₺",
        weight: "250 gr/paket",
        image: "/images/et_resimler/dana_secme_pastirma.png",
        link: "/products/sarkuteri-grubu/11",
      },
      {
        id: 35,
        name: "Dana İspanyol Salam",
        price: "95,00₺",
        weight: "100 gr/paket",
        image: "/images/et_resimler/dana_ispanyol_salam.png",
        link: "/products/sarkuteri-grubu/12",
      },
      {
        id: 36,
        name: "Dana Göden Sucuk",
        price: "380,00₺",
        weight: "400 gr/paket",
        image: "/images/et_resimler/dana_goden_sucuk.png",
        link: "/products/sarkuteri-grubu/13",
      },
      {
        id: 37,
        name: "Dana Dilim Sucuk",
        price: "320,00₺",
        weight: "300 gr/paket",
        image: "/images/et_resimler/dana_dilim_sucuk.png",
        link: "/products/sarkuteri-grubu/14",
      },
      {
        id: 38,
        name: "Dana Baton Sucuk",
        price: "350,00₺",
        weight: "350 gr/paket",
        image: "/images/et_resimler/dana_baton_sucuk.png",
        link: "/products/sarkuteri-grubu/15",
      },
    ],
    "islenmis-urun-grubu": [
      {
        id: 39,
        name: "Dana Köfte",
        price: "220,00₺",
        weight: "400 gr/paket",
        image: "/images/et_resimler/kasap_köfte.png",
        link: "/products/islenmis-urun-grubu/1",
      },
      {
        id: 40,
        name: "Dana Sucuk",
        price: "350,00₺",
        weight: "350 gr/paket",
        image: "/images/et_resimler/baton_sucuk.png",
        link: "/products/islenmis-urun-grubu/2",
      },
      {
        id: 41,
        name: "Dana Hamburger Köfte",
        price: "230,00₺",
        weight: "4x110 gr/paket",
        image: "/images/et_resimler/steak_burger.png",
        link: "/products/islenmis-urun-grubu/3",
      },
      {
        id: 42,
        name: "Dana İnegöl Köfte",
        price: "220,00₺",
        weight: "400 gr/paket",
        image: "/images/et_resimler/görye_köfte.png",
        link: "/products/islenmis-urun-grubu/4",
      },
    ],
  };

  const getDisplayProducts = () => {
    if (selectedCategory === "all") {
      return Object.values(allProducts).flat();
    }
    return allProducts[selectedCategory] || [];
  };

  const ProductCard = ({ product }) => (
    <Link to={product.link} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 8px 32px #80002022",
          transition: "all 0.3s ease",
          position: "relative",
          cursor: "pointer",
          borderLeft: "6px solid var(--primary-color)",
          height: "420px",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
          e.currentTarget.style.boxShadow = "0 12px 32px #80002033";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 32px #80002022";
        }}
      >
        {/* Resim Alanı */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 200,
            overflow: "hidden",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f8f9fa",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: 180,
              height: 180,
              objectFit: "contain",
              transition: "transform 0.3s ease",
              display: "block",
              margin: "0 auto",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />

          {/* Fiyat Etiketi */}
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              background:
                "linear-gradient(135deg, var(--primary-color), var(--dark-red))",
              color: "white",
              padding: "8px 18px",
              borderRadius: 20,
              fontWeight: 800,
              fontSize: 18,
              boxShadow: "0 4px 12px #80002033",
              transform: "rotate(2deg)",
              letterSpacing: 1,
            }}
          >
            {product.price}
          </div>
        </div>

        {/* İçerik Alanı */}
        <div
          style={{
            padding: "1.3rem 1.2rem 0.5rem 1.2rem",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3
              style={{
                color: "#800020",
                fontSize: "1.5rem",
                fontWeight: 900,
                margin: 0,
                lineHeight: 1.3,
                marginBottom: "0.5rem",
                letterSpacing: 1,
                textShadow: "0 2px 8px #80002022",
              }}
            >
              {product.name}
            </h3>

            <p
              style={{
                color: "#888",
                fontSize: 15,
                margin: "0 0 0.5rem 0",
                fontWeight: 700,
                letterSpacing: 0.5,
              }}
            >
              {product.weight}
            </p>

            <p
              style={{
                color: "#444",
                fontSize: 17,
                lineHeight: 1.5,
                margin: 0,
                fontWeight: 500,
              }}
            >
              {product.description}
            </p>
          </div>

          <div
            style={{
              marginTop: 12,
              padding: "8px 16px",
              background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
              borderRadius: 8,
              textAlign: "center",
              color: "var(--primary-color)",
              fontWeight: 600,
              fontSize: 14,
              border: "1px solid #dee2e6",
            }}
          >
            Detayları Görüntüle
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div
      style={{
        maxWidth: 1400,
        margin: "0 auto",
        padding: "2rem",
        paddingTop: "5rem",
        background: "var(--white)",
        minHeight: "calc(100vh - 200px)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "var(--primary-color)",
          marginBottom: "2rem",
          marginTop: "1rem",
          fontSize: "2.5rem",
          fontWeight: 800,
          letterSpacing: 1,
          textShadow: "0 2px 8px #80002022",
        }}
      >
        ÜRÜNLERİMİZ
      </h1>

      {/* Kategori Menüsü */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.5rem",
          marginBottom: "3rem",
          padding: "1rem",
          background: "#f8f9fa",
          borderRadius: 16,
          boxShadow: "0 2px 8px #80002011",
        }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            style={{
              background:
                selectedCategory === category.id
                  ? "linear-gradient(135deg, var(--primary-color), var(--dark-red))"
                  : "#fff",
              color:
                selectedCategory === category.id
                  ? "white"
                  : "var(--primary-color)",
              border:
                selectedCategory === category.id
                  ? "none"
                  : "2px solid var(--primary-color)",
              padding: "0.8rem 1.5rem",
              borderRadius: 25,
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow:
                selectedCategory === category.id
                  ? "0 4px 12px #80002033"
                  : "0 2px 6px #80002011",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
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
            <span
              style={{
                background:
                  selectedCategory === category.id
                    ? "rgba(255,255,255,0.3)"
                    : "var(--primary-color)",
                color: selectedCategory === category.id ? "white" : "white",
                padding: "2px 6px",
                borderRadius: 10,
                fontSize: 10,
                fontWeight: 700,
              }}
            >
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Seçili Kategori Başlığı */}
      {selectedCategory !== "all" && (
        <div
          style={{
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <h2
            style={{
              color: "var(--primary-color)",
              fontSize: "1.8rem",
              fontWeight: 700,
              margin: 0,
              padding: "1rem 2rem",
              background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
              borderRadius: 12,
              display: "inline-block",
              border: "2px solid var(--primary-color)",
            }}
          >
            {categories.find((cat) => cat.id === selectedCategory)?.name}
          </h2>
        </div>
      )}

      {/* Ürün Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.2rem",
        }}
      >
        {getDisplayProducts().map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Kategori Linkları */}
      <div
        style={{
          marginTop: "4rem",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "var(--primary-color)",
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "2rem",
          }}
        >
          Kategori Sayfalarını Ziyaret Edin
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {categories.slice(1).map((category) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              style={{
                display: "inline-block",
                background:
                  "linear-gradient(135deg, var(--primary-color), var(--dark-red))",
                color: "white",
                padding: "0.8rem 1.5rem",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 14,
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px #80002033",
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
