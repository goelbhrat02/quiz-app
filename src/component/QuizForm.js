import React, { useState } from 'react';
import axios from 'axios';

const QuizForm = ({ onSubmitClick }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [maxMarks, setMaxMarks] = useState('');
  const [noOfQuestion, setNoOfQuestion] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [quizId, setQuizId] = useState(null); // eslint-disable-line no-unused-vars

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      maxMarks,
      noOfQuestion,
      startDate,
      endDate,
    };

    try {
      console.log("quiz data to be send is : >>>>>",formData);
      // POST request to add quiz
      const response = await axios.post('https://quiz-app.ap-south-1.elasticbeanstalk.com/quizzes', formData);

      // Informing parent component that quiz was added successfully
      console.log('Quiz added successfully:', response.data);

      setQuizId(response.data.quizId);
      onSubmitClick(response.data.quizId);
      // Clear the form fields
      setTitle('');
      setDescription('');
      setMaxMarks('');
      setNoOfQuestion('');
      setStartDate('');
      setEndDate('');
    } catch (error) {
      // Informing parent component that quiz failed to add
      console.log('Failed to add quiz:', error);
    }
  };


  return (
    <div className="container">
      <h2 className="text-center mt-4">Create Quiz</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="maxMarks" className="form-label">
              Max Marks
            </label>
            <input
              type="number"
              className="form-control"
              id="maxMarks"
              name="maxMarks"
              value={maxMarks}
              onChange={(e) => setMaxMarks(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="noOfQuestion" className="form-label">
              Number of Questions
            </label>
            <input
              type="number"
              className="form-control"
              id="noOfQuestion"
              name="noOfQuestion"
              value={noOfQuestion}
              onChange={(e) => setNoOfQuestion(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="startDate" className="form-label">
              Start Date
            </label>
            <input
              type="datetime-local"
              className="form-control"
              id="startDate"
              name="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="endDate" className="form-label">
              End Date
            </label>
            <input
              type="datetime-local"
              className="form-control"
              id="endDate"
              name="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Create Quiz
        </button>
      </form>
    </div>
  );
};

export default QuizForm;
