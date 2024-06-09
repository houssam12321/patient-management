import React, { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import logo from '../../Assets/2.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import './AjoutMed.css';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function MedcinForm() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [adresse, setAdresse] = useState('');
  const [cin, setCin] = useState('');
  const [specialite, setSpecialite] = useState('Radiologie'); // Valeur par défaut : Radiologie
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const errors = {};
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!nameRegex.test(nom)) {
      errors.nom = 'Le nom ne doit contenir que des lettres.';
    }

    if (!nameRegex.test(prenom)) {
      errors.prenom = 'Le prénom ne doit contenir que des lettres.';
    }

    if (!nameRegex.test(adresse)) {
      errors.adresse = 'L\'adresse ne doit contenir que des lettres.';
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      setErrors({});
    }

    const medcinData = {
      nom: nom,
      prenom: prenom,
      date_naissance: dateNaissance,
      adresse: adresse,
      cin: cin,
      specialite: specialite
    };

    try {
      const response = await axios.post('http://localhost:8083/medcin', medcinData);
      console.log('Médecin ajouté avec succès :', response.data);
      setMessage('Médecin ajouté avec succès');
      // Réinitialiser le formulaire après l'ajout du médecin
      setNom('');
      setPrenom('');
      setDateNaissance('');
      setAdresse('');
      setCin('');
      setSpecialite('');
    } catch (error) {
      setMessage('Erreur lors de l\'ajout du médecin');
      console.error('Erreur lors de l\'ajout du médecin :', error);
    }
  };

  return (
    <div>
      <AdminSidebar />
      <div className='Nav'>
        <img className='logo' src={logo} alt="" />
      </div>
      <div className='core-p' style={{ width: '44rem', height: 'auto', marginLeft: '20rem', marginTop: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <PersonAddIcon sx={{ fontSize: 30, marginRight: '1rem' }} />
          <h2 style={{ margin: 0 }}>Ajouter un Médecin</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            className='input-p'
            label="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            error={!!errors.nom}
            helperText={errors.nom}
          />
          <TextField
            className='input-p'
            label="Prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            error={!!errors.prenom}
            helperText={errors.prenom}
          />
          <TextField
            className='input-p'
            label="Date de Naissance"
            type="date"
            value={dateNaissance}
            onChange={(e) => setDateNaissance(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            className='input-p'
            label="Adresse"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
            error={!!errors.adresse}
            helperText={errors.adresse}
          />
          <TextField
            className='input-p'
            label="CIN"
            value={cin}
            onChange={(e) => setCin(e.target.value)}
          />
          <Select
            className='input-p'
            label="Spécialité"
            value={specialite}
            onChange={(e) => setSpecialite(e.target.value)}
          >
            <MenuItem value="Radiologie">Radiologie</MenuItem>
            <MenuItem value="Chirurgien">Chirurgien</MenuItem>
            <MenuItem value="Generaliste">Généraliste</MenuItem>
          </Select>
          <Button type="submit" variant="contained">Ajouter</Button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}
