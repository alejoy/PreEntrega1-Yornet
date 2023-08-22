import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la respuesta de la API');
    }
    return response.json();
  })
  .then(data => {
    setProduct(data);
  })
  .catch(error => {
    console.error('Error al obtener los detalles del producto:', error);
  });
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="item-detail">
       <div className="card">
        <img src={product.image} className="card-img" alt="Card" />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-price">${product.price}</p>
          <p className="card-id">ID: {product.id}</p>
          <p className="card-rating">Rate: {product.rating.rate}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;


  