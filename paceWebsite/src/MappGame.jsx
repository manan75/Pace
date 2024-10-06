import React, { useRef, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { MapContainer, ImageOverlay, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MappGame = () => {
  const mapRef = useRef(null);
  const imageRef = useRef(null); // Reference to the image element
  const canvasRef = useRef(null); // Reference to the canvas
  const imageUrl = '/Chloro.png'; // Path to your image

  const imageWidth = 3600;
  const imageHeight = 1800;
  const bounds = [[0, 0], [imageHeight, imageWidth]];

  const [feedback, setFeedback] = useState(null);

  const getColorAtClick = (latlng) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { lat, lng } = latlng;

    // Calculate the pixel position based on lat/lng (Leaflet CRS.Simple)
    const x = lng;
    const y = lat;

    // Get pixel data from the canvas
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const [r, g, b] = pixel;

    // Find the closest color
    const closestColor = getClosestColor(r, g, b);
    return closestColor;
  };

  const getClosestColor = (r, g, b) => {
    const colors = {
      red: [255, 0, 0],
      green: [0, 255, 0],
      blue: [0, 0, 255],
    };

    let closestColor = '';
    let minDistance = Infinity;

    // Compare clicked pixel with red, green, and blue
    for (const [color, [cr, cg, cb]] of Object.entries(colors)) {
      const distance = Math.sqrt(
        Math.pow((r - cr), 2) + Math.pow((g - cg), 2) + Math.pow((b - cb), 2)
      );
      if (distance < minDistance) {
        minDistance = distance;
        closestColor = color;
      }
    }

    return closestColor;
  };

  const handleAreaClick = (latlng) => {
    const color = getColorAtClick(latlng);
    if (color === 'red') {
      setFeedback("A high concentration of chlorophyll in the ocean, often indicated by RED hues in satellite imagery, signifies the presence of large phytoplankton blooms. While phytoplankton are essential for ocean life, high concentrations can lead to harmful algal blooms (HABs), which can have detrimental effects on marine ecosystems. These blooms may reduce water clarity, limiting sunlight penetration, which is vital for underwater plants and photosynthetic organisms. Additionally, when large quantities of phytoplankton die and decompose, they consume significant amounts of oxygen, creating 'dead zones' where oxygen levels are too low for most marine life to survive. This can lead to fish kills and harm biodiversity. HABs also produce toxins that can contaminate seafood and affect both human health and marine animals. Thus, while phytoplankton play a critical role in marine food webs, an overabundance can disrupt the ecological balance and threaten ocean health.");
    } else if (color === 'green') {
      setFeedback("A medium concentration of chlorophyll, often represented by GREEN hues, indicates a balanced and healthy level of phytoplankton in the ocean. This concentration is ideal for maintaining a thriving marine ecosystem. Phytoplankton are the foundation of the oceanic food chain, providing sustenance to small fish, zooplankton, and other aquatic organisms. In this balanced state, phytoplankton contribute positively by producing oxygen through photosynthesis, supporting marine biodiversity, and helping regulate atmospheric carbon dioxide levels. The presence of a medium concentration of phytoplankton suggests that nutrient levels are sufficient, but not excessive, maintaining water clarity and supporting the growth of aquatic plants. This level of chlorophyll is often an indicator of a healthy, productive ocean, where marine life can flourish without the risks associated with harmful blooms or oxygen depletion.");
    } else if (color === 'blue') {
      setFeedback("A low concentration of chlorophyll, often depicted by BLUE hues in satellite data, indicates a scarcity of phytoplankton in the water. This suggests nutrient-poor conditions, which can have far-reaching effects on the marine ecosystem. Phytoplankton are primary producers, meaning that they are the base of the food chain in ocean ecosystems. A decline in phytoplankton levels can lead to a shortage of food for zooplankton, small fish, and other organisms, ultimately affecting the entire food web. Additionally, phytoplankton play a critical role in carbon sequestration by absorbing carbon dioxide during photosynthesis. With fewer phytoplankton, there may be a diminished capacity for oceans to regulate atmospheric carbon, potentially contributing to climate change. While clear, blue waters might seem desirable aesthetically, they often indicate a lack of productivity and biodiversity, signaling an ecosystem that may be struggling to sustain life.");
    } else {
      setFeedback("You clicked on an undefined region.");
    }
  };

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        handleAreaClick(e.latlng);
      },
    });
    return null;
  };

  useEffect(() => {
    if (mapRef.current) {
      const mapInstance = mapRef.current;
      mapInstance.fitBounds(bounds); // Adjusts zoom to fit the image
    }

    // Draw the image on a hidden canvas for pixel detection
    const image = imageRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    image.onload = () => {
      ctx.drawImage(image, 0, 0, imageWidth, imageHeight);
    };
  }, []);

  return (
    <>
    <div style={styles.videoContainer}>
      {/* Background video */}
      <video autoPlay muted loop style={styles.video}>
        <source src="bg.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    
    <Container fluid style={{ marginTop:'10px' , height: '85vh', padding: 0, position: 'relative', maxWidth:'80%'}}>
      {/* Hidden canvas for detecting pixel colors */}
      <canvas
        ref={canvasRef}
        width={imageWidth}
        height={imageHeight}
        style={{ display: 'none' }}
      ></canvas>
        <h1 className='headingMapGame' style={{textAlign:'center',background:'none',border:'2px lightblue solid', borderRadius:'10px',color:'darkblue'}}>Interactive MAP Learning</h1>
      {/* Hidden image used for drawing on canvas */}
      <img ref={imageRef} src={imageUrl} alt="Map" style={{display: 'none'}} />

      {/* Leaflet MapContainer */}
      <MapContainer
        center={[imageHeight / 2, imageWidth / 2]}
        crs={L.CRS.Simple}
        scrollWheelZoom={true}
        zoom = {-1}
        touchZoom={true}
        bounds={bounds}
        style={{ 
            display: 'flex',
            height: '70vh'
        }}
        whenCreated={(mapInstance) => {
          mapRef.current = mapInstance;
        }}
        zoomControl={false}
        minZoom={-5}
        maxZoom={5}
      >
        <ImageOverlay url={imageUrl} bounds={bounds} />
        <MapClickHandler />
      </MapContainer>

      {/* Feedback section */}
      {feedback && (
        <div className="feedback-container" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px'}}>
          {feedback}
        </div>
      )}
    </Container>
    </div>
    </>
  );
};

const styles = {
    videoContainer: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
    },
    video: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: '-1',
    },
}

export default MappGame;
