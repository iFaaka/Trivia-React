import React, { useState } from 'react'

export const Pregunta = ({question,answers,setRespuesta }) => {

return (
    <div>    
            <h1>{question}</h1>
            {answers.map((item,index) => 
            <button
             key={index}
            onClick={() => setRespuesta(item)}
            >
              {item}
            </button>)}
    </div>
  )
}
