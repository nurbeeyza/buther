import React from 'react';

const Products = () => {
  const allProducts = [
    {
      id: 1,
      name: 'Dana Kuşbaşı',
      price: '680,00₺',
      image: '/images/dana-kusbasi.jpg',
      category: 'Dana Eti'
    },
    {
      id: 2,
      name: 'Dana Kavurma',
      price: '95,00₺',
      image: '/images/dana-kavurma.jpg',
      category: 'Dana Eti'
    },
    {
      id: 3,
      name: 'Steak Burger',
      price: '230,00₺',
      image: '/images/steak-burger.jpg',
      category: 'Hazır Ürünler'
    },
    {
      id: 4,
      name: 'Kasap Köfte',
      price: '210,00₺',
      image: '/images/kasap-kofte.jpg',
      category: 'Hazır Ürünler'
    },
    {
      id: 5,
      name: 'Dana Salam',
      price: '85,00₺',
      image: '/images/dana-salam.jpg',
      category: 'Şarküteri'
    },
    {
      id: 6,
      name: 'Dana Jambon',
      price: '85,00₺',
      image: '/images/dana-jambon.jpg',
      category: 'Şarküteri'
    },
    {
      id: 7,
      name: 'Dana İsli Et',
      price: '120,00₺',
      image: '/images/dana-isli-et.jpg',
      category: 'Şarküteri'
    },
    {
      id: 8,
      name: 'Dana Bacon',
      price: '90,00₺',
      image: '/images/dana-bacon.jpg',
      category: 'Şarküteri'
    }
  ];

  return (
    <div className="products">
      <div className="container">
        <h1 className="section-title">Tüm Ürünlerimiz</h1>
        <div className="product-grid">
          {allProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <p className="product-category">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products; 