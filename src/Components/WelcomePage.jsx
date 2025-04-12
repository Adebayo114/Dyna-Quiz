import React from 'react'
import "../Styles/welcomePge.css";
import "animate.css";
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className='container'>
        <h1 className="bouncing-text">Welcome to Dyna-Quiz</h1>
        <p>Test your knowledge and skills with our dynamic quiz platform.</p>   
        <p>Get ready to challenge yourself and learn something new!</p>
        <p>Click the button below to start your quiz.</p>

        <Link to="/language" className="link">
            <button className="vibrating-button">Start Quiz</button>
        </Link>
    </div>
  )
}

export default WelcomePage