const FuncComponent = ({titulo, salario =  100000}) => {
    console.log(salario)
    return(
        <h1>Bienvenidos a la seccion de {titulo} {salario}</h1>
    )
}

export default FuncComponent