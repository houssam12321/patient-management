import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginAdmin.css'

const LoginAdmin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    let validationErrors = {};

    if (!formData.email) {
      isValid = false;
      validationErrors.email = "Email is required";
    }

    if (!formData.password) {
      isValid = false;
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      isValid = false;
      validationErrors.password = "Password must be at least 6 characters";
    }

    setErrors(validationErrors);

    if (isValid) {
      axios.get('http://localhost:3005/admin')
       .then(result => {
          let userFound = false;
          result.data.forEach(user => {
            if (user.email === formData.email) {
              userFound = true;
              if (user.password === formData.password) {
                alert("Login successfully");
                navigate('/CreerProfil', { replace: true }); // Navigate to /home
              } else {
                validationErrors.password = "Wrong password";
                setErrors(validationErrors);
              }
            }
          });
          if (!userFound) {
            validationErrors.email = "Wrong email";
            setErrors(validationErrors);
          }
        })
       .catch(err => console.log(err));
    }
  };

  return (
    
    <div className="Container">
      <div className="image"></div>
      <div className='form'>
      
      

      <form onSubmit={handleSubmit}>
        <div className="header">
          <div className='text'>S'Identifier</div>
          <div className='underline'></div>
        </div>
        <div className="inputs">
          <div className="label">
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(event) => setFormData({...formData, email: event.target.value })}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
          <div className="label">
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={(event) => setFormData({...formData, password: event.target.value })}
            />
            {errors.password && <div className="text-danger">{errors.password}</div>}
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg">Valider</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
