import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavbarComponent from './NavbarComponent';
import { Link } from 'react-router-dom';

function ChapterList12to15() {
  return (
    <>
    <NavbarComponent/>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem', backgroundColor: '#4888f0', minHeight: '100vh' }}>
      {/* First Chapter */}
      <Card style={{ width: '100%', maxWidth: '800px', padding: '1rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h5 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Chapter 1</h5>
          <p style={{ fontSize: '1rem' }}>
            Topic 1, Topic 2, Topic 3
          </p>
        </div>
        <Button variant="primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff', color: '#ffffff' }}><Link to='/Age12to15Material'>
          Start
          </Link>
        </Button>
      </Card>

      {/* Second Chapter */}
      <Card style={{ width: '100%', maxWidth: '800px', padding: '1rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h5 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Chapter 2</h5>
          <p style={{ fontSize: '1rem' }}>
            Topic 1, Topic 2, Topic 3
          </p>
        </div>
        <Button variant="primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff', color: '#ffffff' }}>
          Start
        </Button>
      </Card>

      {/* Third Chapter */}
      <Card style={{ width: '100%', maxWidth: '800px', padding: '1rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h5 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Chapter 3</h5>
          <p style={{ fontSize: '1rem' }}>
            Topic 1, Topic 2, Topic 3
          </p>
        </div>
        <Button variant="primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff', color: '#ffffff' }}>
          Start
        </Button>
      </Card>
    </div>
    </>
  );
}

export default ChapterList12to15;
