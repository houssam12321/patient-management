import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import logo from '../../Assets/2.png';
import './Consultation.css'; // Assurez-vous d'importer votre fichier CSS

export default function AjoutConsultation() {
  return (
    <div>
      <AdminSidebar />
      <div className='Nav'>
        <img className='logo' src={logo} alt="" />
      </div>
      <div className="consultation-container">
        <div className="left-column">
        <label>Patient:</label>
          <select name="patient" required>
            <option value="">Sélectionner un patient</option>
          </select><br />
          
          <div className="mb-3">
              <label className="form-label">Date de naissance</label>
              <input
                type="date"
                className="form-control"
                name="date_naissance"
               
              />
            </div>
          

          <label>Médecin traitant:</label>
          <select name="medecin" required>
            <option value="">Sélectionner un médecin</option>
          </select><br />
        </div>
        <div className="right-column">
        <div className="mb-3">
              <label className="form-label">Symptpomes</label>
              <input
                type="text"
                className="form-control"
          
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Diagnostic</label>
              <input
                type="text"
                className="form-control"
          
              />
            </div>
          
            <div className="mb-3">
              <label className="form-label">Notes suplimentaire</label>
              <input
                type="text"
                className="form-control"
          
              />
            </div>

          
        </div>
      </div>
      <button type='submit' className="button2">Ajouter</button>
      <div className='consult-cont'>
      <form className='form1' >
            <div className="mb-3">
              <label className="form-label">Patient</label>
              <input className='form-control' type="text" />
            </div>
            <div className="mb-3">
              <label className="form-label">Prenom</label>
              <input
                type="text"
                className="form-control"
          
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Date de naissance</label>
              <input
                type="date"
                className="form-control"
                name="date_naissance"
               
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Adresse</label>
              <input
                type="text"
                className="form-control"
                name="adresse"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">CIN</label>
              <input
                type="text"
                className="form-control"
                name="cin"
             
              />
            </div>
            
           <button type='submit' className="button2">Ajouter</button>
           


          </form>


      </div>
    </div>
  );
}
