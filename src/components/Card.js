import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ ...product }) => {
  return (
    <Link to={`/item/${product.id}`}>
      <div className="card">
        <img src={product.imageUrl} className="card-img" alt="Card" />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          {/* <p className="card-text">{product.description}</p> */}
          <p className="card-price">${product.price}</p>
          <p className="card-id">ID: {product.id}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
