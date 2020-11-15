import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../logos/Logo.png';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <Container>
            <Navbar className="" collapseOnSelect expand="md" >
                <Navbar.Brand href=""><img style={{height:"60px"}} src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="" >Home</Nav.Link>
                        <Nav.Link href="" >About</Nav.Link>
                        <Nav.Link href="" >Service</Nav.Link>
                        <Nav.Link href="" >Concerns</Nav.Link>
                        <Nav.Link href="" >Event</Nav.Link>
                        <Nav.Link href="" >Contact</Nav.Link>
                    </Nav>
                    <button className="btn greenBtn" >Login</button>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;