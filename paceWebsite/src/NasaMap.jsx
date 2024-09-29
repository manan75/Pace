import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const NasaMap= () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Initialize the map
    const map = L.map(mapContainer.current).setView([0, 0], 2); // Adjust the center and zoom as needed
    L.tileLayer('https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/OCI_PACE_Chlorophyll_a/default/2024-08-24/1km/{z}/{y}/{x}.png', {
      layer: 'OCI_PACE_Chlorophyll_a',
      tileMatrixSet: '1km', // Set TileMatrixSet to 1km
      format: 'image/png',
      attribution: 'NASA Worldview',
      tileSize: 256,
      opacity: 1.0,  // Ensure full visibility
      minZoom: 1,
      maxZoom: 9,    // Adjust as needed
    }).addTo(map);


    // Clean up the map when the component is unmounted
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div ref={mapContainer} style={{ height: '500px', width: '100%' }}>
      {/* The map will render inside this div */}
    </div>
  );
};

export default NasaMap;
