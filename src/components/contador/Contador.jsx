import React, {Component} from 'react'

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

// export default class Contador extends Component {

// }

class Contador extends Component{

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    };
    
    inc = () =>{
        this.setState({ //vem do Component React
            numero: this.state.numero + this.state.passo
        }) 
    }

    dec = () =>{
        this.setState({ //vem do Component React
            numero: this.state.numero - this.state.passo
        }) 
    }

    setPasso = (valor) => {
        this.setState({
            passo: +valor,
        });
    }

    
    render(){
        return (
            <div>
                <h2>Contador</h2>
                {/* <p>Valor Inicial: {this.props.numeroInicial}</p> */}
                {/* <button onClick={_=> this.inc()}>+</button> */}
                <p>Valor Inicial: {this.props.numeroInicial}</p>
                <Display numero = {this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes setInc={this.inc} setDec={this.dec}></Botoes>
            </div>
        )
    }
}


export default Contador;