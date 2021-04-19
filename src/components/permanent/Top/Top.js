import React from 'react';

import logoCeb from './res/images/logoCeb.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './res/StyleSheets/Top.css';
import './res/StyleSheets/iconsStyles.css';


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
              <Nav.Link href="/" className="text-primary" ><i class="icon icon-home" style={{marginRight:5}} />Inicio</Nav.Link>
              <NavDropdown title="Nosotros" id="basic-nav-dropdown">
                <NavDropdown.Item href="/mision-vision">Identidad</NavDropdown.Item>
                <NavDropdown.Item href="/historia">Historia</NavDropdown.Item>
                <NavDropdown.Item href="/ubicacion  ">Ubicacion</NavDropdown.Item>
              </NavDropdown>  
      
              <NavDropdown title="Información" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Aspirantes</NavDropdown.Item>
                <NavDropdown.Item href="/transporte">Transporte</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#link">boleta</Nav.Link>

             </Nav>
             </Navbar.Collapse>
        </Navbar>

    </header>

  );
}

export default Top;