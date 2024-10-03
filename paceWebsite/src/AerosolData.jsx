import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './CustomCSS/NasaMapCSS.css';

const AerosolData = () => {
  const mapContainer = useRef(null);

  // Function to get the date in YYYY-MM-DD format for the previous day
  const getPreviousDate = () => {
    const date = new Date();
    date.setDate(date.getDate() - 1); // Subtract one day
    return date.toISOString().split('T')[0]; // Format the date
  };

  const previousDate = getPreviousDate(); // Get the previous date

  useEffect(() => {
    // Initialize the map
    const map = L.map(mapContainer.current).setView([0, 0], 2); // Adjust the center and zoom as needed

    // NASA PACE Data layer
    L.tileLayer(`https://oceancolor.gsfc.nasa.gov/showimages/PACE_OCI/IMAGES/CARBON/L3/2024/0820/PACE_OCI.20240820_20240827.L3m.8D.CARBON.V2_0.carbon_phyto.4km.NRT.nc.png`, {
      layer: 'OCI_PACE_Chlorophyll_a',
      tileMatrixSet: '4km',
      format: 'image/png',
      attribution: 'NASA Worldview',
      tileSize:   900,
      opacity: 1.0,
      minZoom: 2,
      maxZoom: 9,
    }).addTo(map);

  
    return () => {
      map.remove();
    };
  }, []); // No dependencies mean it runs only once on mount

  return (
    <div>
      {/* Map Section */}
      <div className="container-fluid map-section text-center py-5">
        <h2 className="text-white mb-4">See What is PACE doing right now</h2>
        <h3 className='text-white mb-4'>Aerosol Optical Depth</h3>
        <div
          ref={mapContainer}
          style={{ height: '500px', width: '90%', marginLeft: 'auto', borderRadius: '10px', marginRight: 'auto' }}
        >
          {/* The map will render inside this div */}
        </div>
      </div>
    </div>
  );
};

export default AerosolData;
