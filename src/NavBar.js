import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './component/CartWidget';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';


function ColorSchemesExample() {
  return (
    
    <>
          <Navbar bg="dark" data-bs-theme="dark">   
          <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#empanadas">Empanadas</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
            <Button className="boton" variant="info">Ir al carrito</Button>{''}   
        </Container>
      </Navbar>
    
      
    </>
  );
}



export default ColorSchemesExample;
