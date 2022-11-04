import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import {Grid} from '@material-ui/core';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import logo from './logo.svg';
import './App.css';

function App() {
  return (      
    <Router>
    <Navbar />
    <Routes>

    <Route path="/" element={<Login  />} />

<Route path="/home" element={<Home />} />

<Route path="/login" element={<Login />} />

      <Route path="/cadastrousuario" element={<CadastroUsuario />} />
    </Routes>
    <Footer />
  </Router>   
       
  );
}

export default App;