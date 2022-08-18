import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import LoginForm from '../components/LoginForm/LoginForm';
import './styles.css';

function LandingPage() {
  return (
      <>
    <Navbar expand="lg" variant="dark" className='nav-head'>
      <Container className='nav-container'>
        <Navbar.Brand href="#home">Ref-U-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-link-items'>
          <Nav className="navbar-link">
            <Nav.Link href="#link">About Us</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='landing-body'>
        <LoginForm/>
        </div>
    </>
  )
}

export default LandingPage