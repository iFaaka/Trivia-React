import axios from 'axios';
import { useEffect, useState } from 'react';

export const GetPregunta = () => {
  let newArr   
  useEffect(() => {
    axios.get('https://the-trivia-api.com/api/questions?categories=film_and_tv&limit=2')
      .then(data => newArr = data.data.map(item => {return {
        question: item.question,
        answers: [...item.incorrectAnswers,item.correctAnswer].sort(),
        id: item.id,
        correctAnswer: item.correctAnswer,
      }}))
      return newArr

  }, [])
  
  
  
}
