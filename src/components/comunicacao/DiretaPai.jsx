import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (

        // Comunicação Direta = transferência de dados diretamente, por propriedades. Já tem a referência direta: import DiretaFilho from './DiretaFilho'
        // Outro exemplo foi a Família que passou o sobrenome 
        <div> 
            <DiretaFilho nome="AURORA" idade ={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="PAULO" idade ={17} nerd={false}></DiretaFilho>
        </div>

    )

}