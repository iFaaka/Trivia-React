import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


export const Categorias = ({ setCategoria }) => {


  const [categorias, setCategorias] = useState([])


useEffect(() => {
    axios.get(`https://the-trivia-api.com/api/categories`)
    .then(data => Object.keys(data.data))
    .then(cats => {
        let obtenerCateg = cats.filter((item,index) => 
        index === 1 || index === 3 ||
        index === 2 || index === 5)

        let seleccionarCateg = obtenerCateg.map(item => 
        {
            return {
            text: item,
            id: uuidv4(),
        }})
        setCategorias(seleccionarCateg)
    })

    
}, [])


    return (
    <div 
    className={`categoria-container`}>
        
        <h1>Seleccionar una categoria</h1>
        {
            categorias.map(item =>
                <button
                onClick={() => setCategoria(item.text)} 
                key={item.id}>
                    {item.text}
                </button>)
        }
    </div>
  )
}
