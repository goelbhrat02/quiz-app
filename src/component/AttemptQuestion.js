import React, { useState } from 'react';

const AttemptQuestion = ({
  quesId,
  question,
  option1,
  option2,
  option3,
  option4,
  onAnswerSelected,
  onNextQuestion,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleNextButtonClick = () => {
    onAnswerSelected(quesId, selectedAnswer);
    setSelectedAnswer('');
    onNextQuestion();
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Question: {question}</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="answer"
            value={option1}
            checked={selectedAnswer === option1}
            onChange={handleAnswerChange}
          />
          <label className="form-check-label">{option1}</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="answer"
            value={option2}
            checked={selectedAnswer === option2}
            onChange={handleAnswerChange}
          />
          <label className="form-check-label">{option2}</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="answer"
            value={option3}
            checked={selectedAnswer === option3}
            onChange={handleAnswerChange}
          />
          <label className="form-check-label">{option3}</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="answer"
            value={option4}
            checked={selectedAnswer === option4}
            onChange={handleAnswerChange}
          />
          <label className="form-check-label">{option4}</label>
        </div>
        <button className="btn btn-primary" onClick={handleNextButtonClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AttemptQuestion;
