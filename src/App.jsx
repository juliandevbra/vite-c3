import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import { useState } from 'react'
import Cart from './Components/Cart/Cart'


function App() {
  const [cart, setCart] = useState([])

  const add = (item) => {
    setCart([...cart, item])
  }
  console.log(cart)
  return (
    <div className='App'>
      <Navbar/>
      <Cart cart={cart}/>
      <Home add={add}/>
    </div>
  )
}

export default App
