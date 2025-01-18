import React, { useState, useEffect } from 'react';
import { fetchGames } from '../services/api';
import GameList from '../components/GameList';

const HomePage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      const data = await fetchGames();
      setGames(data);
    };

    loadGames();
  }, []);

  return (
    <div>
      <h1>Juegos Populares</h1>
      <GameList games={games} />
    </div>
  );
};

export default HomePage;
