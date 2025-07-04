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
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(null); // use null to delay score calc

  const questionBank = {
    beginner: beginnerQuestions,
    intermediate: intermediateQuestions,
    expert: expertQuestions,
  };

  const questions = questionBank[difficulty]?.[language?.toLowerCase()];

  if (!questions) return <p>No questions found for this language and difficulty.</p>;

  const handleAnswerSelection = (answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Calculate score only at the end
      const finalScore = selectedAnswers.reduce((acc, selected, idx) => {
        if (selected === questions[idx].answer) return acc + 1;
        return acc;
      }, 0);
      setScore(finalScore);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleBackToSelect = () => {
    navigate("/");
  };

  const isQuizCompleted = score !== null;

  return (
    <div className="quiz-container">
      <h1 className="quiz-header">
        {language.toUpperCase()} - {difficulty.toUpperCase()} Quiz
      </h1>

      {!isQuizCompleted ? (
        <div className="question-card">
          <h3 className="question-text">{questions[currentQuestionIndex].question}</h3>

          <ul className="options-list">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li
                key={index}
                className={`option-item ${
                  selectedAnswers[currentQuestionIndex] === option ? "selected" : ""
                }`}
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
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        {!isQuizCompleted && (
          <button
            className="nav-button"
            onClick={handleNextQuestion}
            disabled={selectedAnswers[currentQuestionIndex] == null}
          >
            {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
          </button>
        )}
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
