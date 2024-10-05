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
        position: 'relative',               // Allow the pseudo-element to position relative to the container
        minHeight: '90vh',                 // Set minimum height to full screen
        padding: '2rem',
        display: 'flex',                    // Flexbox layout
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'                  // Prevent overflow from the blur
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${BgImage})`,
          backgroundSize: 'cover',          // Make the image cover the whole container
          backgroundRepeat: 'no-repeat',    // Prevent repeating the image
          backgroundPosition: 'center',     // Center the image
          filter: 'blur(10px)',             // Apply blur effect
          zIndex: -1,                       // Send the background behind the content
        }}></div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', overflowY: "hidden", height: "100%" }}>
          
          {/* First Card */}
          <Card style={{ width: '18rem', height: '24rem', backgroundColor: '#ffffff', color: '#000000', transition: 'transform 0.3s', cursor: 'pointer' }} className="card-hover">
            <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/55/71/76/360_F_255717679_J3nVrUpLoXRPLYCxREQLJiU20lkCXz6g.jpg" style={{ opacity: 1, height: "50%" }} />
            <div style={{ padding: '10px' }}>
              <Card.Text style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>THEORY</Card.Text>
              <Card.Text style={{ fontSize: '0.9rem', textAlign: 'center' }}>
                Learn the concepts of PACE and climate and understand the importance of PACE's data
              </Card.Text>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff', color: '#ffffff', transition: 'background-color 0.3s' }} className="button-hover">
                  <Link to='/Age12to15'  style={{ color: '#ffffff', textDecoration: 'none' }}>
                    Go To Theory
                  </Link> 
                </Button>
              </div>
            </div>
          </Card>

          {/* Other cards with similar hover effects */}
          <Card style={{ width: '18rem', height: '24rem', backgroundColor: '#ffffff', color: '#000000', transition: 'transform 0.3s', cursor: 'pointer' }} className="card-hover">
            <Card.Img variant="top" src="https://img.freepik.com/premium-vector/comic-speech-bubbles-with-text-quiz-night-neon-icon-symbol-sticker-tag-special-offer-label_100456-7641.jpg" style={{ opacity: 1, height: "50%" }} />
            <div style={{ padding: '10px' }}>
              <Card.Text style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>TESTS AND QUIZZES</Card.Text>
              <Card.Text style={{ fontSize: '0.9rem', textAlign: 'center' }}>
                Tests and Quizzes to evaluate your performance and understanding of the concepts
              </Card.Text>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="primary" style={{ backgroundColor: '#007bff', borderColor: ' #007bff', color: '#ffffff', transition: 'background-color 0.3s' }} className="button-hover">
                <Link to='/TeenQuizs'  style={{ color: '#ffffff', textDecoration: 'none' }}>  Go to Quizzes
               </Link> </Button>
              </div>
            </div>
          </Card> 

          {/* Third Card */}
          <Card style={{ width: '18rem', height: '24rem', backgroundColor: '#ffffff', color: '#000000', transition: 'transform 0.3s', cursor: 'pointer' }} className="card-hover">
            <Card.Img variant="top" src="https://png.pngtree.com/thumb_back/fh260/background/20220523/pngtree-natural-environmental-resources-background-with-wind-power-and-water-resources-symbols-image_1373139.jpg" style={{ opacity: 1, height: "50%" }} />
            <div style={{ padding: '10px' }}>
              <Card.Text style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>RESOURCES</Card.Text>
              <Card.Text style={{ fontSize: '0.9rem', textAlign: 'center' }}>
                Access the video, graphs and image resources of the concepts. 
              </Card.Text>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff', color: '#ffffff', transition: 'background-color 0.3s' }} className="button-hover">
                  Go somewhere
                </Button>
              </div>
            </div>
          </Card>

          {/* Fourth Card */}
          <Card style={{ width: '18rem', height: '24rem', backgroundColor: '#ffffff', color: '#000000', transition: 'transform 0.3s', cursor: 'pointer' }} className="card-hover">
            <Card.Img variant="top" src={Img1} style={{ opacity: 1 }} />
            <div style={{ padding: '10px' }}>
              <Card.Text style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>TITLE</Card.Text>
              <Card.Text style={{ fontSize: '0.9rem', textAlign: 'center' }}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff', color: '#ffffff', transition: 'background-color 0.3s' }} className="button-hover">
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
