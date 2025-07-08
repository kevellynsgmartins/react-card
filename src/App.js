
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Especie from './componentes/Especie';

function App() {

  const especies = [
    {
      nome:'Ave',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Canino',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },    
    {
      nome:'Cavalo',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },    
    {
      nome:'Coelho',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8'
    },    
    {
      nome:'Felino',
      corPrimaria:'#D86EBF',
      corSecundaria:'#FAE5F5'
    },    
    {
      nome:'Hamster',
      corPrimaria:'#FEBA05',
      corSecundaria:'#FFF5D9'
    },    
    {
      nome:'Peixe',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF'
    }
  ]

  const [pets,setPets] = useState([])

  const aoNovoPetAdicionado = (pet) => {
    setPets([...pets, pet])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario especies ={especies.map(especie => especie.nome)} aoPetCadastrado={pet => aoNovoPetAdicionado(pet)}/>
      
      {especies.map(especie => <Especie 
        key={especie.nome} 
        nome={especie.nome} 
        corPrimaria={especie.corPrimaria} 
        corSecundaria={especie.corSecundaria}
        pets={pets.filter(pet => pet.especie == especie.nome)}
      />)}
      
    </div>
  );
}

export default App;
