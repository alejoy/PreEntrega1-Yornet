import React from 'react';
import Card from './Card';

const Home = () => {
    const cards = [
      {
        title: 'Tarjeta 1',
        description: 'Contenido de la tarjeta 1',
        imageUrl: 'https://picsum.photos/200/300'
      },
      {
        title: 'Tarjeta 2',
        description: 'Contenido de la tarjeta 2',
        imageUrl: 'https://picsum.photos/200/300'
      },
      {
        title: 'Tarjeta 3',
        description: 'Contenido de la tarjeta 3',
        imageUrl: 'https://picsum.photos/200/300'
      }
    ];
  
    return (
      <div className="container">
        <h1>Bienvenido a mi tienda</h1>
        <div className="card-deck">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Home;