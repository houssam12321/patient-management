import * as React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import HomeIcon from '@mui/icons-material/Home';
const drawerWidth = 240;

export default function ClippedDrawer() {
  const [openPatient, setOpenPatient] = React.useState(true);
  const [openConsultations, setOpenConsultations] = React.useState(true);
  const [openRendezVous, setOpenRendezVous] = React.useState(true);

  const handlePatientClick = () => {
    setOpenPatient(!openPatient);
  };

  const handleConsultationsClick = () => {
    setOpenConsultations(!openConsultations);
  };

  const handleRendezVousClick = () => {
    setOpenRendezVous(!openRendezVous);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' , backgroundColor: 'teal' ,marginTop:'79px' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List  sx={{ color: '#fff' }}>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/admin/accueil">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={<span className= "boldText" >Home</span>} />
              
            </ListItemButton>
            <ListItemButton onClick={handlePatientClick}>
              <ListItemIcon>   
                <AssignmentIndIcon />
              </ListItemIcon>
              <ListItemText primary={<span className= "boldText" >Patient</span>} />
              {openPatient ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openPatient} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} component={Link} to="/admin/ajoutPatient">
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<span className= "boldText sizeText" >Ajouter patient</span>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} component={Link} to="/admin/listePatient" >
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                 <ListItemText primary={<span className= "boldText sizeText" >Liste des patients</span>} />
                  </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleConsultationsClick}>
              <ListItemIcon>
                <StickyNote2Icon />
              </ListItemIcon>
              <ListItemText primary={<span className= "boldText" >Consultation</span>} />
              {openConsultations ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openConsultations} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} component={Link} to="/admin/ajoutConsultation">
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<span className= "boldText sizeText" >Ajouter consultation</span>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} component={Link} to="/admin/listeConsultation">
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary={<span className= "boldText sizeText" >Liste des consultations</span>} />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleRendezVousClick} >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Rendez-vous" />
              {openRendezVous ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openRendezVous} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} component={Link} to="/admin/rendez-vous">
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<span className= "boldText sizeText" >Ajout</span>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary={<span className= "boldText sizeText" >Voir</span>} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
