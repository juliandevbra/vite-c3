import { useState } from 'react'

const Form = () => {

    // En vez de crear dos estados, lo guardamos en uno solo
    const [cliente, setCliente] = useState({
        name: '',
        direccion: ''
    })

    // const [name, setName] = useState('')
    // const [direccion, setDireccion] = useState('')

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(cliente.name.length > 3 && cliente.direccion.length > 4){
            setShow(true)
            setError(false)
        } else {
            setError(true)
            setShow(false)
        }
    }

    console.log(cliente)
  return (
    <form onSubmit={handleSubmit}>
        <label >Nombre:</label>
        <input type="text" onChange={(event) => setCliente({...cliente, name: event.target.value})}/>
        <label >Dirección:</label>
        <input type="text" onBlur={(event) => setCliente({...cliente, direccion: event.target.value})}/>
        <button>Mandar pedido</button>

        {error && <h6>Corrobore bien la info</h6>}

        {show ? <>
            <h4>Gracias {cliente.name}!</h4>
            <h4>Ya estamos enviando tu pedido a {cliente.direccion}</h4>
        </>
        : null
        }


        {/* {condicion ? true : false} */}
    </form>
  )
}

export default Form