import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img1 from './assets/jellyfish.jpeg';

function Age12to15Material() {
  return (
    <div style={{ backgroundColor: '#f0f0f5', minHeight: '100vh', padding: '2rem' }}> {/* Page background color */}
      <Row className="justify-content-center"> {/* Bootstrap Row */}
        
        {/* First Card */}
        <Col xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4">
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
        </Col>

        {/* Second Card */}
        <Col xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4">
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
        </Col>

        {/* Third Card */}
        <Col xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4">
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
        </Col>

        {/* Fourth Card */}
        <Col xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4">
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
        </Col>
        
      </Row>
    </div>
  );
}

export default Age12to15Material;
