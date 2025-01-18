
import React, { useState } from 'react'; // Asegúrate de importar useState
import Login from './components/Login';   // Asegúrate de importar el componente Login
import SearchPage from './pages/SearchPage'; // Si es necesario, ajusta la ruta

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <div>
      {user ? (
        <SearchPage />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
