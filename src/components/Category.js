import React, { useState, useEffect } from 'react';
import Card from './Card';

const Category = ({ match }) => {
  const categoryName = match.params.categoryName; // Obten la categoría de la URL
  const [products, setProducts] = useState([]);
  console.log(Category)
  useEffect(() => {
    // Realiza una solicitud a la API para obtener productos de la categoría seleccionada
    fetch(`https://fakestoreapi.com/products/categories/`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [categoryName]);

  return (
    <div className="container">
      <h1>{categoryName} Products</h1>
      <div className="card-deck">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            description={product.description}
            imageUrl={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
