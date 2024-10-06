import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './CustomCSS/NavbarCSS.css';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <>
      <Navbar className="custom-navbar" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">LEARN WITH PACE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  HOME
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/AboutUs" style={{ textDecoration: 'none', color: 'inherit' }}>
                  ABOUT US
                </Link>
              </Nav.Link>

              {/* Learning hub routing */}
              <NavDropdown title="LEARNING HUB" id="navbarScrollingDropdown" className="custom-dropdown-toggle">
                <NavDropdown.Item className="custom-dropdown-item">
                  <Link to="/Age8To11" style={{ textDecoration: 'none', color: 'inherit' }}>
                    AGE GROUP 8-11
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="custom-dropdown-item">
                  <Link to="/ChapterListAge12to15" style={{ textDecoration: 'none', color: 'inherit' }}>
                    AGE GROUP 12-15
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="custom-dropdown-item">
                  <Link to="/Age16+" style={{ textDecoration: 'none', color: 'inherit' }}>
                    AGE GROUP 16+
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="custom-dropdown-item">
                  <Link to="/fotTeachers" style={{ textDecoration: 'none', color: 'inherit' }}>
                    For teachers
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              {/* Science routing */}
              <NavDropdown title="SCIENCE" id="navbarScrollingDropdown" className="custom-dropdown-toggle">
                <NavDropdown.Item className="custom-dropdown-item">
                  <Link to="/Science/Overview" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Overview
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="custom-dropdown-item">
                  <Link to="/Science/PhytoPlankton" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Phytoplankton Exploration
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="custom-dropdown-item">
                  <Link to="/Science/Wavelenght" style={{ textDecoration: 'none', color: 'inherit' }}>
                    PACE by wavelength
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="custom-dropdown-item">
                  <Link to="/Science/StoryMaps" style={{ textDecoration: 'none', color: 'inherit' }}>
                    StoryMaps
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              {/* PACE routing */}
              <NavDropdown title="PACE" id="navbarScrollingDropdown" className="custom-dropdown-toggle">
                <NavDropdown.Item className="custom-dropdown-item">
                  <Link to="/Science/Overview" style={{ textDecoration: 'none', color: 'inherit' }}>
                    WHAT'S UP PACE!
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="custom-dropdown-item">
                  <Link to="/Science/PhytoPlankton" style={{ textDecoration: 'none', color: 'inherit' }}>
                    PACE Instruments
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="custom-dropdown-item">
                  <Link to="/Science/Wavelenght" style={{ textDecoration: 'none', color: 'inherit' }}>
                    MISSION
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="custom-dropdown-item">
                  <Link to="/Science/StoryMaps" style={{ textDecoration: 'none', color: 'inherit' }}>
                    FUTURE
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#action2">
                <Link to="/Gallery" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Gallery
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
