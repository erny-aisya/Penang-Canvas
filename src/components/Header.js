import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <Navbar expand="lg" style={{ backgroundColor: '#003B5C' /* Penang Blue */ }}>
            <Navbar.Brand href="/" style={{ color: '#FFC72C' /* Penang Yellow */ }}>
                <img
                    src="/assets/logo.png" // Make sure your logo path is correct
                    alt="Penang Canvas Logo"
                    style={{ width: '40px', height: '40px', marginRight: '10px' }}
                />
                Penang Canvas
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/tourist-spots" style={{ color: '#FFC72C' /* Penang Yellow */ }}>Tourist Spots</Nav.Link>
                <Nav.Link as={Link} to="/food-beverages" style={{ color: '#FFC72C' /* Penang Yellow */ }}>Food & Beverages</Nav.Link>
                <Nav.Link as={Link} to="/hotels" style={{ color: '#FFC72C' /* Penang Yellow */ }}>Hotels</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Header;
