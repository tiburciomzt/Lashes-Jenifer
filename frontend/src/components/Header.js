import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
    return (
        <header className='text-center'>
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand className="text-left" href="/">LashesJenifer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/tecnicas"><i className='fas fa-certificate'></i>Tecnicas</Nav.Link>
                        <Nav.Link href="/contacto"><i className='fas fa-envelope'></i>Contacto</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
         )
}

export default Header
