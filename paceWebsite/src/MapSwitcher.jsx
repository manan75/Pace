import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NasaMap from './NasaMap.jsx';  // Import your NasaMap component
import AerosolData from './AerosolData.jsx';
import RemoteSensingReflectance from './RemoteSensingReflectance.jsx';
// Import other map components if you have any, like GoogleMap, OpenStreetMap, etc.

function MapSwitcher() {
  const [activeMap, setActiveMap] = useState(1); // State to manage active map

  // Function to render the appropriate map component based on activeMap state
  const renderMap = () => {
    switch (activeMap) {
      case 1:
        return <NasaMap/>; // Display NasaMap when the first button is clicked
      case 2:
        return <AerosolData/>; // Replace with a second map component
      case 3:
        return <RemoteSensingReflectance/>; // Replace with a third map component
      default:
        return <NasaMap/>; // Default map
    }
  };

  return (
    <Container className="mt-4">
      {/* Button Group */}
      <div className="d-flex justify-content-center mb-4">
        <Button
          variant={activeMap === 1 ? 'primary' : 'outline-primary'}
          className="mx-2 rounded-pill"
          onClick={() => setActiveMap(1)}
        >
          NASA Map Chlorophyll-a (Live Data)
        </Button>
        <Button
          variant={activeMap === 2 ? 'primary' : 'outline-primary'}
          className="mx-2 rounded-pill"
          onClick={() => setActiveMap(2)}
        >
          NASA Map Aerosol Optical Depth (Data of last 8-days)
        </Button>
        <Button
          variant={activeMap === 3 ? 'primary' : 'outline-primary'}
          className="mx-2 rounded-pill"
          onClick={() => setActiveMap(3)}
        >
          NASA Map Remote Sensing Reflectance (Data of last 8-days)
        </Button>
      </div>

      {/* Map Display */}
      <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
        {renderMap()} {/* Call the function to render the appropriate map */}
      </div>
    </Container>
  );
}

export default MapSwitcher;