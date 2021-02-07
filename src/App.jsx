import React from 'react'

import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComPatrametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProduto from './components/repeticao/TabelaProduto'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import ContadorSemComponentes from './components/contador/ContadorSemComponentizacao'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'
import Mega_parte1 from './components/mega/Mega_parte1'

//export default function App(props) { 1a forma
//export default function (props) { //2a forma
//export default (props) => { //3a forma arrow function
//export default props => { //4a forma só porque só tem 1 parâmetro
//export default _ => {...} //6a forma sem se importar com os parâmetros e mantendo chaves {}
//export default _ =>  //7a forma. Mais reduzida, tirando corpo da funcion totalmente, tirando return (...)
export default () => ( //5a forma nenhum parâmetro na função
<div className ="App">
        <h1>Fundamentos REACT 7</h1>

        <div className="Cards">
            <Card titulo = "MEGA SURPRESINHA sem componente" color="#E72083">
                <Mega quantidade = {8}/>
            </Card>
            
            <Card titulo = "MEGA SURPRESINHA parte 1 Com componente" color="#E72083">
                <Mega_parte1/>
            </Card>
            


            <Card titulo = "CONTADOR COMPONENTIZADO" color="#A25589">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo = "CONTADOR SEM COMPONENTES" color="#F45399">
                <ContadorSemComponentes numeroInicial={10}></ContadorSemComponentes>
            </Card>

            <Card titulo = "Componente Controlado (Input)" color="#F45399">
                <Input></Input>
            </Card>

            <Card titulo = "COMUNICAÇÃO INDIRETA COM ESTADO (hook useState())" color="#F45399">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo = "COMUNICAÇÃO INDIRETA" color="#F45399">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo = "COMUNICAÇÃO DIRETA" color="#245699">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo = "PAR OU IMPAR" color="#145760">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={ {nome: 'ROBSON'}}></UsuarioInfo>
                <UsuarioInfo usuario={ {email: 'ROBSON@.com'}}></UsuarioInfo>
                <UsuarioInfo usuario={ {}}></UsuarioInfo>
            </Card>

            <Card titulo = "LISTA PRODUTOS" color="#8A5730">
                <TabelaProduto></TabelaProduto>
            </Card>

            <Card titulo = "LISTA ALUNOS" color="#8A6900">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo = "Familia" color="#8A6900">
                <Familia sobrenome="BONATES FERREIRA">
                <FamiliaMembro nome ="LARA" />
                <FamiliaMembro nome ="ROBSON" />
                <FamiliaMembro nome ="AURORA" />
                </Familia>
            </Card>
        

            {/* <Card titulo = "Familia" color="#8A6900">
                <Familia sobrenome="Silva Ferreira"/>
            </Card> */}


            <Card titulo = "Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={10}></Aleatorio>
            </Card>
            
            <Card titulo = "Fragmento" color="#588C73">
                <Fragmento/>
            </Card>

            <Card titulo = "Fragmento">
                <ComPatrametro titulo="Terceiro Componente"
                    subtitulo="SHOW hahahhah!" nota={5}/>
            </Card>

            <Card titulo = "Fragmento">
            <Primeiro></Primeiro>    
            </Card>
        </div>

  </div>
);