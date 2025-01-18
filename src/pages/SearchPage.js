import React, { useState } from 'react';
import { searchGames } from '../services/api'; // Asegúrate de que la función searchGames esté configurada correctamente
import GameCard from '../components/GameCard'; // Importamos el componente GameCard

const SearchPage = () => {
  const [query, setQuery] = useState(''); // Estado para la consulta de búsqueda
  const [results, setResults] = useState([]); // Estado para los resultados de la búsqueda

  // Función para manejar la búsqueda de juegos
  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await searchGames(query); // Llamamos a la función para buscar juegos con la consulta proporcionada
    setResults(data); // Establecemos los resultados en el estado
  };

  return (
    <div className="search-page">
      <h1>Búsqueda de Juegos</h1>
      
      {/* Formulario de búsqueda */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Actualiza la consulta cuando el usuario escribe
          placeholder="Buscar juegos..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>

      {/* Mostrar la lista de juegos si hay resultados */}
      <div className="game-list">
        {results.length > 0 && 
          results.map((game) => <GameCard key={game.id} game={game} />) // Para cada juego, renderizamos el componente GameCard
        }
      </div>
    </div>
  );
};

export default SearchPage;
