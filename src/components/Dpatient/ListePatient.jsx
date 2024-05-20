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

export default function ListePatient() {
  const [patients, setPatients] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState({});
  const [updatedPatient, setUpdatedPatient] = useState({});

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    const result = await axios.get("http://localhost:8083/patients");
    setPatients(result.data);
  };

  const handleEditClick = (patient) => {
    setSelectedPatient(patient);
    setUpdatedPatient({ ...patient });
    setOpenDialog(true);
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:8083/patient/${id}`);
      loadPatients(); // Refresh the patient list after successful delete
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPatient({ ...updatedPatient, [name]: value });
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`http://localhost:8083/patient/${selectedPatient.id}`, updatedPatient);
      loadPatients(); // Refresh the patient list after successful update
      setOpenDialog(false);
    } catch (error) {
      console.error('Error updating patient:', error);
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
              <th scope="col">Nom</th>
              <th scope="col">Prénom</th>
              <th scope="col">Adresse</th>
              <th scope="col">Date de naissance</th>
              <th scope="col">CIN</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.id}</td>
                <td>{patient.nom}</td>
                <td>{patient.prenom}</td>
                <td>{patient.adresse}</td>
                <td>{patient.date_naissance}</td>
                <td>{patient.cin}</td>
                <td>
                  <button className="btn btn-primary btn-sm"><InfoIcon/></button>
                  <button className="btn btn-success btn-sm" onClick={() => handleEditClick(patient)}><EditIcon/></button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteClick(patient.id)}><DeleteIcon/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Dialogue pour modifier */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Modifier Patient</DialogTitle>
        <DialogContent>
          <form>
            <label>Nom:</label>
            <input type="text" name="nom" value={updatedPatient.nom} onChange={handleInputChange} />
            <br />
            <label>Prénom:</label>
            <input type="text" name="prenom" value={updatedPatient.prenom} onChange={handleInputChange} />
            <br />
            <label>Adresse:</label>
            <input type="text" name="adresse" value={updatedPatient.adresse} onChange={handleInputChange} />
            <br />
            <label>Date de naissance:</label>
            <input type="date" name="date_naissance" value={updatedPatient.date_naissance} onChange={handleInputChange} />
            <br />
            <label>CIN:</label>
            <input type="text" name="cin" value={updatedPatient.cin} onChange={handleInputChange} />
            <br />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Annuler</Button>
          <Button onClick={handleSaveChanges} color="primary">Enregistrer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
