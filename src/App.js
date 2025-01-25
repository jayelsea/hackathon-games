
import React, { useState } from 'react'; 
import Login from './components/Login';  
import SearchPage from './pages/SearchPage';

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
