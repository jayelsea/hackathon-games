import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGameDetails } from '../services/api';

const GameDetailsPage = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const loadGameDetails = async () => {
      const data = await fetchGameDetails(id);
      setGame(data);
    };

    loadGameDetails();
  }, [id]);

  if (!game) return <p>Cargando detalles del juego...</p>;

  return (
    <div>
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} style={{ width: '100%', maxHeight: '500px' }} />
      <p>{game.description_raw}</p>
      <p><strong>Fecha de lanzamiento:</strong> {game.released}</p>
      <p><strong>Rating:</strong> {game.rating} / 5</p>
      <p>
        <strong>Plataformas:</strong> {game.platforms.map((p) => p.platform.name).join(', ')}
      </p>
    </div>
  );
};

export default GameDetailsPage;
