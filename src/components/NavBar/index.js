import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import logoImage from '@/assets/logo.png';

import { Logo } from './styles';

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand>
          <Logo src={logoImage} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/contracts" eventKey={1}>
              Contratos
            </Nav.Link>
            <Nav.Link as={Link} to="/customers" eventKey={2}>
              Clientes
            </Nav.Link>
            <Nav.Link as={Link} to="/services" eventKey={3}>
              Serviços
            </Nav.Link>
            <Nav.Link as={Link} to="/status" eventKey={4}>
              Status
            </Nav.Link>
            <Nav.Link as={Link} to="/users" eventKey={5}>
              Usuários
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/my-profile">
              Meu perfil
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Sair
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
