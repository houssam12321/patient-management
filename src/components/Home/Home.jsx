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
        <p style={{fontFamily:'cursive' , fontSize:'2rem'}}> Bienvenue dans notre plateforme !</p>
      <div className='row'>
        {/* Section pour l'espace client */}
        <div className='col'>
          <Link to="patient" className='b'>Espace Patient</Link>
          {/* Mettez ici le contenu spécifique à l'espace client */}
        </div>
        {/* Section pour l'espace administrateur */}
        <div className='col'>
        <Link to="/admin" className='b'>Espace Admin</Link>
          {/* Mettez ici le contenu spécifique à l'espace administrateur */}
        </div>
      </div>
    </div>
    </div>
  )
}
