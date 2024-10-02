import React, { useState } from 'react';
import { Container, Row, Col, Button, Image, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './CustomCSS/HomePageCSS.css';

function HomePage() {
  const items = [
    {
      id: 1,
      imgSrc: 'image1.png',  // Replace with actual image paths
      title: 'WHY PACE?',
      subTitle:'Ocean Ecology',
      text: 'Our ocean teems with life and many of its most vital species are invisible to us...',
    },
    {
      id: 2,
      imgSrc: 'image2.png',
      title: 'WHY PACE? ',
      subTitle:'PhytoPlanktons',
      text: 'The atmosphere plays a crucial role in regulating climate and weather patterns...',
    },
    {
      id: 3,
      imgSrc: 'image1.png',  // Replace with actual image paths
      title: 'WHY PACE?',
      subTitle:'Aerosols AND Clouds',
      text: 'Our ocean teems with life and many of its most vital species are invisible to us...',
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
                width: '100px',
                height: '100px',
                
                opacity: activeItem.id === item.id ? 1 : 0.5,
              }}
            />
          ))}
        </Col>

        {/* Right: Text content */}
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2 className="text-white">{activeItem.title}</h2>
          <p className="text-white">{activeItem.text}</p>
          <Button variant="outline-light">Read More</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
