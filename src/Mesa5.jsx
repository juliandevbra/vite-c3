import React from 'react'
import { useState } from 'react'

const Mesa5 = () => {

    const [lista, setLista] = useState([])

    const añadir = (item) => {
        setLista([...lista, item])
    }

  return (
    <div>
        <button onClick={() => añadir('🐶')}>🐶</button>
        <button onClick={() => añadir('🐱')}>🐱</button>
        <button onClick={() => añadir('🐨')}>🐨</button>

    {lista.map(item => <li>Se ha añadido {item} a la lista</li>)}
        
    </div>
  )
}

export default Mesa5