import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [raca, setRaca] = useState('')
    const [imagem, setImagem] = useState('')
    const [especie, setEspecie] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoPetCadastrado({
            nome,
            raca,
            imagem,
            especie
        }) 
        setNome('')
        setRaca('')
        setImagem('')
        setEspecie('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}> 
                <h2>Preencha os dados para criar o card do seu Pet</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Name" 
                placeholder="Digite o nome do pet"
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                obrigatorio={true} 
                label="Raça" 
                placeholder="Digite a raça"
                valor={raca}
                aoAlterado={valor => setRaca(valor)} 
                />
                <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereço da imagem" 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio={true} 
                label="Espécie" 
                itens={props.especies}
                valor={especie}
                aoAlterado={valor => setEspecie(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
