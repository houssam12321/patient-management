import React, { useEffect, useState } from 'react';
import logo from '../../Assets/2.png';
import './Admin.css';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AdminAccueil.css';
import axios from 'axios';

export default function AdminAccueil() {
  const [nbrPatients, setNbrPatients] = useState(0);
  const [nbrConsultations, setNbrConsultations] = useState(0);

  useEffect(() => {
    fetchNbrPatients();
    fetchNbrConsultations();
  }, []);

  const fetchNbrPatients = async () => {
    try {
      const response = await axios.get('http://localhost:8083/patients/count');
      setNbrPatients(response.data);
    } catch (error) {
      console.error('Error fetching number of patients:', error);
    }
  };

  const fetchNbrConsultations = async () => {
    try {
      const response = await axios.get('http://localhost:8083/consultations/count');
      setNbrConsultations(response.data);
    } catch (error) {
      console.error('Error fetching number of consultations:', error);
    }
  };

  return (
    <div className='App'>
      <AdminSidebar></AdminSidebar>
      <div className='mainContent'>
        <div className='Nav'>
        </div>
        
        <div className='statsContainer'>
          <div className='nbr-patient'>
            Nombre des patients :<br/>{nbrPatients}
          </div>

          <div className='nbr-consultation'>
            <div className='statTitle'>Nombre total de consultations:</div>
            <div className='statValue'>{nbrConsultations}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
