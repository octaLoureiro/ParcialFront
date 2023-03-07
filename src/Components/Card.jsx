import React from 'react'

const Card = ({nombre, artista, tema}) => {

  return (
    <div>
        <h3>Hola{nombre}</h3>
        <h3>Sabemos que tu artista favorito es: {artista}</h3>
        <h3>Y tu tema favorito de {artista} es: {tema}</h3>
    </div>
  )
}

export default Card