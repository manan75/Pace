import React, { useState } from 'react';
import { Container, Row, Col, Button, Image, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './CustomCSS/HomePageCSS.css';

function HomePage() {
  const items = [
    {
      id: 1,
      imgSrc: 'https://images.theconversation.com/files/223729/original/file-20180619-126566-1jxjod2.jpg?ixlib=rb-4.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip',  // Replace with actual image paths
      title: 'WHY PACE?',
      subTitle:'Ocean Ecology',
      text: 'Our ocean teems with life and many of its most vital species are invisible to us. Like on land, the ocean has deserts, forests, meadows, and jungles, providing habitats for many forms of life. The types of life in these habitats is determined by microscopic algae that float in our ocean ',
    },
    {
      id: 2,
      imgSrc: 'https://images.squarespace-cdn.com/content/v1/6123aa4da7d85907b823dc29/1646063669874-SKXA5SWVYES9QIB01OHI/clouds.jpg',
      title: 'WHY PACE? ',
      subTitle:'PhytoPlanktons',
      text: ' Known as "phytoplankton," these tiny organisms come in many different shapes, sizes, and colors. The diversity of phytoplankton types determines the roles they play in ocean habitats. It also determines how well they capture energy from the sun and carbon from the atmosphere.',
    },
    {
      id: 3,
      imgSrc: 'https://healthyponds.com/wp-content/uploads/2023/04/filamentous-algae-940x675-1.png',  // Replace with actual image paths
      title: 'WHY PACE?',
      subTitle:'Aerosols AND Clouds',
      text: 'Small particles suspended in the atmosphere are known as aerosols. Along with clouds, they affect how sunlight is reflected and absorbed by the Earth and its atmosphere. Aerosols and clouds can interact in complex ways, which are not well understood.The overall effect of aerosols and clouds on climate is quite uncertain. ',
    },
    // Add more items as needed
  ];

  const [activeItem, setActiveItem] = useState(items[0]);

  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#57a773' }}>
      <Row>
        {/* Left: Image selection */}
        <Col md={6} className="d-flex justify-content-around align-items-center">
          {items.map((item) => (
            <Image
              key={item.id}
              src={item.imgSrc}
              roundedCircle
              onClick={() => setActiveItem(item)}
              style={{
                cursor: 'pointer',
                width: '150px',
                height: '150px',
                
                opacity: activeItem.id === item.id ? 1 : 0.5,
              }}
            />
          ))}
        </Col>

        {/* Right: Text content */}
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h1 className="text-white"style={{fontSize:"1.9rem"}}>{activeItem.title}</h1>
          <h2 className="text-white"style={{fontSize:"1.75rem"}}>{activeItem.subTitle}</h2>
          <p className="text-white" style={{fontSize:"1.5em"}}>{activeItem.text}</p>
          <Button variant="outline-light">Read More</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
