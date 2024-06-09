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

export default function ListeMedcin() {
  const [medcins, setMedcins] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedMedcin, setSelectedMedcin] = useState({});
  const [updatedMedcin, setUpdatedMedcin] = useState({});

  useEffect(() => {
    loadMedcins();
  }, []);

  const loadMedcins = async () => {
    const result = await axios.get("http://localhost:8083/medcins");
    setMedcins(result.data);
  };

  const handleEditClick = (medcin) => {
    setSelectedMedcin(medcin);
    setUpdatedMedcin({ ...medcin });
    setOpenDialog(true);
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:8083/medcin/${id}`);
      loadMedcins(); // Refresh the medcin list after successful delete
    } catch (error) {
      console.error('Error deleting medcin:', error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedMedcin({ ...updatedMedcin, [name]: value });
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`http://localhost:8083/medcin/${selectedMedcin.id}`, updatedMedcin);
      loadMedcins(); // Refresh the medcin list after successful update
      setOpenDialog(false);
    } catch (error) {
      console.error('Error updating medcin:', error);
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
              <th scope="col">Specialite</th>


              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {medcins.map((medcin, index) => (
              <tr key={index}>
                <td>{medcin.id}</td>
                <td>{medcin.nom}</td>
                <td>{medcin.prenom}</td>
                <td>{medcin.adresse}</td>
                <td>{new Date(medcin.date_naissance).toLocaleDateString()}</td>
                <td>{medcin.cin}</td>
                <td>{medcin.specialite}</td>


                <td>
                  <button className="btn btn-primary btn-sm"><InfoIcon/></button>
                  <button className="btn btn-success btn-sm" onClick={() => handleEditClick(medcin)}><EditIcon/></button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteClick(medcin.id)}><DeleteIcon/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Dialogue pour modifier */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Modifier Médecin</DialogTitle>
        <DialogContent sx={{ padding: '2rem', textAlign: 'center' }}>
            <form>
            <label>Nom:</label>
            <input type="text" name="nom" value={updatedMedcin.nom} onChange={handleInputChange} />
            <br />
            <label>Prénom:</label>
            <input type="text" name="prenom" value={updatedMedcin.prenom} onChange={handleInputChange} />
            <br />
            <label>Adresse:</label>
            <input type="text" name="adresse" value={updatedMedcin.adresse} onChange={handleInputChange} />
            <br />
            <label>Date de naissance:</label>
            <input type="date" name="date_naissance" value={updatedMedcin.date_naissance} onChange={handleInputChange} />
            <br />
            <label>CIN:</label>
            <input type="text" name="cin" value={updatedMedcin.cin} onChange={handleInputChange} />
            <br />
            <label>Spécialité:</label>
            <input type="text" name="specialite" value={updatedMedcin.specialite} onChange={handleInputChange} />
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
