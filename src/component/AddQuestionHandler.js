import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddQuestion from './AddQuestion';

const AddQuestionHandler = ({ quizId }) => {
  const [noOfQuestions, setNoOfQuestions] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const fetchQuizDetails = async () => {
      try {
        const response = await axios.get(`https://quiz.up.railway.app/quizzes/${quizId}`);
        const { noOfQuestion } = response.data;
        setNoOfQuestions(noOfQuestion);
      } catch (error) {
        console.log('Failed to fetch quiz details:', error);
      }
    };

    fetchQuizDetails();
  }, [quizId]);

  const handleQuestionAdded = () => {
    setQuestionCount((prevCount) => prevCount + 1);

    if (questionCount === noOfQuestions) {
      setTimeout(() => {
        setShowSuccess(true);
      }, 500);
    }
  };

  const handleBackToHome = () => {
    // Navigate to home page manually
    window.location.href = '/';
  };

  return (
    <div className="container">
      {questionCount < noOfQuestions ? (
        <AddQuestion quizId={quizId} onQuestionAdded={handleQuestionAdded} />
      ) : (
        <>
          {showSuccess && (
            <div className="alert alert-success" role="alert">
              Quiz added successfully!
            </div>
          )}
          <button className="btn btn-primary" onClick={handleBackToHome}>
            Back to Home
          </button>
        </>
      )}
      <div className="progress mt-4">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${(questionCount / noOfQuestions) * 100}%` }}
          aria-valuenow={questionCount}
          aria-valuemin="0"
          aria-valuemax={noOfQuestions}
        >
          {questionCount} / {noOfQuestions}
        </div>
      </div>
    </div>
  );
};

export default AddQuestionHandler;
