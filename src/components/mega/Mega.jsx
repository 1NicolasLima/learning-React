import React, { useState } from "react";
import "./Mega.css";


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    function gerarNumero(qtd) {

        const numeros = Array(qtd)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numeros
    }

    console.log(gerarNumero(7))

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min) + min)

        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
    }

    const [qtd, setQtd] = useState(props.qtd || 6)
    const numerosIniciais = gerarNumero(qtd)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (


        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Quantidade de Números</label>
                <input type="number" value={qtd}
                    min="6"
                    max="15"
                    onChange={(e) => {
                        setQtd(+e.target.value)
                        setNumeros(gerarNumero(+e.target.value))
                    }
                    } />
            </div>
            <button onClick={_ => setNumeros(gerarNumero(qtd))}>Gerar Números</button>
        </div>
    )

}