import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import beginnerQuestions from "../Data/BeginnersQuestions";
import "../Styles/beginner.css";
import intermediateQuestions from "../Data/IntermediateQuestions";
import expertQuestions from "../Data/ExpertQuestions";

const Beginners = () => {
  const { language, difficulty } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const questionBank = {
    beginner: beginnerQuestions,
    intermediate: intermediateQuestions,
    expert: expertQuestions,
  };

  const questions = questionBank[difficulty]?.[language?.toLowerCase()];

  if (!questions) return <p>No questions found for this language and difficulty.</p>;

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      if (selectedAnswer === questions[currentQuestionIndex].answer) {
        setScore(score + 1);
      }
      setSelectedAnswer(null);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  // Navigate back to the language selection page
  const handleBackToSelect = () => {
    navigate("/"); // Adjust the route as needed (e.g., to the language selection page)
  };

  // Show the score and "Back to Select" button after the quiz is complete
  const isQuizCompleted = currentQuestionIndex === questions.length - 1;

  return (
    <div className="quiz-container">
      <h1 className="quiz-header">{language.toUpperCase()} - {difficulty.toUpperCase()} Quiz</h1>
      
      {!isQuizCompleted ? (
        <div className="question-card">
          <h3 className="question-text">{questions[currentQuestionIndex].question}</h3>
          
          <ul className="options-list">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li
                key={index}
                className={`option-item ${selectedAnswer === option ? 'selected' : ''}`}
                onClick={() => handleAnswerSelection(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="final-score">
          <h3>Your Final Score: {score} / {questions.length}</h3>
        </div>
      )}

      <div className="nav-buttons">
        <button 
          className="nav-button"
          onClick={handlePrevQuestion} 
          disabled={currentQuestionIndex === 0 || isQuizCompleted}
        >
          Previous
        </button>
        <button
          className="nav-button"
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex === questions.length - 1 || isQuizCompleted}
        >
          Next
        </button>
      </div>

      {isQuizCompleted && (
        <div className="back-button-container">
          <button className="back-button" onClick={handleBackToSelect}>
            Back to Select
          </button>
        </div>
      )}
    </div>
  );
};

export default Beginners;
