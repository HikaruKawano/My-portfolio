import React from 'react';
import {
   Navbar,
   Container,
   Nav
  } from 'react-bootstrap';

// import { Container } from './styles';

const navBar: React.FC = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href='#home' aria-controls='basic-navbar-nav'>My-Portfolio</Navbar.Brand>
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Item><Nav.Link href='#home'>Home</Nav.Link></Nav.Item>
            <Nav.Item> <Nav.Link href='#sobreMim'>Sobre mim</Nav.Link></Nav.Item>
            <Nav.Item> <Nav.Link href='#projetos'>Projetos</Nav.Link></Nav.Item>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default navBar;