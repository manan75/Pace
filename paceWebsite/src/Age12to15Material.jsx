import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Img1 from './assets/jellyfish.jpeg';
import NavbarComponent from './NavbarComponent';
import BgImage from './assets/kidsBackgroound.jpg';  // Import the background image
import { Link } from 'react-router-dom';

function Age12to15Material() {
  return (
    <>
      <NavbarComponent />
      
      {/* Container with background image */}
      <div style={{ 
        backgroundImage: `url(${BgImage})`,    // Set background image
        backgroundSize: 'cover',              // Make the image cover the whole container
        backgroundRepeat: 'no-repeat',        // Prevent repeating the image
        backgroundPosition: 'center',         // Center the image
        minHeight: '100vh',                   // Set minimum height to full screen
        padding: '2rem',
        display: 'flex',                      // Flexbox layout
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}> {/* Container for cards */}
          
          {/* First Card */}
          <Card style={{ width: '18rem', height: '24rem', backgroundColor: '#ffffff', color: '#000000' }}>
            <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/55/71/76/360_F_255717679_J3nVrUpLoXRPLYCxREQLJiU20lkCXz6g.jpg" style={{ opacity: 1 }} />
            <div style={{ padding: '10px' }}>
              <Card.Text style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>THEORY</Card.Text>
              <Card.Text style={{ fontSize: '0.9rem', textAlign: 'center' }}>
                Learn the concepts of PACE and climate and understand the importance of PACE's data
              </Card.Text>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button  variant="primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff', color: '#ffffff' }}><Link to='/Age12to15'>
                  Go To Theory
                  </Link> 
                </Button>
              </div>
            </div>
          </Card>

          {/* Second Card */}
          <Card style={{ width: '18rem', height: '24rem', backgroundColor: '#ffffff', color: '#000000' }}>
            <Card.Img variant="top" src={Img1} style={{ opacity: 1 }} />
            <div style={{ padding: '10px' }}>
              <Card.Text style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>TITLE</Card.Text>
              <Card.Text style={{ fontSize: '0.9rem', textAlign: 'center' }}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff', color: '#ffffff' }}>
                  Go somewhere
                </Button>
              </div>
            </div>
          </Card>

          {/* Third Card */}
          <Card style={{ width: '18rem', height: '24rem', backgroundColor: '#ffffff', color: '#000000' }}>
            <Card.Img variant="top" src={Img1} style={{ opacity: 1 }} />
            <div style={{ padding: '10px' }}>
              <Card.Text style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>TITLE</Card.Text>
              <Card.Text style={{ fontSize: '0.9rem', textAlign: 'center' }}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff', color: '#ffffff' }}>
                  Go somewhere
                </Button>
              </div>
            </div>
          </Card>

          {/* Fourth Card */}
          <Card style={{ width: '18rem', height: '24rem', backgroundColor: '#ffffff', color: '#000000' }}>
            <Card.Img variant="top" src={Img1} style={{ opacity: 1 }} />
            <div style={{ padding: '10px' }}>
              <Card.Text style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>TITLE</Card.Text>
              <Card.Text style={{ fontSize: '0.9rem', textAlign: 'center' }}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff', color: '#ffffff' }}>
                  Go somewhere
                </Button>
              </div>
            </div>
          </Card>
          
        </div>
      </div>
    </>
  );
}

export default Age12to15Material;
