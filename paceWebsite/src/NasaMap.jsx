import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import './CustomCSS/NasaMapCSS.css';

const NasaMap = () => {
  const mapContainer = useRef(null);

  // Function to get the date in YYYY-MM-DD format for the previous day
  const getPreviousDate = () => {
    const date = new Date();
    date.setDate(date.getDate() -1); // Subtract one day
    return date.toISOString().split('T')[0]; // Format the date
  };

  const previousDate = getPreviousDate(); // Get the previous date

  useEffect(() => {
    // Initialize the map
    const map = L.map(mapContainer.current).setView([0, 0], 2); // Adjust the center and zoom as needed
    
    // Use template literals to correctly interpolate the previous date
    L.tileLayer(`https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/OCI_PACE_Chlorophyll_a/default/${previousDate}/1km/{z}/{y}/{x}.png`, {
      layer: 'OCI_PACE_Chlorophyll_a',
      tileMatrixSet: '1km', // Set TileMatrixSet to 1km
      format: 'image/png',
      attribution: 'NASA Worldview',
      tileSize: 256,
      opacity: 1.0,  // Ensure full visibility
      minZoom: 2,
      maxZoom: 9,    // Adjust as needed
    }).addTo(map);

    // Clean up the map when the component is unmounted
    return () => {
      map.remove();
    };
  }, []); // No dependencies mean it runs only once on mount

  return (
    <div>
    {/* Map Section */}
    <div className="container-fluid map-section text-center py-5">
      <h2 className="text-white mb-4">See What is PACE doing right now</h2>
      <h3 className='text-white mb-4'>Chlorophyll-a Concentration</h3>
      <div
        ref={mapContainer}
        style={{ height: '500px', width: '90%', marginLeft: 'auto', borderRadius: '10px',marginRight:'auto' }}
      >
        {/* The map will render inside this div */}
      </div>
    </div>
  </div>
  );
};

export default NasaMap;
