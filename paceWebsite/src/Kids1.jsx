import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import './CustomCSS/Kids1.css'; // Custom CSS

const sections = [
  'Introduction to NASA PACE',
  'Climate Change Explained',
  'Ocean Life and Its Importance',
  'Fun with Science Experiments',
  'Interactive Quizzes on Climate',
  'Understanding the Water Cycle',
  'Impact of Human Activity',
  'Polar Ice Caps and Glaciers',
  'The Role of Satellites in Climate Monitoring',
  'Global Weather Patterns',
  'Marine Ecosystems',
  'Future of Climate Research'
];

const Kids1 = () => {
  const [progress, setProgress] = useState(0);
  const sectionsRef = useRef([]);
  const [activeSection, setActiveSection] = useState(0);

  // Track scrolling progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrolled = (scrollPosition / totalHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add section refs for animations and visibility control
  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  // Apply fade animations using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setActiveSection(index);
            entry.target.classList.add('section-in-view');
            entry.target.classList.remove('section-out-view');
          } else {
            entry.target.classList.remove('section-in-view');
            entry.target.classList.add('section-out-view');
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Scroll to specific section when index is clicked
  const scrollToSection = (index) => {
    sectionsRef.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container fluid className="kids1-page">
      {/* Progress bar */}
      <ProgressBar now={progress} className="sticky-progress-bar" />

      {/* Index of hyperlinks */}
      <div className="index-bar">
        {sections.map((section, index) => (
          <a
            key={index}
            href={`#${section.replace(/\s+/g, '-').toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(index);
            }}
            className={activeSection === index ? 'active-link' : ''}
          >
            {section}
          </a>
        ))}
      </div>

      {/* Sections with fade-in and fade-out effect */}
      {sections.map((section, index) => (
        <Row
          key={index}
          ref={addToRefs}
          data-index={index}
          id={section.replace(/\s+/g, '-').toLowerCase()}
          className={`content-section section mb-5 ${activeSection === index ? 'active' : ''}`}
        >
          <Col className="section-content p-5">
            <h2>{section}</h2>
            <p>
              Explore exciting learning materials about {section}. This section
              is filled with interactive content, videos, and activities.
            </p>
          </Col>
        </Row>
      ))}

      {/* Background Image */}
      <div className="fixed-background"></div>
    </Container>
  );
};

export default Kids1;
