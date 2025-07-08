import Pet from '../Pet'
import  './Especie.css'

const Especie = (props) => {
    const css = {backgroundColor: props.corSecundaria}

    return (
        (props.pets.length > 0) ? <section className='especie'style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='pets'>
                {props.pets.map( pet => <Pet corDeFundo={props.corPrimaria} key={pet.nome} nome={pet.nome} raca={pet.raca} imagem={pet.imagem}/> )}
            </div>
        </section>
        : ''
    )
}

export default Especie