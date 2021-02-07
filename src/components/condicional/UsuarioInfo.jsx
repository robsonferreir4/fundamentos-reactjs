import React from 'react'
import If from './If'

export default props => {
    const usuario = props.usuario || {} //pra não dar erro se usuario não for passado no props
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{ usuario.nome }</strong>
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>AMIGÃO</strong>
            </If>
        </div>
    )
}