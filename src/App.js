import logo from './logo.svg';
import './App.css';
import { BrowserRouter as  Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import PatientDashboard from './components/Patient/PatientDashboard';
import AdminAccueil from './components/Admin/AdminAccueil';
import Dpatient from './components/Dpatient/Dpatient';

import ListePatient from './components/Dpatient/ListePatient';
import AjoutConsultation from './components/Consultation/AjoutConsultation';
import ListeConsultation from './components/Consultation/ListeConsultation';
import AjoutC from './components/Consultation/AjoutC'
import Rdv1 from './components/Rdv/Rdv1'
import 'bootstrap/dist/css/bootstrap.min.css';

import AjoutPatient from './components/Dpatient/AjoutPatient';
import AjoutMed from './components/Medcin/AjoutMed';
import ListeMed from './components/Medcin/ListeMed';
import Register1 from './components/Login/RegisterProfil'
import LoginAdmin from './components/Login/LoginAdmin';
import RegisterProfil from './components/Login/RegisterProfil'
import FormAdmin from './components/Login/FormAdmin';
import FormMedcin from './components/Login/FormMedcin'
import LoginMedcin from './components/Login/LoginMedcin';


import Header from './components/header';
function App() {
  return (
    <div className='App'>

      <Router>
        <Routes>




          <Route exact path="/" element={<Home/>} />

          <Route path="admin/accueil" element={<AdminAccueil />} />

          <Route path="admin/ajoutPatient" element={<AjoutPatient />} />
          
          <Route path="/listePatient" element={<ListePatient />} />

          <Route path="ajoutC" element={<AjoutC />} />

          <Route path="/listeConsultation" element={<ListeConsultation />} />

          <Route path="admin/rendez-vous" element={<Rdv1 />} />

          <Route path="/patient" element={<PatientDashboard></PatientDashboard>} />

          <Route path="/ajouterMedcin" element={<AjoutMed/>} />
          <Route path="/listemedcin" element={<ListeMed/>} />
          {/*<Route path="/EspaceAdmin" element={<Register1/>} /> */}
          <Route path="/LoginAdmin" element={<LoginAdmin/>} />
          <Route path="/CreerProfil" element={<RegisterProfil/>} />
          <Route path="/CreerAdmin" element={<FormAdmin/>} />
          <Route path="/CreerMedcin" element={<FormMedcin/>} />
          <Route path="/LoginMedcin" element={<LoginMedcin/>} />

          










        </Routes>
      </Router>   
    </div>
    
  );
}

export default App;
