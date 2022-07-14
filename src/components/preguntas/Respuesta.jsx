import React, { useEffect } from 'react'

export const Respuesta = ({ correctAnswer,puntaje,setPuntaje,opcion,setRespuesta,setNumberQ }) => {

    useEffect(() => {
        sumarPuntaje()
        setTimeout(() => {
            setRespuesta('')
            setNumberQ(prevS => prevS + 1)
          
        }, 3000);
    }, [])
    
  const sumarPuntaje = () => {
    if(opcion){setPuntaje(prevS => prevS + 5)}
  }

    return (
    <div>La respuesta correcta era: { correctAnswer }
    <p>Tu puntaje es de: {puntaje}</p></div>
  )
}
