import React, { useState, useEffect } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import logo from '../../Assets/2.png';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import axios from 'axios';
import './Consultation.css';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PaidIcon from '@mui/icons-material/Paid';
import InputAdornment from '@mui/material/InputAdornment';


export default function ConsultationForm() {
  const [patients, setPatients] = useState([]);
  const [medcins, setMedcins] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedMedcin, setSelectedMedcin] = useState(null);
  const [dateConsultation, setDateConsultation] = useState('');
  const [motif, setMotif] = useState('');
  const [commentaire, setCommentaire] = useState('');
  const [fraisConsultation, setFraisConsultation] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Récupérer la liste des patients
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:8083/patients');
        setPatients(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des patients :', error);
      }
    };

    // Récupérer la liste des médecins
    const fetchMedcins = async () => {
      try {
        const response = await axios.get('http://localhost:8083/medcins');
        setMedcins(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des médecins :', error);
      }
    };

    fetchPatients();
    fetchMedcins();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedPatient && selectedMedcin) {
      // Logique pour envoyer les données de la consultation à votre API
      const consultationData = {
        patient: { id: selectedPatient.id },
        medcin: { id: selectedMedcin.id },
        dateConsultation: dateConsultation,
        motif: motif,
        commentaire: commentaire,
        fraisConsultation: fraisConsultation,
      };

      try {
        // Envoyer les données à votre API
        const response = await axios.post('http://localhost:8083/consultation', consultationData);
        console.log('Consultation ajoutée avec succès :', response.data);
        setMessage('Consultation ajoutée avec succès');
        // Réinitialiser le formulaire après l'ajout de la consultation
        setSelectedPatient(null);
        setSelectedMedcin(null);
        setDateConsultation('');
        setMotif('');
        setCommentaire('');
        setFraisConsultation('');
      } catch (error) {
        setMessage('Erreur lors de l\'ajout de la consultation');
        console.error('Erreur lors de l\'ajout de la consultation :', error);
      }
    } else {
      setMessage('Veuillez sélectionner un patient et un médecin.');
      console.error('Veuillez sélectionner un patient et un médecin.');
    }
  };

  return (
    <div>
      <AdminSidebar />
      <div className='Nav'>
        <img className='logo' src={logo} alt="" />
      </div>
      <div className='core-c' style={{ width: '44rem', height: 'auto', marginLeft: '20rem', marginTop: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <NoteAddIcon sx={{ fontSize: 30, marginRight: '1rem' }} />
          <h2 style={{ margin: 0 }}>Ajouter une Consultation</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <Autocomplete
            value={selectedPatient}
            className='input-p'
            onChange={(event, newValue) => {
              setSelectedPatient(newValue);
            }}
            options={patients}
            getOptionLabel={(option) => `${option.id} - ${option.nom} ${option.prenom}`}
            renderInput={(params) => <TextField {...params} label="Patient" />}
            isOptionEqualToValue={(option, value) => option.id === value.id}
          />
          <Autocomplete
            value={selectedMedcin}
            className='input-p'
            onChange={(event, newValue) => {
              setSelectedMedcin(newValue);
            }}
            options={medcins}
            getOptionLabel={(option) => `${option.id} - ${option.nom} ${option.prenom}`}
            renderInput={(params) => <TextField {...params} label="Médecin" />}
            isOptionEqualToValue={(option, value) => option.id === value.id}
          />
          <TextField
            className='input-p'
            label="Date de consultation"
            type="date"
            value={dateConsultation}
            onChange={(e) => setDateConsultation(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Motif"
            className='input-p'
            value={motif}
            onChange={(e) => setMotif(e.target.value)}
          />
          <TextField
            label="Commentaire"
            multiline
            className='input-p'
            value={commentaire}
            onChange={(e) => setCommentaire(e.target.value)}
          />
          <TextField
  label="Frais de consultation"
  className='input-p'
  value={fraisConsultation}
  onChange={(e) => setFraisConsultation(e.target.value)}
  InputProps={{ // Utilisez InputProps pour personnaliser l'élément d'entrée
    startAdornment: ( // Définissez startAdornment pour ajouter l'icône
      <InputAdornment position="start">
        <PaidIcon />
      </InputAdornment>
    ),
  }}
/>
          <Button type="submit" variant="contained">Ajouter</Button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}
