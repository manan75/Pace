import React, { useState } from 'react';
import { ProgressBar, Button, Container, Row, Col, Card } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import './CustomCSS/TeenQuiz.css'; // Custom CSS for the quiz

const TeenQuiz = () => {
  const questions = [
    { question: 'What does NASAs PACE mission primarily study?', correctAnswer: 1, options: ['Outer space debris', 'Ocean color and phytoplankton', 'Air pollution', 'Magnetic field of Earth'] },
    { question: 'Which of the following is a primary producer in ocean ecosystems, studied by NASAs PACE mission?', correctAnswer:1, options: ['Fish', 'Phytoplanktons', 'Crustaceans', 'Dolphins'] },
    { question: 'Why is studying phytoplankton important for understanding climate change?', correctAnswer: 0, options: ['They produce oxygen and absorb carbon dioxide', 'They cause ocean pollution', 'They consume more water resources', 'They lead to coral reef destruction'] },
    { question: 'What is the smallest prime number?', correctAnswer: 0, options: ['2', '3', '5', '7'] },
    { question: 'What is the largest ocean?', correctAnswer: 1, options: ['Atlantic', 'Pacific', 'Indian', 'Arctic'] },
    { question: 'Who painted the Mona Lisa?', correctAnswer: 3, options: ['Vincent van Gogh', 'Pablo Picasso', 'Claude Monet', 'Leonardo da Vinci'] },
    { question: 'What is the capital of Japan?', correctAnswer: 2, options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'] },
    { question: 'What is the chemical symbol for water?', correctAnswer: 1, options: ['H2', 'H2O', 'O2', 'CO2'] },
    { question: 'What is 5 + 7?', correctAnswer: 2, options: ['10', '11', '12', '13'] },
    { question: 'Which is the fastest land animal?', correctAnswer: 3, options: ['Lion', 'Tiger', 'Elephant', 'Cheetah'] }
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
      <NavbarComponent/>
      <Container>
        <Row className="my-4">
          <Col>
            <h2>Quiz</h2>
          </Col>
          <Col className="text-right">
            <h4>Score: {score}</h4>
          </Col>
        </Row>

        <Row className="my-2">
          <Col>
            <ProgressBar now={(currentQuestionIndex + 1) * 10} label={`${currentQuestionIndex + 1}/10`} />
          </Col>
        </Row>

        <Row className="my-4">
          <Col>
            <h4>{currentQuestion.question}</h4>
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
              <h5>{feedback}</h5>
            </Col>
          </Row>
        )}

        {showNextButton && currentQuestionIndex < 9 && (
          <Row className="my-4">
            <Col>
              <Button variant="primary" onClick={handleNext}>
                Next
              </Button>
            </Col>
          </Row>
        )}

        {currentQuestionIndex === 9 && (
          <Row className="my-4">
            <Col>
              <h3>Quiz Completed! Your final score is: {score}</h3>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default TeenQuiz;
