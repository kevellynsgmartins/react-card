import './Pet.css'

const Pet = ({nome, imagem, raca, corDeFundo}) => {
    return (
        <div className='pet'>
            <div className='cabecalho'style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{raca}</h5>
            </div>
        </div>
    )
}

export default Pet