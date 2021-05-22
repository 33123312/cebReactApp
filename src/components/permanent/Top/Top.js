import React from 'react';

import logoCeb from './res/images/logoCeb.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './res/StyleSheets/Top.css';
import './res/StyleSheets/iconsStyles.css';

import{ Link } from 'react-router-dom';

function Top() {
  return (
    <header className="Top">

        <Navbar expand="lg" className= "contNav py-2 " bg="light" >
        <Navbar.Brand href="/">
          <img src={logoCeb} className="logoCeb" alt= "logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" p-x  />
        <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="ml-auto">
                <Nav.Link href="/" className="text-primary" >Inicio</Nav.Link>

                <NavDropdown title="Consultas" id="basic-nav-dropdown">
                  <NavDropdown.Item href="https://docs.google.com/forms/d/e/1FAIpQLScwfcRbHA9dXHS8wiS70wKPGHAFT_VTpGwIN39cMabJhMDAdw/viewform" >
                      <a>Constancias</a></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="/">Boleta</Link></NavDropdown.Item>
                
              </NavDropdown>  

              <NavDropdown title="Información" id="basic-nav-dropdown">
                <NavDropdown.Item ><Link to="/fichaje">Aspirantes</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/transporte">Transporte</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/acuerdo286">Acuerdo 286</Link></NavDropdown.Item>
                  
                <NavDropdown title="Capacitaciones" id="basic-nav-dropdown">
                  <NavDropdown.Item ><Link to="/auxEdu">Intervención Educativa</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="/info">Informática</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="/salud">Higiene y Salud</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="/diseno">Diseño</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="/conta">Contabilidad</Link></NavDropdown.Item>


                </NavDropdown>

              </NavDropdown>
      
                <NavDropdown title="Nosotros" id="basic-nav-dropdown">
                  <NavDropdown.Item ><Link to="/mision-vision">Identidad</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="/historia">Historia</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="/ubicacion">Ubicación</Link></NavDropdown.Item>
                </NavDropdown>
      




             </Nav>
             </Navbar.Collapse>
        </Navbar>

    </header>

  );
}

export default Top;