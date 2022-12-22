import React from "react";
import produtos from "../../data/produtos.js";
import './TabelaProdutos.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    function getLinhas() {
        return produtos.map((produto, id) => {
            return (
                <tr key={produto.id} className={id % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R${produto.preço.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        });
    }
    return (
        <div className="TabelaProdutos">
            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}