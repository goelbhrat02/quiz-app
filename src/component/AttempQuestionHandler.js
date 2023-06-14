import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AttemptQuestion from './AttemptQuestion';
import ShowResult from './ShowResult';
import { useLocation } from 'react-router-dom';

const AttempQuestionHandler = () => {
  const location = useLocation();
  const quizId = location.state.quizId;
  console.log("Attemp-quiz-handler is called with quizId : >>>>",quizId);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [marksObtained, setMarksObtained] = useState(0);
  const [maxMarks, setMaxMarks] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`https://quiz-app.ap-south-1.elasticbeanstalk.com/question/quiz/${quizId}`);
        const fetchedQuestions = response.data;
        console.log("fetched question of quizId",quizId);
        console.log("fetched question : >>>>>>",response.data);
        setQuestions(fetchedQuestions);
        setMaxMarks(fetchedQuestions.length > 0 ? fetchedQuestions[0].quiz.maxMarks : 0);
      } catch (error) {
        console.log('Failed to fetch questions:', error);
      }
    };

    fetchQuestions();
  }, [quizId]);

  const handleAnswerSelected = (quesId, selectedAnswer) => {
    const question = questions.find((q) => q.quesId === quesId);
    if (question && question.answer === selectedAnswer) {
      const weightage = question.quiz.maxMarks / questions.length;
      setMarksObtained((prevMarks) => prevMarks + weightage);
    }
    console.log("marks yet >>>", marksObtained);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    return (
      <div className="container">
        <AttemptQuestion
          quesId={currentQuestion.quesId}
          question={currentQuestion.question}
          option1={currentQuestion.option1}
          option2={currentQuestion.option2}
          option3={currentQuestion.option3}
          option4={currentQuestion.option4}
          onAnswerSelected={handleAnswerSelected}
          onNextQuestion={handleNextQuestion}
        />
      </div>
    );
  } else {
    return (
      <div className="container">
        <ShowResult marksObtained={marksObtained} maxMarks={maxMarks} />
      </div>
    );
  }
};

export default AttempQuestionHandler;
