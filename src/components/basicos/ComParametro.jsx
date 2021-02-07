import React from 'react'

export default function ComParametro(props){
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    const notaTeto = Math.ceil(props.nota);
    return (
        <div>
            <h2>
                { props.titulo }
            </h2>
            <h3>
                { props.subtitulo } tem nota {notaTeto}
            </h3>
            <strong>{ status }</strong>
        </div>
    )
}