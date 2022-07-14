import React, { useEffect, useState } from 'react'
import { SeleccionarCateg } from './categorias/SeleccionarCateg'
import { ListaPreguntas } from './preguntas/ListaPreguntas'
import { GetPregunta } from './preguntas/GetPregunta'
import './stylesheet/Trivia.css'

export const Trivia = () => {

  const [categ, setCateg] = useState('')


  

  return (
    <div 
      className='trivia-container'>
      
      {categ == '' && <SeleccionarCateg onSelect={setCateg}/>}
      {categ !== '' && <ListaPreguntas categ={categ}/>}
      
    </div>
  )
}
