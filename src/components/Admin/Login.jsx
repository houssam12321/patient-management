import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../Assets/2.png';
import './AdminLogin.css';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/login', {
        username,
        password
      });

      // Récupérer le rôle de l'utilisateur depuis la réponse
      const role = response.data;

      // Rediriger l'utilisateur en fonction de son rôle
      if (role === 'admin') {
        navigate('/admin');
      } else if (role === 'medecin') {
        navigate('/gestionPatient');
      } else if (role === 'patient') {
        navigate('/patient');
      }
    } catch (error) {
      console.error('Erreur de connexion :', error);
      // Gérer les erreurs de connexion, par exemple afficher un message d'erreur à l'utilisateur
    }
  };

  return (
    <div className='app'>
      <div className='Nav'>
        <img className='logo' src={logo} alt="" />
      </div>
      <div className="container">
        <div className="heading">Sign In</div>
        <form onSubmit={handleSubmit} className="form">
          <input
            required
            className="input"
            type="text"
            name="text1"
            value={username}
            placeholder="Nom d'utilisateur"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            required
            className="input"
            type="password"
            name="password"
            value={password}
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input className="login-button" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}
