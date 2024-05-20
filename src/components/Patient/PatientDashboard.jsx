import React, { useState } from 'react';
import logo from '../../Assets/2.png';
import './PatientDash.css';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PatientDashboard = () => {
  const [patient, setPatient] = useState(null);
  const [consultations, setConsultations] = useState([]);
  const [id, setId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchPatientInfo = async () => {
    setLoading(true);
    try {
      const patientResponse = await fetch(`http://localhost:8083/patient/${id}`);
      if (!patientResponse.ok) {
        throw new Error('Patient Non Trouve');
      }
      const patientData = await patientResponse.json();
      setPatient(patientData);

      const consultationsResponse = await fetch(`http://localhost:8083/patient/${id}/consultations`);
      if (!consultationsResponse.ok) {
        throw new Error('Consultations not found');
      }
      const consultationsData = await consultationsResponse.json();
      setConsultations(consultationsData);

      setErrorMessage('');
    } catch (error) {
      setPatient(null);
      setConsultations([]);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const element = document.getElementById('pdfContent');

    html2canvas(element).then((canvas) => {

      // Add patient information to the PDF
      doc.setFontSize(16);
      doc.text('Informations du Patient', 10, 260);
      doc.setFontSize(12);
      doc.text(`ID: ${patient.id}`, 10, 270);
      doc.text(`Nom: ${patient.nom}`, 10, 280);
      doc.text(`Prénom: ${patient.prenom}`, 10, 290);
      doc.text(`Date de Naissance: ${new Date(patient.date_naissance).toLocaleDateString()}`, 10, 300);
      doc.text(`Adresse: ${patient.adresse}`, 10, 310);
      doc.text(`CIN: ${patient.cin}`, 10, 320);

      // Add consultations information to the PDF
      doc.setFontSize(16);
      doc.text('Consultations', 10, 340);
      doc.setFontSize(12);
      let y = 350;
      consultations.forEach((consultation, index) => {
        doc.text(`Consultation ${index + 1}`, 10, y);
        doc.setFontSize(10);
        doc.text(`Date: ${new Date(consultation.dateConsultation).toLocaleDateString()}`, 10, y + 10);
        doc.text(`Motif: ${consultation.motif}`, 10, y + 20);
        doc.text(`Commentaire: ${consultation.commentaire}`, 10, y + 30);
        doc.setFontSize(12);
        y += 40;
      });

      doc.save('patient_info.pdf');
    });
  };

  return (
    <div className='dashboard'>
      <div className='Nav'>
        <img className='logo' src={logo} alt='' />
      </div>
      <div className='InputContainer'>
        <input
          placeholder='Votre ID'
          className='input'
          name='idPat'
          type='text'
          value={id}
          onChange={handleIdChange}
        />
        <button className='searchButton' onClick={fetchPatientInfo}>
          Chercher
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {errorMessage && <p className='error'>{errorMessage}</p>}
      <div className='infoContainer'>
        {patient && (
          <div className='PatientInfo' id='pdfContent'>
            <h2><AccountCircleRoundedIcon fontSize="large" /> Informations du Patient</h2>
            <p><strong>ID:</strong> {patient.id}</p>
            <p><strong>Nom:</strong> {patient.nom}</p>
            <p><strong>Prénom:</strong> {patient.prenom}</p>
            <p><strong>Date de Naissance:</strong> {new Date(patient.date_naissance).toLocaleDateString()}</p>
            <p><strong>Adresse:</strong> {patient.adresse}</p>
            <p><strong>CIN:</strong> {patient.cin}</p>
          </div>
        )}
        {consultations.length > 0 && (
          <div id='consultations' className='Consultations'>
            <h2><SummarizeRoundedIcon fontSize="large"/> Consultations</h2>
            <div className='consultationsCount'>
              Nombre de consultations: {consultations.length}
            </div>
            <ul>
              {consultations.map(consultation => (
                <li key={consultation.id} className='consultationItem'>
                  <p><strong>Date:</strong> {new Date(consultation.dateConsultation).toLocaleDateString()}</p>
                  <p><strong>Motif:</strong> {consultation.motif}</p>
                  <p><strong>Commentaire:</strong> {consultation.commentaire}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <button className='pdfButton' onClick={handleDownloadPDF}>
        Télécharger PDF
      </button>
    </div>
  );
};

export default PatientDashboard;
