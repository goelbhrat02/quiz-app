import { Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import CreateQuizHandler from './component/CreateQuizHandler';
import AttempQuestionHandler from './component/AttempQuestionHandler';
import QuizHandler from './component/QuizHandler';

function App() {
  return (
    <div className="App">
      {/* <AddQuestions noOfQuestion={3}/> */}

      <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/create-quiz-handler' element={<CreateQuizHandler />} />
      <Route path='/attemp-quiz-handler' element={ <AttempQuestionHandler quizId={1} /> } />
      <Route path='/quiz-handler' element={<QuizHandler />} />
    </Routes>
    </div>
    
  );
}

export default App;
