import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import logo from '../../Assets/2.png';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

export default function ListeConsultation() {
  const [consultations, setConsultations] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedConsultation, setSelectedConsultation] = useState({});
  const [updatedConsultation, setUpdatedConsultation] = useState({});

  useEffect(() => {
    loadConsultations();
  }, []);

  const loadConsultations = async () => {
    const result = await axios.get("http://localhost:8083/consultations");
    setConsultations(result.data);
  };

  const handleEditClick = (consultation) => {
    setSelectedConsultation(consultation);
    setUpdatedConsultation({ ...consultation });
    setOpenDialog(true);
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:8083/consultation/${id}`);
      loadConsultations(); // Refresh the consultation list after successful delete
    } catch (error) {
      console.error('Error deleting consultation:', error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedConsultation({ ...updatedConsultation, [name]: value });
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`http://localhost:8083/consultation/${selectedConsultation.id}`, updatedConsultation);
      loadConsultations(); // Refresh the consultation list after successful update
      setOpenDialog(false);
    } catch (error) {
      console.error('Error updating consultation:', error);
    }
  };

  return (
    <div className='app'>
      <AdminSidebar/>
      <div className='Content'>
        <div className='Nav'>
          <img className='logo' src={logo} alt="" />
        </div>
      </div>
      <div className='table-p'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Patient</th>
              <th scope="col">Medcin</th>

              <th scope="col">Date de consultation</th>
              <th scope="col">Motif</th>
              <th scope="col">Frais de consultation</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {consultations.map((consultation, index) => (
            <tr key={index}>
              <td>{consultation.id}</td>
              <td>{consultation.patient.nom} {consultation.patient.prenom}</td>
              <td>{consultation.medcin.nom} {consultation.medcin.prenom}</td>
              <td>{new Date(consultation.dateConsultation).toLocaleDateString()}</td>
              <td>{consultation.motif}</td>
              <td>{consultation.fraisConsultation} MAD</td>
              
              <td>
                <button className="btn btn-primary btn-sm"><InfoIcon/></button>
                <button className="btn btn-success btn-sm" onClick={() => handleEditClick(consultation)}><EditIcon/></button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteClick(consultation.id)}><DeleteIcon/></button>
              </td>
            </tr>
          ))}

          </tbody>
        </table>
      </div>

      {/* Dialogue pour modifier */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Modifier Consultation</DialogTitle>
        <DialogContent sx={{ padding: '2rem', textAlign: 'center' }}>
          <form>
            <label>Date de consultation:</label>
            <input type="date" name="dateConsultation" value={updatedConsultation.dateConsultation} onChange={handleInputChange} />
            <br />
            <label>Motif:</label>
            <input type="text" name="motif" value={updatedConsultation.motif} onChange={handleInputChange} />
            <br />
            <label>Frais de consultation:</label>
            <input type="number" name="fraisConsultation" value={updatedConsultation.fraisConsultation} onChange={handleInputChange} />
            <br />
          </form>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', paddingBottom: '2rem' }}>
          <Button onClick={handleCloseDialog} color="primary">Annuler</Button>
          <Button onClick={handleSaveChanges} color="primary">Enregistrer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
