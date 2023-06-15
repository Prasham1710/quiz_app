"use client"
import React, {useState} from 'react';
import { quiz } from '../data.js';
const page = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];
  const onAnswerSelected = (answer, idx) => {
     setChecked(true);
    setSelectedAnswerIndex(idx);
  }
  return (
    <div className='container
    ' > 
  <h1>Quiz Page</h1>
      <div>
        <h2>
          Question: {activeQuestion + 1}<span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
           <div className='quiz-container'>
            <h3>{questions[activeQuestion].question}</h3>
            {answers.map((answer, idx) => (
              <li key={idx} 
               onClick={() => onAnswerSelected(answer, idx)}className={
                  selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'
                }>
               <span>{answer}</span>
              </li>
            ))}
              </div>
        ) : (
          <div className='quiz-container'></div>)}
      </div>
    </div>
  )
}

export default page