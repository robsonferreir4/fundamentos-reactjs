import React, {Component} from 'react'

//Mega exercício parte 1
class Mega_parte1 extends Component{

    state = {
        surpresinha: [],
        surpresinhaRobson: Array(7).fill(0),
    };

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    gerarNumerosRobson(){
        
        let index = 0;
        
        let aleatorio;

        while(index < 7){
            aleatorio = this.getRandomInt(0,60);
            if(!this.state.surpresinhaRobson.includes(aleatorio)){
                this.state.surpresinhaRobson[index] = aleatorio;
                index++;
            }
        }
    }

    gerarArrayNumeros(quantidade){
        const numeros = Array(quantidade).fill(0).reduce((nums) => {
            const novoNumero = this.gerarNumeroNaoContido(1,60,nums);
            console.log([...nums, novoNumero]);
            return [...nums, novoNumero];
        }, [])
        .sort((n1,n2) => n1 - n2);
        return this.state.surpresinha = numeros;
    }
    
    gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max - min)) + min;
        return array.includes(aleatorio) ? 
            this.gerarNumeroNaoContido(min, max, array) :
            aleatorio;
    }
    
    render(){
        return (
            <div>
                {/* <h2>{this.gerarNumerosRobson()}</h2> */}
                {/* <h2>{this.gerarNumeroNaoContido(0,60,[0, 0, 0, 0, 0, 0])}</h2> */}
                <h2>{this.gerarArrayNumeros(7).join(' - ')}</h2>
            </div>
        )
    }
}


export default Mega_parte1;