import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavbarComponent from './NavbarComponent';
import { Link } from 'react-router-dom';
import "./CustomCSS/ChapterList12to15.css"; // Create a CSS file for animations and hover effects

function ChapterList12to15() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true to trigger the slide-in animation
    setLoaded(true);
  }, []);

  return (
    <>
      <NavbarComponent />
      <div className={`chapter-list ${loaded ? 'slide-in' : ''}`}>
        {/* First Chapter */}
        <Card className="chapter-card">
          <div>
            <h5>Chapter 1: PACE (Plankton, Aerosol, Cloud, Ocean Ecosystem)</h5>
            <p>What is PACE, Primary Instruments of PACE, PACE's Ocean Color Instrument (OCI)...</p>
          </div>
          <Button variant="success">
            <Link to='/Age12to15Material' style={{ color: '#ffffff', textDecoration: 'none' }}>
              Start
            </Link>
          </Button>
        </Card>

        {/* Second Chapter */}
        <Card className="chapter-card">
          <div>
            <h5>Chapter 2: PACE data</h5>
            <p>Ocean data, Atmospheric data, Climate and Environmental data...</p>
          </div>
          <Button variant="success">
            <Link to='/Age12to15Material' style={{ color: '#ffffff', textDecoration: 'none' }}>
              Start
            </Link>
          </Button>
        </Card>

        {/* Third Chapter */}
        <Card className="chapter-card">
          <div>
            <h5>Chapter 3: Planktons</h5>
            <p>What is Plankton, Phytoplankton, Zooplankton, Harmful Plankton...</p>
          </div>
          <Button variant="success">
            <Link to='/Age12to15Material' style={{ color: '#ffffff', textDecoration: 'none' }}>
              Start
            </Link>
          </Button>
        </Card>

        {/* Fourth Chapter */}
        <Card className="chapter-card">
          <div>
            <h5>Chapter 4: Ocean Color</h5>
            <p>Ocean Color and Space technology, Ocean Color Spectrum, Monitoring Ocean Color from space...</p>
          </div>
          <Button variant="success">
            <Link to='/Age12to15Material' style={{ color: '#ffffff', textDecoration: 'none' }}>
              Start
            </Link>
          </Button>
        </Card>
      </div>
    </>
  );
}

export default ChapterList12to15;
