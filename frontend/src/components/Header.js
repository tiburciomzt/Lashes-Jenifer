import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='text-center'>
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Link to="/">
                        <Navbar.Brand> LashesJenifer</Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Link to="/tecnicas">
                        <Nav.Link href='/tecnicas'> <i className='fas fa-certificate'></i>Tecnicas</Nav.Link>
                        </Link>
                        
                        <Link to="/contacto">
                        <Nav.Link href='/contacto'> <i className='fas fa-envelope'></i>Contacto</Nav.Link>
                        </Link>
                    
                </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
         )
}

export default Header
