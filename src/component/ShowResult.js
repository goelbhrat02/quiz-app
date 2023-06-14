import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowResult = ({ marksObtained, maxMarks }) => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">Quiz Result</h3>
          <h4 className="card-text">Marks Obtained: {marksObtained}</h4>
          <button className="btn btn-primary" onClick={handleBackToHome}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowResult;
