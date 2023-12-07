import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary ps-5 pe-5 pt-4 pb-4">
      <Container fluid>
        <Navbar.Brand href="#" className=''>SADAQAH</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav-bar shadow ps-3 pe-3 m-auto my-lg-0 gap-3"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Nav.Link href="#home" className='n-link'> Home </Nav.Link>
            <Nav.Link href="#features" className='n-link'>About us</Nav.Link>
            <Nav.Link href="#pricing" className='n-link'>Causes</Nav.Link>
            <Nav.Link href="#pricing" className='n-link'>News</Nav.Link>
            <NavDropdown title="Pages" className='n-link' id="navbarScrollingDropdown" >
              <NavDropdown.Item href="#action3" className='n-link'>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='n-link'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='n-link'>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className='n-link'>
            Contact us
            </Nav.Link>
          </Nav>
          <Button className='button' variant="outline-success" size="lg">Donate Now</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Navigation;