import React, { useEffect, useState } from 'react'
import { Pregunta } from './Pregunta';
import { GetPregunta } from './GetPregunta';
import axios from 'axios';
import { Respuesta } from './Respuesta';

export const ListaPreguntas = ({ categ }) => {
 
  const [questions, setQuestions] = useState([])
  const [numberQ, setNumberQ] = useState(0)
  const [respuesta, setRespuesta] = useState('')
  const [puntaje, setPuntaje] = useState(0)

  const transformCat = (val) => {
    switch(val){
      case 'Film & TV':
        return 'film_and_tv'
      case 'Food & Drink':
        return 'food_and_drink'
      case 'General Knowledge':
        return 'general_knowledge'
      case 'History':
        return 'history'
    }
  }
  let fragment 

  useEffect(() => {
    axios.get(`https://the-trivia-api.com/api/questions?categories=${transformCat(categ)}&limit=5`)
      .then(data => setQuestions(data.data.map(item => {return {
        question: item.question,
        answers: [...item.incorrectAnswers,item.correctAnswer].sort(),
        id: item.id,
        correctAnswer: item.correctAnswer,
      }})))

  }, [])

  const selectQuestion = () => {
    
    
    if(numberQ < questions.length) {
      if(respuesta == ''){
       fragment = <Pregunta 
        question={questions[numberQ].question}
        answers={questions[numberQ].answers}
        nextQ={setNumberQ}
        correctAnswer={questions[numberQ].correctAnswer}
        setRespuesta={setRespuesta}/>
    } else {

      fragment = <Respuesta 
                    correctAnswer={questions[numberQ].correctAnswer}
                    puntaje={puntaje}
                    setPuntaje={setPuntaje}
                    opcion={respuesta == questions[numberQ].correctAnswer}
                    setRespuesta={setRespuesta}
                    setNumberQ={setNumberQ}/>    

    }} else if(numberQ == 5){
      return <h1>Terminaste</h1>
    }
  
}


  return (
    <div>

      
      {selectQuestion()}
      {fragment}
      
    </div>
  )
}
