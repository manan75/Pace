import React from 'react';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import img from './assets/path.jpeg'; // Ensure this path is correct

const JourneyComponent = () => {
    const navigateToChapter = (chapter) => {
        // Implement your navigation logic here
        console.log(`Navigating to Chapter ${chapter}`);
        // For example, redirect to a different page or load chapter content
    };

    return (
        <div style={{
            backgroundImage: `url(${img})`, // Correctly set the background image
            minHeight: '220vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat:'repeat-x  ',
            position: 'relative'
        }}>
            <Container fluid className="text-center text-white">
                <h1>Welcome to Your Journey!</h1>
                
                {/* Chapter 1 */}
                <div style={{
                    position: 'absolute',
                    top: '22%', // Adjust the position
                    left: '10%', // Adjust the position
                }}>
                    <h2>Chapter 1: The Beginning</h2>
                    <Button variant="primary" onClick={() => navigateToChapter(1)}>Go to Chapter 1</Button>
                </div>

                {/* Chapter 2 */}
                <div style={{
                    position: 'absolute',
                    top: '50%', // Adjust the position
                    left: '40%', // Adjust the position
                }}>
                    <h2>Chapter 2: The Adventure</h2>
                    <Button variant="primary" onClick={() => navigateToChapter(2)}>Go to Chapter 2</Button>
                </div>

                  {/* Chapter 3 */}
                  <div style={{
                    position: 'absolute',
                    top: '70%', // Adjust the position
                    left: '22%', // Adjust the position
                }}>
                    <h2>Chapter 3: The Adventure</h2>
                    <Button variant="primary" onClick={() => navigateToChapter(2)}>Go to Chapter 2</Button>
                </div>

                  {/* Chapter 4 */}
                  <div style={{
                    position: 'absolute',
                    top: '200%', // Adjust the position
                    left: '40%', // Adjust the position
                }}>
                    <h2>Chapter 4: The Adventure</h2>
                    <Button variant="primary" onClick={() => navigateToChapter(2)}>Go to Chapter 2</Button>
                </div>

                {/* Add more chapters as needed */}
            </Container>
        </div>
    );
};

export default JourneyComponent;
