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
          
          <label>Date et heure de la consultation:</label>
          <input type="datetime-local" name="dateHeure" required /><br />

          

          <label>Médecin traitant:</label>
          <select name="medecin" required>
            <option value="">Sélectionner un médecin</option>
          </select><br />
        </div>
        <div className="right-column">
          <label>Symptômes:</label>
          <textarea name="symptomes" rows="2" cols="50" required></textarea><br />

          <label>Diagnostic:</label>
          <textarea name="diagnostic" rows="2" cols="50" required></textarea><br />

          <label>Prescription:</label>
          <textarea name="prescription" rows="2" cols="50" required></textarea><br />

          <label>Notes supplémentaires:</label>
          <textarea name="notes" rows="4" cols="50"></textarea><br />

          
        </div>
      </div>
      <button type="submit">Enregistrer</button>
    </div>
  );
}
