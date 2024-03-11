import React from 'react'
import logo from'../../Assets/2.png'

export default function PatientDashboard() {
  return (
    <div>
      <div className='Nav'>
            <img className='logo' src={logo} alt="" />
        </div>
        Entrer votre CIN :
        <div class="InputContainer">
        <input placeholder="Search.." id="input" class="input" name="text" type="text"/>
  
</div>
    </div>
  )
}
