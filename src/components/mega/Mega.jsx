import React, {useState} from 'react'

//Mega exercício parte 2
export default props => {
    function gerarArrayNumeros(quantidade){
        const numeros = Array(quantidade).fill(0).reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1,60,nums);
            console.log([...nums, novoNumero]);
            return [...nums, novoNumero];
        }, [])
        .sort((n1,n2) => n1 - n2);
        return numeros;
    }
    
    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max - min)) + min;
        return array.includes(aleatorio) ? 
            gerarNumeroNaoContido(min, max, array) :
            aleatorio;
    }
    
    const [quantidade, setQuantidade] = useState(props.quantidade || 6)
    const numerosIniciais = gerarArrayNumeros(quantidade)
    const [numeros, setNumeros] = useState(numerosIniciais);

    return (
        <div>
            <h2>MEGA</h2>
            <h2>{numeros.join(' - ')}</h2>
            <div>
                <label>Quantidade de números</label>
                <input type="number" min="6" max="59" value ={quantidade} 
                    onChange={e => {
                        setQuantidade(+e.target.value)
                        setNumeros(gerarArrayNumeros(+e.target.value))
                        }
                    }
                />
            </div>
            <button on onClick= { _ => setNumeros(gerarArrayNumeros(quantidade))}>Gerar Números</button>
        </div>
    )

}