import React from 'react'
import './Home.css'
import logo from'../../Assets/2.png'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className='App'>
        <div className='Nav'>
            <img className='logo' src={logo} alt="" />
        </div>
    
    <div className='container'>
        <p style={{fontFamily:'unset', fontWeight:'bold', fontSize:'2rem'}}> Bienvenue dans notre plateforme !</p>
        <div className='row'>
  <Link to="patient" className='b left-link'>Espace Patient</Link>
  <Link to="/admin/accueil" className='b right-link'>Espace Admin</Link>
</div>
        
    </div>
      
    </div>
  )
}
