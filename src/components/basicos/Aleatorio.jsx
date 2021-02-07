import React from 'react'

// export default function Aleatorio(props){

export default props =>  {

    //destructor
    // const [ a, b ] = [1,2] 
    // const { c, d, x, y} = { c: 12, d: 45, x: 'teste' } y vai ficar undefined 
    const { min, max } = props;

    const random = getRandomInt(min, max);
    return (
        <div>
            <h2>
                NÚMERO ALETÓRIO ENTRE { min } e {max}
            </h2>
            <h3>
                <strong> RESULTADO: { random } </strong>
            </h3>

        </div>
    )
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}