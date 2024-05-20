import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import logo from '../../Assets/2.png';
import SummarizeIcon from '@mui/icons-material/Summarize';

export default function ListeConsultation() {
  const [consultations, setConsultations] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Charger les consultations depuis l'API
    const fetchConsultations = async () => {
      try {
        const response = await axios.get('http://localhost:8083/consultations');
        setConsultations(response.data);
      } catch (error) {
        setError('Erreur lors du chargement des consultations.');
        console.error('Erreur lors du chargement des consultations :', error);
      }
    };
    fetchConsultations();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8083/consultation/${id}`);
      setConsultations(consultations.filter((consultation) => consultation.id !== id));
    } catch (error) {
      setError('Erreur lors de la suppression de la consultation.');
      console.error('Erreur lors de la suppression de la consultation :', error);
    }
  };

  return (
    <div className='app'>
      <AdminSidebar/>
      <div className='Content'>
        <div className='Nav'>
          <img className='logo' src={logo} alt="" />
          </div>
          <div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem',marginLeft:'30rem' }}>
            <SummarizeIcon sx={{ fontSize: 30, marginRight: '1rem' }} />
            <h2 style={{ margin: 0 }}>Liste des Consultations</h2>
          </div>
        </div>
        <div className='liste-consult' style={{ marginLeft: '20rem',marginTop:'4rem' }}>
          {error && <p className="error-message">{error}</p>}
          <table className='table'>
            <thead>
              <tr>
                <th scope="col">Nom du Patient</th>
                <th scope="col">Nom du Medcin</th>
                <th scope="col">Date de consultation</th>
                <th scope="col">Motif de Consultation</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {consultations.map((consultation, index) => (
                <tr key={index}>
                  <td>{consultation.patient.nom} {consultation.patient.prenom}</td>
                  <td>{consultation.medcin.nom} {consultation.medcin.prenom}</td>
                  <td>{new Date(consultation.dateConsultation).toLocaleDateString()}</td>
                  <td>{consultation.motif}</td>
                  <td>
                    <button className="btn btn-primary btn-sm"><InfoIcon/></button>
                    <button className="btn btn-success btn-sm"><EditIcon/></button>
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(consultation.id)}
                    >
                      <DeleteIcon/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
