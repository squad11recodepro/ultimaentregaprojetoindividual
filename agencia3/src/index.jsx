import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Destinos from './Components/Pages/Destinos';
import Promocoes from './Components/Pages/Promocoes';
import Cadastroclientes from './Components/Pages/Cadastroclientes';
import Reservas from './Components/Pages/Reservas';
import Contato from './Components/Pages/Contato';
import Admin from './Components/Pages/Admin';

ReactDOM.render(
  <React.StrictMode>
    <Router> 
      <Routes> 
        <Route path="/" exact element={<Home/>}> </Route>
        <Route path="/Destinos" element={<Destinos/>}> </Route>
        <Route path="/Promocoes" element={<Promocoes/>}> </Route>
        <Route path="/Cadastroclientes" element={<Cadastroclientes/>}> </Route>
        <Route path="/Reservas" element={<Reservas/>}> </Route>
        <Route path="/Contato" element={<Contato/>}> </Route>
        <Route path="/Admin" exact element={<Admin/>}> </Route>
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
