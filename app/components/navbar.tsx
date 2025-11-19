'use client'
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function ModernNavbar() {
    // State untuk efek shadow saat scroll
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar 
            expand="lg" 
            fixed="top" 
            style={{ transition:"all 0.3s ease" }}
            className={`${scrolled ? 'bg-dark-custom border-brand-bottom py-2' : 'bg-transparent py-4'}`}
        >
            <Container>
                <Navbar.Brand href="#home" className="fw-bold text-brand fs-3" style={{letterSpacing: '3px'}}>
                    L A U R E L E Y
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className="border-0 shadow-none bg-light"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0 align-items-center">
                        <Nav.Link href="#home" className="text-white mx-3 small text-uppercase">Home</Nav.Link>
                        <Nav.Link href="#about" className="text-white mx-3 small text-uppercase">Story</Nav.Link>
                        <Nav.Link href="#collection" className="text-white mx-3 small text-uppercase">Collection</Nav.Link>
                        <Nav.Link href="#features" className="text-white mx-3 small text-uppercase">Essence</Nav.Link>
                        <Button href="#contact" variant="outline-light" className="mt-3 btn-brand rounded-0">
                            Order Now
                        </Button>
                    </Nav>    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default ModernNavbar;