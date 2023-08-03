import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importamos el ícono de carrito desde react-icons/fa

const CartWidget = () => {
  const cartItemsCount = 5; // Número hardcodeado para representar la cantidad de elementos en el carrito

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-notification">{cartItemsCount}</span>
    </div>
  );
};

export default CartWidget;