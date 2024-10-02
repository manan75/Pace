import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './CustomCSS/NavbarCSS.css';


function NavbarComponent(){
    return(
        <>
          <Navbar className='custom-navbar' expand="lg" >
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action2">HOME</Nav.Link>
              
              <Nav.Link href="#action2">ABOUT US</Nav.Link>
             
              <NavDropdown title="LEARNING HUB" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">LEARNING HUB</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            
              <NavDropdown title="SCIENCE" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">SCIENCE</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            
              <NavDropdown title="PACE" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">PACE</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#action2">GALLERY</Nav.Link>
            
            
            </Nav>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>

 

 

        </>
    )
}
export default NavbarComponent;