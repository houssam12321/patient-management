import React from 'react'
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import logo from '../../Assets/2.png';

export default function Rdv() {
  return (
    <div>
      <AdminSidebar></AdminSidebar>
      <div className='Nav'>
            <img className='logo' src={logo} alt="" />
        </div>
        
      
    </div>
  )
}
