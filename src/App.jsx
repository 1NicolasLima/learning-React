import React from "react";
import './App.css';

import ComParametro from './components/basicos/ComParametro';
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Fragmento from './components/basicos/fragmento';
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Primeiro from './components/basicos/Primeiro';
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";

import Card from './components/layout/Card';

//forma mais reduzida de criar uma função

// eslint-disable-next-line import/no-anonymous-default-export
export default _ => (
    <div className='App'>
        <h1>Fundamentos React (Arrow _)</h1>
        <div className="Cards">
            <Card titulo="#07 - Repetição Exercicio" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <NumeroAleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={7.2} />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro />
            </Card>
        </div>
    </div>
);
