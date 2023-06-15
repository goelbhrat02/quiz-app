import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import QuizCard from './QuizCard';

const QuizHandler = () => {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([]);
  const [filterOption, setFilterOption] = useState('all');

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('http://quiz-app.ap-south-1.elasticbeanstalk.com/quizzes/all');
        setQuizzes(response.data);
      } catch (error) {
        console.log('Failed to fetch quizzes:', error);
      }
    };

    fetchQuizzes();

    // Schedule a timer to fetch quizzes every minute
    const timer = setInterval(fetchQuizzes, 60000);

    // Clean up the timer on component unmount
    return () => clearInterval(timer);
  }, []);

  const handleQuizClick = (quizId) => {
    navigate('/attemp-quiz-handler', { state: { quizId } });
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const filteredQuizzes = filterOption === 'active'
    ? quizzes.filter(quiz => quiz.status === true)
    : quizzes;

  return (
    <div className="container">
      <h2 className="mt-4">Quizzes</h2>
      <div className="form-check mt-3">
        <label className="form-check-label">
          <input
            className="form-check-input"
            type="radio"
            value="all"
            checked={filterOption === 'all'}
            onChange={handleFilterChange}
          />
          All Quizzes
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label">
          <input
            className="form-check-input"
            type="radio"
            value="active"
            checked={filterOption === 'active'}
            onChange={handleFilterChange}
          />
          Active Quizzes
        </label>
      </div>
      <div className="row mt-4">
        {filteredQuizzes.map((quiz) => (
          <div className="col-md-4" key={quiz.quizId}>
            <QuizCard
              quizId={quiz.quizId}
              title={quiz.title}
              description={quiz.description}
              maxMarks={quiz.maxMarks}
              noOfQuestion={quiz.noOfQuestion}
              status={quiz.status}
              onClick={() => handleQuizClick(quiz.quizId)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizHandler;
