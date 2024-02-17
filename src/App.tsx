import { useEffect, useState } from 'react';
import './App.css';
import Pokeball from './assets/img/pokeball.png';
import Logo from './assets/img/pokedexplore.svg';
import Background, { BackgroundTypeKey } from './components/Background/Background';
import PokemonCard from './components/PokemonCard/PokemonCard';
import { POKEMON_NAMES } from './utils/utils';

export interface PokemonType {
  name: string;
  type: BackgroundTypeKey;
  weight: number;
  height: number;
  ability: string;
  description: string;
}

const App = () => {
  const [pokemon, setPokemon] = useState<PokemonType>();
  const [isHovered, setIsHovered] = useState(false);

  const fetchPokemon = async () => {
    const randomPokemonName = POKEMON_NAMES[Math.floor(Math.random() * POKEMON_NAMES.length)];
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonName}`);
    const data = await response.json();
    const { name, types, weight, height, abilities, species } = data;
    const descriptionResponse = await fetch(species.url);
    const descriptionData = await descriptionResponse.json();
    const description = descriptionData.flavor_text_entries.find(
      (entry: any) => entry.language.name === 'es'
    ).flavor_text;
    const pokemon = {
      name: name,
      type: name==='jigglypuff' && types[1].type.name || name==='dewgong' && types[1].type.name || types[0].type.name,
      weight,
      height,
      ability: abilities[0].ability.name,
      description,
    };
    setPokemon(pokemon);
  };
    
  useEffect(() => {
    fetchPokemon();
  }, []);

  const handleClick = () => {
    fetchPokemon();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        fetchPokemon();
      }
    }, 30000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <> 
      {pokemon && <Background type={pokemon.type} />}
      <div className="app">
        <img src={Logo} width={220} className='logo'/>
        <button onClick={handleClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='pokeball'>
          <img src={Pokeball} width={60} />
        </button>
        {pokemon && <PokemonCard pokemon={pokemon} />}
      </div>
    </>
  );
};

export default App;
