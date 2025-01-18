import React, { useState } from 'react';

const GameCard = ({ game }) => {
  // Estado para almacenar la calificación del juego
  const [rating, setRating] = useState(0);

  // Función para manejar la calificación del juego
  const handleRating = (newRating) => {
    setRating(newRating); // Actualiza el estado de la calificación
  };

  return (
    <div className="game-card">
      {/* Imagen del juego */}
      <img src={game.background_image} alt={game.name} className="game-image" />
      
      {/* Nombre y fecha de lanzamiento */}
      <h3>{game.name}</h3>
      <p>{game.released}</p>
      
      {/* Sección de calificación */}
      <div className="rating">
        <span>Califica este juego: </span>
        {/* Botones de estrellas para calificar */}
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => handleRating(value)}
            className={`star ${rating >= value ? 'selected' : ''}`} // Si la calificación es mayor o igual a la estrella, la clase 'selected' se agrega
          >
            ★
          </button>
        ))}
        <p>Calificación: {rating}</p>
      </div>
    </div>
  );
};

export default GameCard;
