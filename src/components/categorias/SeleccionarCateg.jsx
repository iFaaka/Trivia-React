import React, { useEffect, useState } from 'react'
import { Categorias } from './Categorias'


export const SeleccionarCateg = ({onSelect}) => {
  
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('')
  
  useEffect(() => {
    onSelect(categoriaSeleccionada)
  
  }, [categoriaSeleccionada])
  

  return (
    <div>
         <Categorias setCategoria={setCategoriaSeleccionada}/>

    </div>
  )
}
