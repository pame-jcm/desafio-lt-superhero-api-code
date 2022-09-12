import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const NavbarPrin = ({OnClickFilterSuperHero}) => {
  const [nameSuperhero, setNameSuperhero] = useState('');

  return (
        <Navbar key="md" bg="dark" variant="dark" expand="md" className="mb-3 sticky-top">
          <Container fluid>
            <Navbar.Brand href="#">Desafío SuperHero Api </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-md"
              aria-labelledby="offcanvasNavbarLabel-expand-md"
              placement="end"
              bg="dark"
              variant="dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                  Búsqueda
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {/* Nav link */}
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search Name"
                    className="me-2"
                    aria-label="Search"
                    size="sm"
                    onChange = {(e) => setNameSuperhero(e.target.value)}
                    value = {nameSuperhero}
                  />
                  <Button variant="outline-success" size="sm" onClick={() => OnClickFilterSuperHero(nameSuperhero)}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  )
}

export default NavbarPrin