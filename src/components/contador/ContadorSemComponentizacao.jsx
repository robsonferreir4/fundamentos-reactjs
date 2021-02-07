import React, {Component} from 'react'

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

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value,
        });
    }

    
    render(){
        return (
            <div>
                <h2>Contador</h2>
                {/* <p>Valor Inicial: {this.props.numeroInicial}</p> */}
                <p>Valor Inicial: {this.props.numeroInicial}</p>
                <p>Valor Atual: {this.state.numero}</p>
                <div>
                    <label htmlFor="passoInput"></label>
                    <input id="passoInput" type="number" value={this.state.passo}
                           onChange={this.setPasso}></input>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
                {/* <button onClick={_=> this.inc()}>+</button> */}
            </div>
        )
    }
}


export default Contador;