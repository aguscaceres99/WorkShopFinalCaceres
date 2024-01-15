import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log('Iniciando sesión con:', username, password);
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form>
        <label>Nombre de Usuario:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleLogin}>Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;