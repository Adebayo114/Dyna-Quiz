import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/langSelect.css";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa"; // Lightbulb icon

const languages = [
  { name: "HTML", color: "#E44D26", icon: <FaHtml5 size={50} /> },
  { name: "CSS", color: "#1572B6", icon: <FaCss3Alt size={50} /> },
  { name: "JavaScript", color: "#F7DF1E", icon: <FaJs size={50} /> }
];

const encouragementMessages = [
  "You're doing great! 🚀",
  "Keep pushing forward! 💪",
  "Learning never stops! 📚",
  "You got this! 🎯",
  "One step at a time! 🏆"
];

const hintColors = ["#ffcc00", "#ff6b6b", "#4caf50", "#2196f3", "#ff9800"]; // Random colors

const LanguageSelection = () => {
  const navigate = useNavigate();
  const [hint, setHint] = useState(encouragementMessages[0]);
  const [hintColor, setHintColor] = useState(hintColors[0]);
  const [showHint, setShowHint] = useState(false);

  // Automatically change the encouragement message & color every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowHint(true);
      setHint(encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)]);
      setHintColor(hintColors[Math.floor(Math.random() * hintColors.length)]);
      setTimeout(() => setShowHint(false), 2000); // Hide hint after 3 seconds
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSelectLanguage = (language) => {
    navigate(`/difficulty?lang=${language}`);
  };

  return (
    <div className="language-selection">
      <h2>Select a Language</h2>

      <div className="language-buttons">
        {languages.map((lang) => (
          <button
            key={lang.name}
            className="language-button"
            style={{ backgroundColor: lang.color }}
            onClick={() => handleSelectLanguage(lang.name)}
          >
            {lang.icon}
            <span>{lang.name}</span>
          </button>
        ))}
      </div>

      {/* Encouragement Hint - Moved Below */}
      <div
        className={`encouragement-hint ${showHint ? "slide-in" : "slide-out"}`}
        style={{ backgroundColor: hintColor }}
      >
        <FaLightbulb size={20} className="hint-icon" /> {hint}
      </div>
    </div>
  );
};

export default LanguageSelection;
