import React from 'react'
import produtos from '../../data/Produto.js'

import "../layout/Table.css"

export default props => {

    const produtosJSX = produtos.map(produto =>{
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    })

    return (
        <div>
            <table className="Table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosJSX}              
                </tbody>
            </table>
        </div>

    )
}