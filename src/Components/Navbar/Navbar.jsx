import React from 'react'
import './Navbar.css'
import { titleStyles } from './Navbar.styles'

const Navbar = () => {
    const titulos = ['Home', 'Contacto', 'Shop', 'Acerca de']
    console.log('Se renderizó el navbar')
    const titulosMapeados = titulos.map((titulo, indice) => {
        return <h4 style={titleStyles} key={indice}>{titulo}</h4>
    })
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        {titulosMapeados}
    </div>
  )
}

export default Navbar