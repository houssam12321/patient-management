import React from 'react';
import logo from '../../Assets/2.png';
import './Admin.css';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

export default function AdminAccueil() {
  return (
    <div className='App'>
      <AdminSidebar></AdminSidebar>
        <div className='Nav'>
            <img className='logo' src={logo} alt="" />
        </div>
        
        <h1>Page d'accueil de l'administration</h1>
    </div>
  );
}
