import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomCSS/Age12to15Material.css';

const Age12to15Material = () => {
  const cards = [
    { title: 'Theory', description: 'Learn all the theoretical concepts.', link: '/Age12to15' },
    { title: 'Videos', description: 'Watch educational videos.', link: '/videos' },
    { title: 'Quizzes', description: 'Test your knowledge.', link: '/quizzes' },
    { title: 'Extra Resources', description: 'Explore additional learning material.', link: '/resources' },
  ];

  return (
    <div className="learning-hub">
      <Row xs={1} md={2} lg={2} className="g-4">
        {cards.map((card, index) => (
          <Col key={index}>
            <Card className="learning-card">
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Link to={card.link}>
                  <Button variant="primary">Go to {card.title}</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Age12to15Material;
