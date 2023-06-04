import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuizForm = ({onSubmitClick}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [maxMarks, setMaxMarks] = useState('');
  const [noOfQuestion, setnoOfQuestion] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [quizId, setQuizId] = useState(null);

  useEffect(() => {
    console.log("quiz id to be pass is : ",quizId);
    onSubmitClick(quizId);
  },[quizId,onSubmitClick])

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
        title,
        description,
        maxMarks,
        noOfQuestion,
        startDate,
        endDate,
      };
      // onSubmitClick(formData);
      axios
        .post('https://quiz.up.railway.app/quizzes', formData, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log('API response:', response.data);
          setQuizId(response.data.quizId);

          // Clear the form fields
          setTitle('');
          setDescription('');
          setMaxMarks(0);
          setnoOfQuestion(0);
          setStartDate('');
          setEndDate('');
  
        })
        .catch((error) => {
          console.error('Error:', error);
        });
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
              onChange={(e) => setnoOfQuestion(e.target.value)}
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
