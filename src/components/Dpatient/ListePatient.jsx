import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import logo from '../../Assets/2.png';
import './Dpatient.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

export default function ListePatient() {
  const [patient, setPatient] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    const result = await axios.get("http://localhost:8081/patient/getAll");
    setPatient(result.data);
  };

  const handleEditClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {patient.map((patient, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{patient.nom}</td>
                <td>{patient.prenom}</td>
                <td>{patient.adresse}</td>
                <td>{patient.date_naissance}</td>
                <td>
                  <button className="btn btn-primary btn-sm"><InfoIcon/></button>
                  <button className="btn btn-success btn-sm" onClick={handleEditClick}><EditIcon/></button>
                  <button className="btn btn-danger btn-sm"><DeleteIcon/></button>
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
            {/* Insérez ici votre formulaire de modification des informations du patient */}
            <label>Nom:</label>
            <input type="text" defaultValue="Nom du patient" />
            <br />
            <label>Prénom:</label>
            <input type="text" defaultValue="Prénom du patient" />
            <br />
            {/* Ajoutez d'autres champs selon vos besoins */}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Annuler</Button>
          <Button onClick={handleCloseDialog} color="primary">Enregistrer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
