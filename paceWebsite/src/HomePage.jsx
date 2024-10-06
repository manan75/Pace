import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarComponent from './NavbarComponent';
import {  Row, Col, Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './CustomCSS/HomePageCSS.css'
import HomePage1 from './assets/HomePage1.jpeg'
import Jellyfish from './assets/jellyfish.jpeg'
import aerosol from './assets/aerosol.jpeg'
import buildPace from './assets/buildPace.jpeg'
import HomePageSection from './HomePageSection'  
import MapCarousel from './MapCarousel';
import MapSwitcher from './MapSwitcher';


function HomePage(){

  const cardData = [
    { title: 'Know more about PACE', img:'https://images-assets.nasa.gov/image/KSC-20231204-PH-KLS01_0027/KSC-20231204-PH-KLS01_0027~small.jpg' },
    { title: 'Exploring phytoplanktons', img: 'https://planktonforhealth.co.uk/wp-content/uploads/2017/04/What-are-Marine-Phytoplankton.jpg' },
    { title: 'What is aerosol?', img: aerosol },
    { title: 'Build your own PACE', img: buildPace },
    { title: 'Ocean Ecology', img: Jellyfish },
    { title: 'Ocean Colour', img: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/24M3ED4VLZG43BVMMHR6RV4NQA.jpg&w=1200' },
  ];



    return(
        <>
        
        <NavbarComponent/>

        <Container fluid>
      <Row style={{maxHeight:'500px',minHeight:'500px'}}>
        {/* Left Sidebar */}
        <Col md={4} className="heading-text"style={{ backgroundColor: '#4AAEB5', padding: '20px' }}>
        <h1>LEARNING WITH PACE!</h1>


          <h2 style={{ backgroundColor: '#32ef38', padding: '10px' }}>PLANKTON</h2>
          <h2 style={{ backgroundColor: '#ef9c32', padding: '10px' }}>AEROSOL</h2>
          <h2 style={{ backgroundColor: '#5afcf7', padding: '10px' }}>CLOUD</h2>
          <h2 style={{ backgroundColor: '#0a6cda', padding: '10px' }}>OCEAN ECOSYSTEM</h2>
          
        </Col>

        {/* Right Carousel */}
        <Col md={8} className="p-0">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-height"
                src='https://magazine.utoronto.ca/wp-content/uploads/2022/04/children-learning-about-the-environment.jpg'
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>PACE</h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
           
          </Carousel>
        </Col>
      </Row>
    </Container>



 <Carousel style={{ height: '500px'}}> {/* Adjust height as needed */}
      <Carousel.Item style={{ height: '100%' }}>
        <img
          className="d-block w-100"
          src='https://images.adsttc.com/media/images/5212/d4b5/e8e4/4e20/3000/0241/large_jpg/landscape_hudson_park.jpg?1376965772'
          alt="First slide"
          style={{ objectFit: 'cover', height: '500px' }} // Ensures image covers the height
        />
        <Carousel.Caption>
          <h3>OUR MISSION</h3>
          <p>To provide the resources of PACE to our young generations</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

      <MapSwitcher/>


    <div className="container-fluid bg-blue text-center py-5">
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card  text-white card-hover">
              <div
                className="card-img-top card-image h-100"
                style={{ backgroundImage: `url(${card.img})` }}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <a href="#" className="btn btn-light">Read more</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>



<HomePageSection/>




    <div className="container-fluid learning-hub-section text-center py-5">
      <h2 className="text-white mb-4">Learning Hub</h2>
      <div className="row justify-content-center">
        <div className="col-md-3 mb-3">
          <div className="learning-card">
            <h4 className="text-white">8-11 Age</h4>
          
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="learning-card">
            <h4 className="text-white">12-15 Age</h4>
          
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="learning-card">
            <h4 className="text-white">16+ Age</h4>
          
          </div>
        </div>
      </div>
    </div>


    

 

 

        </>
    )
}
export default HomePage;