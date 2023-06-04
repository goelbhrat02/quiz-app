import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <h1 className="text-center mb-5">Welcome to Quiz Website</h1>
          <div className="d-grid gap-3">
            <Link to="/create-quiz-handler" className="btn btn-primary btn-lg">
              Create Quiz
            </Link>
            <Link to="/quiz-handler" className="btn btn-primary btn-lg">
              Attempt Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
