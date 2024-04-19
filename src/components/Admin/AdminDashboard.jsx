import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la redirection
import logo from '../../Assets/2.png';
import './AdminLogin.css';

export default function AdminDashboard() {
  const navigate = useNavigate(); // Initialiser useNavigate pour la redirection

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire (rechargement de la page)
    
    // Effectuer des validations ou des actions nécessaires

    // Rediriger l'utilisateur vers la route "/admin/accueil"
    navigate('/admin/accueil');
  };

  return (
    <div className='app'>
      <div className='Nav'>
        <img className='logo' src={logo} alt="" />
      </div>
      <div className="container">
        <div className="heading">Sign In</div>
        <form onSubmit={handleSubmit} className="form"> {/* Ajouter onSubmit avec la fonction handleSubmit */}
          <input required className="input" type="email" name="email" id="email" placeholder="E-mail" />
          <input required className="input" type="password" name="password" id="password" placeholder="Password" />
          <span className="forgot-password"><a href="#">Forgot Password ?</a></span>
          <input className="login-button" type="submit" value="Sign In" />
        </form>
      </div>
    </div>
  );
}
