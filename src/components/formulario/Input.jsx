import React, {useState} from 'react'

export default props => {
    const [valor, setValor] = useState('Inicial'); //só muda a interface gráfica se chamar setValor, ou seja, 
                                                    //mudar o estado a partir do código pra mudar na interface

    function quandoMudar(e){
        //console.log(e.target.value);
        setValor(e.target.value);
    }    

    return (
        <div>
            <h2>{valor}</h2>
            {/* Componente controlado: tem que usar useState para mudar valor dele */}
            <input value={valor} onChange={quandoMudar}/>  
            {/* Componente não controlado: tem que ser readonly senão dá erro no console */}
            <input value={valor} readOnly/>
            {/* Componente não controlado: pode mexer mas sem estado. */}
            <input value={undefined} />
        </div>
    )
}