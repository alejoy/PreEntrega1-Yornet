import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import Card from './Card';

function ItemListContainer() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        // Filtrar los productos por categoría si categoryName está definido
        const filteredProducts = categoryName
          ? data.filter(product => product.category === categoryName)
          : data;

        setProducts(filteredProducts);
      })
      .catch(error => {
        console.error('Error al obtener los datos de productos:', error);
      });
  }, [categoryName]);
  return (
    <div className="ItemListContainer">
      <h2>Lista de Productos {categoryName ? `en la categoría ${categoryName}` : ''}</h2>
      {products.map(product => ( 
        <Card
          id={product.id}
          title={product.title}
          description={product.description}
          imageUrl={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ItemListContainer;
