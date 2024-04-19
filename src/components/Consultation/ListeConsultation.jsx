import React from 'react'
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import logo from '../../Assets/2.png';
export default function ListeConsultation() {
  return (
    <div className='app'>
        <AdminSidebar/>
        <div className='Content'>
            <div className='Nav'>
                <img className='logo' src={logo} alt="" />
            </div>
        liste des consult
        </div>
      
    </div>
  )
}
