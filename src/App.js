import logo from './logo.svg';
import './App.css';
import { BrowserRouter as  Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import AdminDashboard from './components/Admin/AdminDashboard';
import PatientDashboard from './components/Patient/PatientDashboard';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route exact path="/" element={<Home/>} />

          {/* Route pour le tableau de bord de l'admin */}
          <Route path="/admin" element={<AdminDashboard></AdminDashboard>} />

          {/* Route pour le tableau de bord du client */}
          <Route path="/patient" element={<PatientDashboard></PatientDashboard>} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
