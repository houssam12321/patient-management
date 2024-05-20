import React from 'react';
import logo from '../../Assets/2.png';
import './Admin.css';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AdminAccueil.css'

export default function AdminAccueil() {
  return (
    <div className='App'>
      <AdminSidebar></AdminSidebar>
        <div className='Nav'>
            <img className='logo' src={logo} alt="" />
        </div>
        
        <div className='nbr-patient'>
          Nombre des patients : 

        </div>

        <div className='nbr-consult'>
          Nombre des consultations : 

        </div>
    </div>
  );
}
