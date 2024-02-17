import { useEffect, useState } from 'react';
import './App.css';
import Pokeball from './assets/img/pokeball.png';
import Logo from './assets/img/pokedexplore.svg';
import Background from './components/Background/Background';
import Menu from './components/Menu';
import PokemonCard from './components/PokemonCard/PokemonCard';
import { BackgroundTypeKey, POKEMONS } from './utils/utils';

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

  const fetchPokemon = async (type?: any) => {
    const pokemonNameFromType = POKEMONS.find(item => item.type === type)?.name;
    console.log(pokemonNameFromType);
    const pokemonByRandom = POKEMONS[Math.floor(Math.random() * POKEMONS.length)].name;
    const pokemonName = type ? pokemonNameFromType  : pokemonByRandom;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
    const { name, types, weight, height, abilities, species } = data;

    const descriptionResponse = await fetch(species.url);
    const descriptionData = await descriptionResponse.json();
    const description = descriptionData.flavor_text_entries.find(
      (entry: any) => entry.language.name === 'es'
    ).flavor_text;

    const mainType = name === 'jigglypuff' || name === 'dewgong' ? types[1].type.name : types[0].type.name;

    const pokemon = {
      name: name,
      type: mainType,
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

  const onClick = (type: any) => {
    console.log("click");
    fetchPokemon(type);
  }

  return (
    <> 
      {pokemon && <Background type={pokemon.type} />}
      <div className="app">
        <img src={Logo} width={220} className='logo'/>
        <button onClick={handleClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='pokeball'>
          <img src={Pokeball} width={60} />
        </button>
        {pokemon && <PokemonCard pokemon={pokemon} />}
        <Menu onClick={onClick}/>
      </div>
    </>
  );
};

export default App;
