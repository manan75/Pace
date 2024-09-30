import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarComponent from './NavbarComponent';
import {  Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './CustomCSS/HomePageCSS.css'
import HomePage1 from './assets/HomePage1.jpeg'


function HomePage(){
    return(
        <>
        <NavbarComponent/>

        <Container fluid>
      <Row>
        {/* Left Sidebar */}
        <Col md={4} className="heading-text"style={{ backgroundColor: '#4AAEB5', padding: '20px' }}>
        <h1>LEARNING WITH PACE!</h1>


          <h2 style={{ backgroundColor: '#32ef38', padding: '10px' }}>PLANKTON</h2>
          <h2 style={{ backgroundColor: '#ef9c32', padding: '10px' }}>AEROSOL</h2>
          <h2 style={{ backgroundColor: '#5afcf7', padding: '10px' }}>CLOUD</h2>
          <h2 style={{ backgroundColor: '#0a6cda', padding: '10px' }}>OCEAN ECOSYSTEM</h2>
          
        </Col>

        {/* Right Carousel */}
        <Col md={8}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=First+Slide"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>PACE</h3>
                <p>Some representative placeholder content for the first slide.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Second+Slide"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second Slide Label</h3>
                <p>Some representative placeholder content for the second slide.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Third+Slide"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third Slide Label</h3>
                <p>Some representative placeholder content for the third slide.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>



 <Carousel style={{ height: '500px', paddingTop:"10px" }}> {/* Adjust height as needed */}
      <Carousel.Item style={{ height: '100%' }}>
        <img
          className="d-block w-100"
          src={HomePage1}
          alt="First slide"
          style={{ objectFit: 'cover', height: '500px' }} // Ensures image covers the height
        />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Some representative placeholder content for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '100%' }}>
        <img
          className="d-block w-100"
          src={HomePage1}
          alt="Second slide"
          style={{ objectFit: 'cover', height: '500px' }} // Ensures image covers the height
        />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Some representative placeholder content for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '100%' }}>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1920x500?text=Third+Slide"
          alt="Third slide"
          style={{ objectFit: 'cover', height: '100%' }} // Ensures image covers the height
        />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Some representative placeholder content for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 

 

        </>
    )
}
export default HomePage;