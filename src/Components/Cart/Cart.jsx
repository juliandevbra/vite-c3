import React from 'react'

const Cart = ({cart}) => {

  return (
    <div>
        {cart.map(producto => <li key={producto.id}>{producto.tipo}</li>)}
    </div>
  )
}

export default Cart