import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../assets/Images/logo.png';
import arrowMarket from './../../assets/Images/arrow-market.png';
import './NavBar.css';


function NavBarComponent() {
    return (

        <Navbar expand="lg" bg="white" className='navbar sticky-top'>
                <Navbar.Brand href="/">
                    <img alt="Logo" src={logo} className='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="me-auto justify-content-end align-items-center navLinks">
                    <Nav.Link className='linkName' href="/how-it-works">HOW IT WORKS</Nav.Link>
                    <Nav.Link className='linkName' href="/labs-club">LABS CLUB</Nav.Link>
                    <Nav.Link className='linkName' href="/resorts-and-properties">RESORTS & PROPERTIES</Nav.Link>
                    <Nav.Link className='linkName' href="#features"><button type="button" className="btn btn-outline-dark">NFT MARKETPLACE <img alt="arrowMarket" src={arrowMarket} className='arrow' /></button></Nav.Link>
                    <Nav.Link className='linkName' href="#pricing"><button type="button" className="btn btn-dark">Connect The Wallet</button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>


    );
}

export default NavBarComponent;