import {useState} from 'react'
import './Card.css'

const Card = ({pizza, add}) => {
  
  const [count, setCount] = useState(0)

  function restar() {
    setCount(count - 1)
  }
  function sumar() {
    setCount(count + 1)
  }
  console.log(count)
  return (
    <div className='card'>
        <img src={pizza.img} alt='' className='card-img'/>
        <h3>{pizza.tipo}</h3>
        <h4>{pizza.precio}</h4>

        <button onClick={restar} disabled={count==0}>-</button>
        <h3>{count}</h3>
        <button onClick={sumar}>+</button>
        <br/>

        <button onClick={() => add(pizza)}>Añadir al carrito</button>
    </div>
  )
}

export default Card