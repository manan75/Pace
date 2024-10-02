
import React, { useState } from 'react';
import { Button, Container, ProgressBar, Offcanvas, Row, Col } from 'react-bootstrap';
import './CustomCSS/Kids1.css';
import NavbarComponent from './NavbarComponent';

const topics = [
  {
    id: 1,
    title: "CHAPTER-1 PACE: Plankton, Aerosol, Cloud, Ocean Ecosystem",
    content: "<h3>Topics to be covered:</h3> <br><br>1. What is PACE? <br><br>2. Primary instruments planned for PACE <br><br>3. PACE's Ocean Color Instrument (OCI)<br><br>4. PACE and previous ocean color missions <br><br>5. Summary of PACE<br>",
    hasImage: false,
    imageUrl: "#",
    imageOrient : 1
  },
  {
    id: 2,
    title: "What is PACE?",
    content: "<p>PACE is NASA's Plankton, Aerosol, Cloud, ocean Ecosystem mission, currently in the design phase of mission development. It is scheduled to launch in 2024, extending and improving NASA's over 20-year record of satellite observations of global ocean biology, aerosols (tiny particles suspended in the atmosphere), and clouds. </p><br> PACE will advance the assessment of ocean health by measuring the distribution of phytoplankton, tiny plants and algae that sustain the marine food web. It will also continue systematic records of key atmospheric variables associated with air quality and Earth's climate.<br>PACE has two fundamental science goals:<br> 1) To extend key systematic ocean color, aerosol, and cloud data records for Earth system and climate studies.<br> 2)To address new and emerging science questions using its advanced instruments, surpassing the capabilities of previous and current missions.",
    hasImage: true,
    imageUrl: "https://images-assets.nasa.gov/image/KSC-20231204-PH-KLS01_0004/KSC-20231204-PH-KLS01_0004~small.jpg",
    imageOrient : 2
  },
  {
    id: 3,
    title: "Primary Instruments of PACE",
    content: "<h3>The primary science instruments planned for PACE are:</h3> <ul><li>Ocean Color Instrument (OCI) - Spectrometer used to measure intensity of light over portions of the electromagnetic spectrum: ultraviolet (UV), visible, near infrared, and several shortwave infrared bands. The OCI will enable continuous measurement of light at finer wavelength resolution than previous NASA ocean color sensors, providing detailed information on our global ocean. The color of the ocean is determined by the interaction of sunlight with substances or particles present in seawater such as chlorophyll, a green photosynthetic pigment found in phytoplankton and land plants.</li><li>Multi-angle Polarimeters - Radiometers used to measure how the oscillation of sunlight within a geometric plane - known as its polarization - is changed by passing through clouds, aerosols, and the ocean. Measuring polarization states of UV-to-shortwave light at various angles provides detailed information on the atmosphere and ocean, such as particle size and composition.</li></ul><p>Combined, these instruments will be a major advance in satellite observing technology, allowing for new opportunities to monitor and respond to changes in our ecosystem, and the ways in which the atmosphere and ocean interact.</p>",
    hasImage: true,
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20220617_PACE_053745/GSFC_20220617_PACE_053745~small.jpg",
    imageOrient : 2
  },
  {
    id: 4,
    title: "PACE's OCI (Ocean Color Instrument)",
    content: "<p> PACE's main instrument, the Ocean Color Instrument (OCI), which is designed to measure the color of the ocean across a wide spectrum of light wavelengths. PACE will be able to see light in ultraviolet (UV) to shortwave infrared (SWIR), making it the most advanced ocean color instrument ever developed.</p><p>The OCI will measure ocean color in hundreds of spectral bands, allowing scientists to detect subtle differences in the type and concentration of phytoplankton and other components. It will:</p><ul><li>Identify different phytoplankton species: By measuring specific pigments, OCI can differentiate between types of phytoplankton. This helps in identifying harmful algal blooms (HABs), which can produce toxins harmful to marine life and humans</li><li>Measure chlorophyll concentrations: Chlorophyll-a, the pigment used by phytoplankton for photosynthesis, is a key indicator of phytoplankton biomass.</li></ul>",
    hasImage: false,
    imageUrl: "#",
    imageOrient : 1
  },
  {
    id: 5,
    title: "OCI continued...",
    content: "<h3 style=\"color: #3498db;\">Fluorescence and Backscattering: Advanced Light Detection</h3><p> NASA's PACE mission will take ocean observations beyond simple color measurement by detecting how light interacts with the ocean in various ways:</p><ul><li>Solar-Induced Chlorophyll Fluorescence (SIF): Phytoplankton not only reflect sunlight, but they also release a small amount of light through fluorescence during photosynthesis. PACE will measure this fluorescence, giving scientists a way to directly monitor the health and productivity of phytoplankton populations.</li><li>Backscattering of Light: Different types of plankton and particles in the water scatter light differently. By measuring backscattered light, PACE can detect changes in the size, composition, and concentration of particles, such as sediments and phytoplankton, giving detailed insights into water quality.</li></ul> <h3 style=\"color: #3498db;\">Harmful Algal Blooms (HABs)</h3><p>One of the important applications of PACE’s ocean color observations is the ability to detect Harmful Algal Blooms (HABs). These blooms occur when certain species of phytoplankton, like Karenia brevis (which causes red tides) or Microcystis (which causes freshwater blooms), grow out of control, often due to nutrient pollution and warm water conditions.</p> <ul><li>Identifying HABs from Space: HABs can turn water different colors (e.g., red or green), and PACE’s ability to detect specific pigments will allow scientists to track and predict the occurrence of HABs.</li><li>•	Public Health and Fisheries: By providing early warning of HABs, PACE can help protect coastal communities, fisheries, and public health by allowing authorities to take preventive action, such as issuing seafood consumption advisories or closing beaches.</li></ul>",
    hasImage: true,
    imageUrl: "https://www.sdcoastkeeper.org/wp-content/uploads/2023/11/HABS-Wyatt-Sloan-blog.png",
    imageOrient : 3
  },
  {
    id: 6,
    title: "OCI continued...",
    content: "<h3 style=\"color: #3498db;\">Global Ocean and Climate Monitoring</h3><p>PACE’s global view will provide continuous, detailed data on ocean health, ecosystem changes, and climate dynamics:</p><ul><li><b>Carbon Cycling:</b> PACE will help scientists understand the ocean’s role in the global carbon cycle, particularly how much carbon is being absorbed by phytoplankton and stored in the ocean. This is critical for understanding climate change and developing carbon mitigation strategies.</li><li><b>Ocean Health and Ecosystems</b>By monitoring phytoplankton and water quality, PACE will provide essential data for managing fisheries, preserving marine biodiversity, and protecting ecosystems from the impacts of climate change and pollution.</li></ul>",
    hasImage: false,
    imageUrl: "#",
    imageOrient : 1
  },
  {
    id: 7,
    title: "How PACE Studies Phytoplankton",
    content: "NASA’s PACE satellite has special cameras and sensors that can see the colors of the ocean. It can spot where phytoplankton are growing by capturing the light that bounces back from the water. Scientists use these images to learn more about how phytoplankton are doing and how they affect the ocean’s ecosystem.",
    hasImage: false,
    imageUrl: "#",
    imageOrient : 1
  },
  {
    id: 8,
    title: "Plankton Party – A Fun Activity!",
    content: "Now, let’s have some fun! In this activity, you’ll learn to spot the difference between clear blue water and water filled with green phytoplankton. This is called a 'plankton party' because when the ocean turns green, it means the phytoplankton are having a party! Are you ready to spot them?",
    hasImage: false,
    imageUrl: "#",
    imageOrient : 1
  },
  {
    id: 9,
    title: "The Ocean’s Light – Phytoplankton and Bioluminescence",
    content: "Some types of plankton glow in the dark! This glowing light is called bioluminescence, and it’s often seen at night when the water sparkles. These glowing plankton can be seen from space, and it’s one of the many things that makes the ocean so magical.",
    hasImage: false,
    imageUrl: "#",
    imageOrient : 1
  },
  {
    id: 10,
    title: "The Photosynthesis Process in Phytoplankton",
    content: "Phytoplankton make their own food using sunlight, water, and carbon dioxide through photosynthesis. During this process, they release oxygen, which is crucial for life on Earth. Without photosynthesis, we wouldn’t have enough oxygen to survive!",
    hasImage: false,
    imageUrl: "#",
    imageOrient : 1
  },
  {
    id: 11,
    title: "The Role of Phytoplankton in the Food Chain",
    content: "Phytoplankton are at the bottom of the ocean food chain. They are eaten by zooplankton, which are then eaten by larger animals like fish, whales, and birds. Without phytoplankton, there wouldn’t be enough food for these ocean animals to survive.",
    hasImage: false,
    imageUrl: "#",
    imageOrient : 1
  },
  {
    id: 12,
    title: "Protecting the Ocean and Phytoplankton",
    content: "Phytoplankton are sensitive to changes in the environment. Pollution, warming waters, and too much carbon dioxide can hurt them, and this affects all the animals that rely on them. We can help protect phytoplankton by taking care of our oceans and reducing pollution.",
    hasImage: false,
    imageUrl: "#",
    imageOrient : 1
  },
  {
    id: 13,
    title: "Amazing Facts About Phytoplankton",
    content: "Before we wrap up, here are some mind-blowing facts about phytoplankton:<br>1. Phytoplankton produce more oxygen than all the trees in the world combined!<br>2. They help keep the ocean cool by reflecting sunlight.<br>3. Phytoplankton can be seen from space because of their green color when they bloom.",
    hasImage: false,
    imageUrl: "#",
    imageOrient : 1
  }
];

