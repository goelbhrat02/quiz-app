import React, { useState } from 'react';
import axios from 'axios';

const AddQuestion = ({ quizId, onQuestionAdded }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState({
    option1: '',
    option2: '',
    option3: '',
    option4: ''
  });
  const [answer, setAnswer] = useState('');

  const clearForm = () => {
    setQuestion('');
    setOptions({
      option1: '',
      option2: '',
      option3: '',
      option4: ''
    });
    setAnswer('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
        question: question,
        option1: options.option1,
        option2: options.option2,
        option3: options.option3,
        option4: options.option4,
        answer: answer,
        quiz: {
          quizId:quizId
        }
      };

    try {
      // POST request to add question
      const response = await axios.post('https://quiz.up.railway.app/question/', formData);

      // Informing parent component that question was added successfully
      console.log('Question added successfully:', response.data);
      onQuestionAdded();
      clearForm();

    } catch (error) {
      // Informing parent component that question failed to add
      console.log('Failed to add question:', error);
    }
  };

  return (
    <div>
      <h2>Add Question</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="question">Question:</label>
          <input
            type="text"
            className="form-control"
            id="question"
            name="content"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="option1">Option 1:</label>
          <input
            type="text"
            className="form-control"
            id="option1"
            name="option1"
            value={options.option1}
            onChange={(e) => setOptions({ ...options, option1: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="option2">Option 2:</label>
          <input
            type="text"
            className="form-control"
            id="option2"
            name="option2"
            value={options.option2}
            onChange={(e) => setOptions({ ...options, option2: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="option3">Option 3:</label>
          <input
            type="text"
            className="form-control"
            id="option3"
            name="option3"
            value={options.option3}
            onChange={(e) => setOptions({ ...options, option3: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="option4">Option 4:</label>
          <input
            type="text"
            className="form-control"
            id="option4"
            name="option4"
            value={options.option4}
            onChange={(e) => setOptions({ ...options, option4: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="answer">Answer:</label>
          <select
            className="form-control"
            id="answer"
            name="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          >
            <option value="">Select Answer</option>
            <option value={options.option1}>{options.option1}</option>
            <option value={options.option2}>{options.option2}</option>
            <option value={options.option3}>{options.option3}</option>
            <option value={options.option4}>{options.option4}</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Question
        </button>
      </form>
    </div>
  );
};

export default AddQuestion;