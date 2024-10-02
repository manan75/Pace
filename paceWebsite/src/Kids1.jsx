import React, { useState } from 'react';
import { Button, Container, ProgressBar, Offcanvas, Row, Col } from 'react-bootstrap';
import './CustomCSS/Kids1.css';

const topics = [
  {
    id: 1,
    title: "Welcome into this Learning Lab.",
    content: "In today's learning lab we will be going on an exciting journey to learn about the Tiny Wanderers of the Ocean.<br>We will be covering the following topics: <br>1. Introduction to NASA and Satellites<br>2. What are Planktons? <br>3. Phytoplankton - The Ocean's Green Superheroes<br>4. Zooplankton - The Ocean's Tiny Animals<br>5. The Importance of Phytoplankton<br>6. How PACE Studies Phytoplankton<br>7. Plankton Party - A Fun Activity!<br>8. The Ocean's Light - Phytoplankton and Bioluminescence<br>9. The Photosynthesis Process in Phytoplankton<br>10. The Role of Phytoplankton in the Food Chain<br>11. Protecting the Ocean and Phytoplankton<br>12. Amazing Facts About Phytoplankton",
    hasImage: false,
    imageUrl: "#"
  },
  {
    id: 2,
    title: "Introduction to NASA and Satellites",
    content: "We start by learning about NASA, the famous organization that explores space! NASA uses satellites to study things like weather, climate, and even the tiniest creatures on Earth. Did you know that satellites can take pictures of our planet from space and even spot tiny animals and insects in the forest? One of the coolest satellites, PACE, helps scientists understand our oceans and the little creatures living there, like planktons.",
    hasImage: false,
    imageUrl: "#"
  },
  {
    id: 3,
    title: "What are Planktons?",
    content: "Planktons are tiny living things that float in the ocean. Some are so small that they are even smaller than a grain of sand! They are super important because they keep the ocean healthy. There are two types of planktons: phytoplankton and zooplankton. Each plays a special role in the ocean.",
    hasImage: false,
    imageUrl: "#"
  },
  {
    id: 4,
    title: "Phytoplankton – The Ocean’s Green Superheroes",
    content: "Phytoplankton are plant-like creatures that use sunlight to make food through a process called photosynthesis, just like trees do! What’s amazing is that phytoplankton produce 70% of the oxygen we breathe. Without them, we wouldn’t have enough air to fill our lungs. They also turn the ocean green when they grow in large numbers.",
    hasImage: false,
    imageUrl: "#"
  },
  {
    id: 5,
    title: "Zooplankton – The Ocean’s Tiny Animals",
    content: "Zooplankton are animal-like planktons that are so small you need a microscope to see most of them. They can be as tiny as a jellyfish or even smaller, like larvae of fish and shellfish. Even though they’re small, they play a huge role in the food chain by feeding on phytoplankton and becoming food for bigger ocean creatures.",
    hasImage: false,
    imageUrl: "#"
  },
  {
    id: 6,
    title: "The Importance of Phytoplankton",
    content: "Phytoplankton aren’t just important because they give us oxygen—they’re also key players in keeping the ocean healthy. They are food for lots of sea creatures, including fish and whales. Phytoplankton also help regulate the Earth’s climate by absorbing carbon dioxide, a gas that contributes to global warming.",
    hasImage: false,
    imageUrl: "#"
  },
  {
    id: 7,
    title: "How PACE Studies Phytoplankton",
    content: "NASA’s PACE satellite has special cameras and sensors that can see the colors of the ocean. It can spot where phytoplankton are growing by capturing the light that bounces back from the water. Scientists use these images to learn more about how phytoplankton are doing and how they affect the ocean’s ecosystem.",
    hasImage: false,
    imageUrl: "#"
  },
  {
    id: 8,
    title: "Plankton Party – A Fun Activity!",
    content: "Now, let’s have some fun! In this activity, you’ll learn to spot the difference between clear blue water and water filled with green phytoplankton. This is called a 'plankton party' because when the ocean turns green, it means the phytoplankton are having a party! Are you ready to spot them?",
    hasImage: false,
    imageUrl: "#"
  },
  {
    id: 9,
    title: "The Ocean’s Light – Phytoplankton and Bioluminescence",
    content: "Some types of plankton glow in the dark! This glowing light is called bioluminescence, and it’s often seen at night when the water sparkles. These glowing plankton can be seen from space, and it’s one of the many things that makes the ocean so magical.",
    hasImage: false,
    imageUrl: "#"
  },
  {
    id: 10,
    title: "The Photosynthesis Process in Phytoplankton",
    content: "Phytoplankton make their own food using sunlight, water, and carbon dioxide through photosynthesis. During this process, they release oxygen, which is crucial for life on Earth. Without photosynthesis, we wouldn’t have enough oxygen to survive!",
    hasImage: false,
    imageUrl: "#"
  },
  {
    id: 11,
    title: "The Role of Phytoplankton in the Food Chain",
    content: "Phytoplankton are at the bottom of the ocean food chain. They are eaten by zooplankton, which are then eaten by larger animals like fish, whales, and birds. Without phytoplankton, there wouldn’t be enough food for these ocean animals to survive.",
    hasImage: false,
    imageUrl: "#"
  },
  {
    id: 12,
    title: "Protecting the Ocean and Phytoplankton",
    content: "Phytoplankton are sensitive to changes in the environment. Pollution, warming waters, and too much carbon dioxide can hurt them, and this affects all the animals that rely on them. We can help protect phytoplankton by taking care of our oceans and reducing pollution.",
    hasImage: false,
    imageUrl: "#"
  },
  {
    id: 13,
    title: "Amazing Facts About Phytoplankton",
    content: "Before we wrap up, here are some mind-blowing facts about phytoplankton:<br>1. Phytoplankton produce more oxygen than all the trees in the world combined!<br>2. They help keep the ocean cool by reflecting sunlight.<br>3. Phytoplankton can be seen from space because of their green color when they bloom.",
    hasImage: false,
    imageUrl: "#"
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

const Kids1 = () => {
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

  // Function to render the topic container based on the presence of an image
  const renderTopicContent = (topics, activeTopic) => {
    const currentTopic = topics[activeTopic - 1]; // Get the current topic from the array

    if (currentTopic.hasImage) {
      // Render a container with an image (left) and text (right)
      return (
        <Row className="topic-with-image-container">
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
    } else {
      // Render a container with only heading and text
      return (
        <div className="topic-no-image-container">
          <h2>{currentTopic.title}</h2>
          <p style={{textAlign:'left'}} dangerouslySetInnerHTML={{ __html: currentTopic.content }}></p>
        </div>
      );
    }
  };

  return (
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
  );
};

export default Kids1;
