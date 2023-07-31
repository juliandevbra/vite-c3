import { Component } from 'react'

export default class ClassComponent extends Component {
    render(){
        return(
            <h1>Este es mi componente de clase</h1>
        )
    }
}

export class ChildComponent extends Component {
    render(){
        return(
            <h1>Este es otro componente hijo</h1>
        )
    }
}