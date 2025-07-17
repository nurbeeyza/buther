import React, { useRef, useState } from "react";
import "../styles/MeatCuts.css";

const cuts = [
  {
    title: "Boyun Bölümü",
    cuts: [
      {
        name: "Gerdan",
        description:
          "Dananın boyun bölümünde elde edilir. Kıyma, çorba ve yahni yapımında kullanılır.",
        uses: ["Kıyma", "Çorba", "Yahni"],
      },
    ],
  },
  {
    title: "Göğüs Bölümü",
    cuts: [
      {
        name: "Göğüs",
        description:
          "Dana etinin göğüs kısmından elde edilir. Haşlama, çorba ve kıyma yapımında kullanılır.",
        uses: ["Haşlama", "Çorba", "Kıyma"],
      },
    ],
  },
  {
    title: "Sırt Bölümü",
    cuts: [
      {
        name: "Antrikot",
        description:
          "Sırtın üst kısmından elde edilir. Izgara ve biftek yapımı için idealdir.",
        uses: ["Izgara", "Biftek"],
      },
      {
        name: "Bonfile",
        description:
          "Sırtın en iç kısmından elde edilir. En yumuşak ve değerli et parçasıdır.",
        uses: ["Izgara", "Biftek", "Rosto"],
      },
      {
        name: "Kontrfile",
        description:
          "Sırtın alt kısmından elde edilir. Izgara ve biftek için uygundur.",
        uses: ["Izgara", "Biftek"],
      },
    ],
  },
  {
    title: "But Bölümü",
    cuts: [
      {
        name: "Nuar",
        description:
          "Butun üst kısmından elde edilir. Rosto ve biftek yapımında kullanılır.",
        uses: ["Rosto", "Biftek"],
      },
      {
        name: "Pirzola",
        description:
          "Butun orta kısmından elde edilir. Izgara için idealdir.",
        uses: ["Izgara", "Tavada"],
      },
    ],
  },
];

const MeatCuts = () => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const imgRef = useRef(null);

  const magnifierSize = 80;
  const zoom = 2.2;

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    setMagnifierPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setShowMagnifier(true);
    if (imgRef.current) {
      setImgSize({ width: imgRef.current.width, height: imgRef.current.height });
    }
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  return (
    <div className="page-container" style={{ maxWidth: 1400, margin: "0 auto", padding: "2rem", background: "#f8f9fa" }}>
      <div className="header-image" style={{ position: 'relative', width: '100%', maxWidth: 600, margin: '0 auto 2rem' }}>
        <img
          ref={imgRef}
          src="/images/dana_parts.png"
          alt="Dana Eti Bölümleri"
          style={{ width: '100%', height: 400, objectFit: 'contain', borderRadius: 8, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {showMagnifier && (
          <div
            style={{
              position: 'absolute',
              pointerEvents: 'none',
              top: magnifierPosition.y - magnifierSize / 2,
              left: magnifierPosition.x - magnifierSize / 2,
              width: magnifierSize,
              height: magnifierSize,
              borderRadius: '50%',
              boxShadow: '0 4px 16px #80002044',
              border: '2.5px solid #d4af37',
              background: `url(/images/dana_parts.png)`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: `${imgSize.width * zoom}px ${imgSize.height * zoom}px`,
              backgroundPosition: `-${magnifierPosition.x * zoom - magnifierSize / 2}px -${magnifierPosition.y * zoom - magnifierSize / 2}px`,
              zIndex: 10,
            }}
          />
        )}
      </div>

      <h1 className="page-title">Dana Eti Bölümleri ve Yemeklerde Kullanımı</h1>

      <div className="content-section">
        <p className="intro-text">
          Dana etini herkes sever ancak biftek, bonfile, antrikot dananın hangi bölümünde yer alır diye sorulsa birçok kişi cevap veremez. Şimdi dana eti bölümleri ve bu bölümlerin hangi yemekler için nasıl kullanıldığından bahsedelim.
        </p>

        {/* 2x2 grid for sections */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginBottom: 0 }}>
          {/* First row: Boyun & Göğüs */}
          {[0, 1].map((i) => (
            <div key={i} className="cut-section">
              <h2 className="section-title">{cuts[i].title}</h2>
              <div className="cuts-list">
                {cuts[i].cuts.map((cut, cutIndex) => (
                  <div key={cutIndex} className="cut-card">
                    <h3 className="cut-name">{cut.name}</h3>
                    <p className="cut-description">{cut.description}</p>
                    <div className="cut-uses">
                      <h4>Kullanım Alanları:</h4>
                      <ul>
                        {cut.uses.map((use, useIndex) => (
                          <li key={useIndex}>{use}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ height: 32 }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
          {/* Second row: Sırt & But */}
          {[2, 3].map((i) => (
            <div key={i} className="cut-section">
              <h2 className="section-title">{cuts[i].title}</h2>
              <div className="cuts-list">
                {cuts[i].cuts.map((cut, cutIndex) => (
                  <div key={cutIndex} className="cut-card">
                    <h3 className="cut-name">{cut.name}</h3>
                    <p className="cut-description">{cut.description}</p>
                    <div className="cut-uses">
                      <h4>Kullanım Alanları:</h4>
                      <ul>
                        {cut.uses.map((use, useIndex) => (
                          <li key={useIndex}>{use}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeatCuts;
