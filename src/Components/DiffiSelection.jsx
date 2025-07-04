import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/diff.css";

const difficulties = [
  { level: "beginner", label: "🥉 Bronze", color: "#cd7f32" },
  { level: "intermediate", label: "🥈 Silver", color: "#c0c0c0" },
  { level: "expert", label: "🥇 Champion", color: "#ffd700" }
];


const DiffiSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedLang = queryParams.get("lang");

  const handleSelectDifficulty = (level) => {
   navigate(`/questions/${level}/${selectedLang}`);
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
            {diff.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DiffiSelection;
