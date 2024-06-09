import React from 'react'
import logo from'../../Assets/2.png'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className='App'>
        <div className='Nav'>
            <img className='logo' src={logo} alt="" />
        </div>
    
    <div className='container'>
        <p style={{fontFamily:'unset', fontWeight:'bold', fontSize:'2rem'}}> Creer un Profil  !</p>
        <div className='row'>
  <Link to="/CreerMedcin" className='b left-link'>Creer un Medcin</Link>
  <Link to="/CreerAdmin" className='b right-link'>Creer un Admin</Link>

</div>
        
    </div>
      
    </div>
  )
}
