import React, { useState } from 'react';
import { ProgressBar, Button, Container, Row, Col } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import './CustomCSS/TeenQuiz.css'; // Custom CSS for the quiz
import BackgroundVideo from './assets/QuizBg.mp4';  // Import your background video

const TeenQuiz = () => {
  const questions = [
    { question: 'What does NASAs PACE mission primarily study?', correctAnswer: 1, options: ['Outer space debris', 'Ocean color and phytoplankton', 'Air pollution', 'Magnetic field of Earth'] },
    { question: 'Which of the following is a primary producer in ocean ecosystems, studied by NASAs PACE mission?', correctAnswer: 1, options: ['Fish', 'Phytoplanktons', 'Crustaceans', 'Dolphins'] },
    { question: 'Why is studying phytoplankton important for understanding climate change?', correctAnswer: 0, options: ['They produce oxygen and absorb carbon dioxide', 'They cause ocean pollution', 'They consume more water resources', 'They lead to coral reef destruction'] },
    
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (index) => {
    if (selectedOption !== null) return; // Prevent multiple selections
    setSelectedOption(index);
    if (index === currentQuestion.correctAnswer) {
      setScore(score + 5);
      setFeedback('Correct! +5');
    } else {
      setScore(score - 1);
      setFeedback('Incorrect! -1');
    }
    setShowNextButton(true);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setFeedback(null);
    setShowNextButton(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <>
      <NavbarComponent />

      {/* Background video */}
      <video 
        autoPlay 
        muted 
        loop 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',   // Ensure the video covers the entire screen
          zIndex: -1,           // Set the video behind the content
          opacity: 0.75,         // Set opacity to make the video less distracting
        }}>
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Quiz content */}
      <Container className="quiz-container">
        <Row className="my-4">
          <Col>
            <h2 style={{ color: 'white' }}>Quiz</h2>
          </Col>
          <Col className="text-right">
            <h4 style={{ color: 'white' }}>Score: {score}</h4>
          </Col>
        </Row>

        <Row className="my-2">
          <Col>
            <ProgressBar now={(currentQuestionIndex + 1) * 10} label={`${currentQuestionIndex + 1}/10`} />
          </Col>
        </Row>

        <Row className="my-4">
          <Col>
            <h4  style={{ color: 'white' }}>{currentQuestion.question}</h4>
          </Col>
        </Row>

        <Row className="my-4">
          {currentQuestion.options.map((option, index) => (
            <Col xs={6} key={index}>
              <div
                className={`custom-option-card ${selectedOption === index ? (index === currentQuestion.correctAnswer ? 'correct' : 'incorrect') : ''}`}
                onClick={() => handleOptionSelect(index)}
              >
                {option}
              </div>
            </Col>
          ))}
        </Row>

        {feedback && (
          <Row className="my-2">
            <Col>
              <h5 style={{ color: 'white' }}>{feedback}</h5>
            </Col>
          </Row>
        )}

        {showNextButton && currentQuestionIndex < 9 && (
          <Row className="my-4">
            <Col>
              <Button variant="primary" onClick={handleNext} style={{ color: 'white' }}>
                Next
              </Button>
            </Col>
          </Row>
        )}

        {currentQuestionIndex === 9 && (
          <Row className="my-4">
            <Col>
              <h3 style={{ color: 'white' }}>Quiz Completed! Your final score is: {score}</h3>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default TeenQuiz;
