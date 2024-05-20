import React, { useState } from 'react';
import axios from 'axios';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import logo from '../../Assets/2.png';
import './Dpatient.css';

export default function AjoutPatient() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    date_naissance: '',
    adresse: '',
    cin: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8083/patient', formData);
      console.log(response.data);
      // Reset the form after successful submission
      setFormData({
        nom: '',
        prenom: '',
        date_naissance: '',
        adresse: '',
        cin: ''
      });
      alert('Patient ajouté avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du patient :', error);
      alert('Erreur lors de l\'ajout du patient. Veuillez réessayer.');
    }
  };

  return (
    <div className='App'>
      <AdminSidebar />
      <div className='Content'>
        <div className='Nav'>
          <img className='logo' src={logo} alt="" />
        </div>
        
        <div className="FormContainer">
          <h1>Ajouter votre patient !</h1>
          <form className='form1' onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nom</label>
              <input
                type="text"
                className="form-control"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Prenom</label>
              <input
                type="text"
                className="form-control"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Date de naissance</label>
              <input
                type="date"
                className="form-control"
                name="date_naissance"
                value={formData.date_naissance}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Adresse</label>
              <input
                type="text"
                className="form-control"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">CIN</label>
              <input
                type="text"
                className="form-control"
                name="cin"
                value={formData.cin}
                onChange={handleChange}
              />
            </div>
            
           <button type='submit' className="button2">Ajouter</button>
           


          </form>
        </div>
      </div>
    </div>
  );
}
