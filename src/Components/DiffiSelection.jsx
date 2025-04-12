import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/diff.css";

const difficulties = [
  { level: "Beginner", color: "#00FF00" }, // Neon Green
  { level: "Intermediate", color: "#FFD700" }, // Gold
  { level: "Expert", color: "#FF4500" } // Bright Orange-Red
];

const DiffiSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedLang = queryParams.get("lang"); // Get selected language from URL

// In DiffiSelection.jsx
const handleSelectDifficulty = (level) => {
  // Debug before navigation
  console.log("Navigating with:", {
    lang: selectedLang,
    difficulty: level.toLowerCase()
  });

  navigate(`/questions/${level.toLowerCase()}/${selectedLang}`);
  // Debug after navigation
  console.log("Selected lang before navigation:", selectedLang);
};

  return (
    <div className="difficulty-selection">
      <h2>Select Difficulty for {selectedLang}</h2>
      <div className="difficulty-buttons">
        {difficulties.map((diff) => (
          <button
            key={diff.level}
            style={{ backgroundColor: diff.color }}
            onClick={() => handleSelectDifficulty(diff.level)}
          >
            {diff.level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DiffiSelection;
