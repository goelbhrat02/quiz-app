import React, { useState, useEffect } from 'react';
import AddQuestionHandler from './AddQuestionHandler';
import QuizForm from './QuizForm';

const CreateQuizHandler = () => {
  const [quizId, setQuizId] = useState(null);
  
  useEffect(()=>{
    console.log("the value of quizId state in parent is : ", quizId);
  },[quizId]);

  const handleSubmitClick = (formData) => {
      console.log("response in parent component>>>",typeof formData);
      setQuizId(formData);
  };

  return (
    <div>
      {quizId !== null ? (
        <AddQuestionHandler quizId={quizId}/>
      ) : (
        <QuizForm onSubmitClick={() => handleSubmitClick}/>
      )}
    </div>
  );
};

export default CreateQuizHandler;
