import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import logo from '../../Assets/2.png';
import './Dpatient.css'
export default function Dpatient() {
  return (
    <div className='App'>
      <AdminSidebar />
      <div className='Content'>
        <div className='Nav'>
          <img className='logo' src={logo} alt="" />
        </div>
        
        <div className="FormContainer">
          <h1>Ajout patient !</h1>
          <form  className="form"> {/* Ajouter onSubmit avec la fonction handleSubmit */}
          <input required className="input" type="text" name="nom" id="email" placeholder="Nom" />
          <input required className="input" type="text" name="prenom" id="prenom" placeholder="Prenom" />
          <input required className="input" type="text" name="addresse" id="addresse" placeholder="Addresse" />
          <input required className="input" type="date" name="date_naiss" id="date_naiss" placeholder="date de naissance " />

          <input className="login-button" type="submit" value="Valider" />
        </form>
        </div>
      </div>
    </div>
  );
}
