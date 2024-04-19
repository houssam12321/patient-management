import logo from './logo.svg';
import './App.css';
import { BrowserRouter as  Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import AdminDashboard from './components/Admin/AdminDashboard';
import PatientDashboard from './components/Patient/PatientDashboard';
import AdminAccueil from './components/Admin/AdminAccueil';
import Dpatient from './components/Dpatient/Dpatient';
import ListePatient from './components/Dpatient/ListePatient';
import AjoutConsultation from './components/Consultation/AjoutConsultation';
import ListeConsultation from './components/Consultation/ListeConsultation';
import Rdv from './components/Rdv/Rdv';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />

          <Route path="/admin" element={<AdminDashboard />}/>
          <Route path="admin/accueil" element={<AdminAccueil />} />

          <Route path="admin/ajoutPatient" element={<Dpatient />} />
          
          <Route path="admin/listePatient" element={<ListePatient />} />

          <Route path="admin/ajoutConsultation" element={<AjoutConsultation />} />
          <Route path="admin/listeConsultation" element={<ListeConsultation />} />

          <Route path="admin/rendez-vous" element={<Rdv />} />


          <Route path="/patient" element={<PatientDashboard></PatientDashboard>} />
        </Routes>
      </Router>   
    </div>
    
  );
}

export default App;
