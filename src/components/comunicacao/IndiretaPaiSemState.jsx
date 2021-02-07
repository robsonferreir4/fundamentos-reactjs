import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    let nome = '?';
    let idade = 0;
    let nerd = false;
    //nome idade nerd
    function fornecerInformacoes(nomeParam, idadeParam, nerdParam){ //Função utilizada para comunicação indireta. Passa a função diretamente
        console.log(nomeParam, idadeParam, nerdParam);              //para o filho via props que chama a função que é do pai para preencher as variáveis
        nome = nomeParam;
        idade = idadeParam;      //AINDA NÃO VAI FUNCIONAR POIS ESTE COMPONENTE NÃO TEM ESTADO, É ESTÁTICO NA TELA
        nerd = nerdParam;
    }

    return (
        <div> 
            <div>Pai</div>
            <span>{nome} </span>
            <span>{idade} </span>
            <span>{nerd}</span>

            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )

}