const background = [
  {bg:"url"},
  {bg:"url"},
  {bg:"url"},
  {bg:"url"},
  {bg:"url"},
  {bg:"url"},
  {bg:"url"},
  {bg:"url"},
  {bg:"url"},
  {bg:"url"},
  {bg:"url"},
  {bg:"url"},
];

const Age11to15Chap = () => {
  const [activeTopic, setActiveTopic] = useState(1); // State to track the current topic
  const [showMenu, setShowMenu] = useState(false); // State to handle the drawer menu
  const [scrollDirection, setScrollDirection] = useState('next'); // Track direction for animation
  // const [activeBg, setActiveBg] = useState(0);
  // Handle next and previous topic navigation
  const handleNextTopic = () => {
    if (activeTopic < topics.length) {
      setScrollDirection('next');
      setActiveTopic((prev) => prev + 1);
    }
  };

  const handlePrevTopic = () => {
    if (activeTopic > 1) {
      setScrollDirection('prev');
      setActiveTopic((prev) => prev - 1);
    }
  };

  const progressPercentage = ((activeTopic-1) / (topics.length-1)) * 100; // Calculate progress percentage

  const renderTopicContent = (topics, activeTopic) => {
    const currentTopic = topics[activeTopic - 1]; // Get the current topic from the array

    if (currentTopic.hasImage) {
      // Render a container with an image (left) and text (right)
      if(currentTopic.imageOrient == 1){
        return (
          <div style={{overflowY:'scroll', maxHeight:'80vh',overflowX:'hidden',scrollbarWidth:'none'}}>
          <Row>
            {/* Image on the left */}
            <Col className="topic-image-col">
              <img
                src={currentTopic.imageUrl} // Use the image URL from the current topic
                alt={currentTopic.title}
                className="img-fluid rounded" // Bootstrap class for responsive image
              />
            </Col>
          </Row>
          <Row className="topic-with-image-container">
            {/* Text on the right */}
            <Col className="topic-text-col">
              <h2>{currentTopic.title}</h2>
              <p style={{textAlign:'left'}} dangerouslySetInnerHTML={{ __html: currentTopic.content }}></p>
            </Col>
          </Row>
          </div>
        );
      }
      else if(currentTopic.imageOrient == 2){
        return (
          <Row className="topic-with-image-container"  style={{overflowY:'scroll', maxHeight:'80vh',scrollbarWidth:'none'}}>
            {/* Text on the right */}
            <Col md={6} className="topic-text-col">
              <h2>{currentTopic.title}</h2>
              <p style={{textAlign:'left'}} dangerouslySetInnerHTML={{ __html: currentTopic.content }}></p>
            </Col>
            {/* Image on the left */}
            <Col md={6} className="topic-image-col">
              <img
                src={currentTopic.imageUrl} // Use the image URL from the current topic
                alt={currentTopic.title}
                className="img-fluid rounded" // Bootstrap class for responsive image
              />
            </Col>
          </Row>
        );
      }
      else if(currentTopic.imageOrient == 3){
        return (
          <div style={{overflowY:'scroll', maxHeight:'80vh',overflowX:'hidden',scrollbarWidth:'none'}}>
          <Row className="topic-with-image-container">
            {/* Text on the right */}
            <Col className="topic-text-col">
              <h2>{currentTopic.title}</h2>
              <p style={{textAlign:'left'}} dangerouslySetInnerHTML={{ __html: currentTopic.content }}></p>
            </Col>
          </Row>
          <Row>
            {/* Image on the left */}
            <Col className="topic-image-col">
              <img
                src={currentTopic.imageUrl} // Use the image URL from the current topic
                alt={currentTopic.title}
                className="img-fluid rounded" // Bootstrap class for responsive image
              />
            </Col>
          </Row>
          </div>
        );
      }
      else{
        return (
          <Row className="topic-with-image-container"  style={{overflowY:'scroll', maxHeight:'80vh',scrollbarWidth:'none'}}>
            {/* Image on the left */}
            <Col md={6} className="topic-image-col">
              <img
                src={currentTopic.imageUrl} // Use the image URL from the current topic
                alt={currentTopic.title}
                className="img-fluid rounded" // Bootstrap class for responsive image
              />
            </Col>
            {/* Text on the right */}
            <Col md={6} className="topic-text-col">
              <h2>{currentTopic.title}</h2>
              <p style={{textAlign:'left'}} dangerouslySetInnerHTML={{ __html: currentTopic.content }}></p>
            </Col>
          </Row>
        );
      }
    } else {
      // Render a container with only heading and text
      return (
        <div className="topic-no-image-container" style={{overflowY:'scroll', maxHeight:'80vh'}}>
          <h2>{currentTopic.title}</h2>
          <p style={{textAlign:'left'}} dangerouslySetInnerHTML={{ __html: currentTopic.content }}></p>
        </div>
      );
    }
  };

  return (
    <>
    <NavbarComponent/>
    <div className="kids-page">
      {/* Progress Bar */}
      <ProgressBar now={progressPercentage} style={{ height: '8px', width:'100%',position:'absolute',top:'0' }} />

      {/* Hamburger Icon */}
      <Button variant="light" className="hamburger-icon" onClick={() => setShowMenu(true)}>
        &#9776;
      </Button>

      {/* Offcanvas Drawer */}
      <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Learning Lab #1 - Phytoplanktons</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="topic-list">
            {topics.map((topic) => (
              <li key={topic.id}>
                <Button variant="link" style={{textAlign:'left'}} onClick={() => { setActiveTopic(topic.id); setShowMenu(false); }}>
                  {topic.title}
                </Button>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Render Topic Content */}
      <Container className={`topic-content ${scrollDirection}`}>
        {renderTopicContent(topics, activeTopic)}
      </Container>

      {/* Navigation Buttons */}
      <Button variant="primary" className="nav-button prev-button" onClick={handlePrevTopic}>
        &#9650;
      </Button>
      <Button variant="primary" className="nav-button next-button" onClick={handleNextTopic}>
        &#9660;
      </Button>
    </div>
    </>
  );
};

export default Age11to15Chap;