import React from 'react'
import logo from'../../Assets/2.png'
import './Admin.css'

export default function AdminDashboard() {
  return (
    <div className='app'>
    <div className='Nav'>
            <img className='logo' src={logo} alt="" />
        </div>
    <div className="form-container">
      <p className="title">Login :</p>
      <form className="form">
        <input type="email" className="input" placeholder="Email" />
        <input type="password" className="input" placeholder="Password" />
        <p className="page-link">
          <span className="page-link-label">Mot de pass Oublie?</span>
        </p>
        <button className="form-btn">Log in</button>
      </form>
      <p className="sign-up-label">
        Vous avez pas un compte ?<span className="sign-up-link">S'inscrire</span>
      </p>
      
    </div>
      
    </div>
    

      
  )
}
