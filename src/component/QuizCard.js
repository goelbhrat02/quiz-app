import React from 'react';
import { Button, Card } from 'react-bootstrap';

const QuizCard = ({ quizId, title, description, maxMarks, noOfQuestion, status, onClick }) => {
  const handleAttemptQuiz = () => {
    if (onClick) {
        onClick(quizId);
      }
  };

  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title className="font-weight-bold">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex justify-content-between">
          <div>
            <p>Max Marks: {maxMarks}</p>
            <p>Questions: {noOfQuestion}</p>
          </div>
          {status && (
            <Button variant="primary" onClick={handleAttemptQuiz}>
              Attempt Quiz
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default QuizCard;
