import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NavbarComponent from './NavbarComponent';
import { Link } from 'react-router-dom';
import BgImage from './assets/kidsBackgroound.jpg';  // Import the background image

function Age12to15Material() {
  return (
    <>
      <NavbarComponent />

      {/* Container with background image */}
      <div style={{
        position: 'relative',               // Allow the pseudo-element to position relative to the container
        minHeight: '90vh',                  // Set minimum height to full screen
        padding: '2rem',
        display: 'flex',                    // Flexbox layout
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden' ,
        // Prevent scrolling by hiding overflow
        overflowY: 'hidden'                  // Prevent overflow from the blur
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
          zIndex: -1,                       
        }}></div>

        {/* Cards container */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', overflowY: "hidden", height: "100%" }}>

          {/* First Card */}
          <Card style={cardStyle} className="card-hover">
            <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/55/71/76/360_F_255717679_J3nVrUpLoXRPLYCxREQLJiU20lkCXz6g.jpg" style={imageStyle} />
            <div style={{ padding: '10px' }}>
              <Card.Text style={titleStyle}>THEORY</Card.Text>
              <Card.Text style={textStyle}>
                Learn the concepts of PACE and climate and understand the importance of PACE's data.
              </Card.Text>
              <div style={buttonContainerStyle}>
                <Button variant="primary" style={buttonStyle} className="button-hover">
                  <Link to='/Age12to15' style={linkStyle}>
                    Go To Theory
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Second Card */}
          <Card style={cardStyle} className="card-hover">
            <Card.Img variant="top" src="https://img.freepik.com/premium-vector/comic-speech-bubbles-with-text-quiz-night-neon-icon-symbol-sticker-tag-special-offer-label_100456-7641.jpg" style={imageStyle} />
            <div style={{ padding: '10px' }}>
              <Card.Text style={titleStyle}>TESTS AND QUIZZES</Card.Text>
              <Card.Text style={textStyle}>
                Tests and Quizzes to evaluate your performance and understanding of the concepts.
              </Card.Text>
              <div style={buttonContainerStyle}>
                <Button variant="primary" style={buttonStyle} className="button-hover">
                  <Link to='/TeenQuiz' style={linkStyle}>
                    Go to Quizzes
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Third Card */}
          <Card style={cardStyle} className="card-hover">
            <Card.Img variant="top" src="https://png.pngtree.com/thumb_back/fh260/background/20220523/pngtree-natural-environmental-resources-background-with-wind-power-and-water-resources-symbols-image_1373139.jpg" style={imageStyle} />
            <div style={{ padding: '10px' }}>
              <Card.Text style={titleStyle}>RESOURCES</Card.Text>
              <Card.Text style={textStyle}>
                Access the video, graphs and image resources of the concepts.
              </Card.Text>
              <div style={buttonContainerStyle}>
                <Button variant="primary" style={buttonStyle} className="button-hover">
                  <Link to='/Gallery' style={linkStyle}>
                    Go to Resources
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Fourth Card */}
          <Card style={cardStyle} className="card-hover">
            <Card.Img variant="top" src="https://png.pngtree.com/thumb_back/fh260/background/20210427/pngtree-tree-environment-art-game-background-image_674101.jpg" style={imageStyle} />
            <div style={{ padding: '10px' }}>
              <Card.Text style={titleStyle}>GAMES</Card.Text>
              <Card.Text style={textStyle}>
                Fun and Interactive mini-games to keep your minds sharp!
              </Card.Text>
              <div style={buttonContainerStyle}>
                <Button variant="primary" style={buttonStyle} className="button-hover">
                <Link to='/MiniGame' style={linkStyle}>
                    Go to Resources
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
          
        </div>
      </div>
    </>
  );
}

// Styles
const cardStyle = {
  width: '18rem',
  height: '24rem',
  backgroundColor: '#ffffff',
  color: '#000000',
  transition: 'transform 0.3s, box-shadow 0.3s',
  cursor: 'pointer',
  borderRadius: '10px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
  opacity: 1,
  height: '50%',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
};

const titleStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
};

const textStyle = {
  fontSize: '0.9rem',
  textAlign: 'center',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  borderColor: '#007bff',
  color: '#ffffff',
  transition: 'background-color 0.3s',
};

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
};

// Hover Effects (you can add this in your CSS or use inline styles)
const cardHoverStyle = `
  .card-hover:hover {
    transform: scale(1.02);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
  .button-hover:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
`;

// Inject hover effects into the page
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = cardHoverStyle;
document.head.appendChild(styleSheet);

export default Age12to15Material;
