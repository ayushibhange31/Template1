import React, { useState } from 'react';

const Login = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Basic validation
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    // Additional login logic goes here...

    alert('You are logged in!');
    onClose(); // Close the form after successful login
  };

  return (
    <div className="login-form">
      <h2><i
          className="fa fa-user-circle fs-1 "
          style={{ color: 'lightgreen', justifyContent: 'center' }}
          aria-hidden="true"></i>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <span className="close-icon" onClick={onClose}>
        &times;
      </span>
    </div>
  );
};

export default Login;

