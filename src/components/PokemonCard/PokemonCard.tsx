import 'animate.css';
import { useEffect, useState } from 'react';
import { PokemonType } from '../../App';
import bulbasaurImg from '../../assets/img/bulbasaur.png';
import charmanderImg from '../../assets/img/charmander.png';
import dewgongImg from '../../assets/img/dewgong.png';
import ekansImg from '../../assets/img/ekans.png';
import gengarImg from '../../assets/img/gengar.png';
import golemImg from '../../assets/img/golem.png';
import jigglypuffImg from '../../assets/img/jigglypuff.webp';
import mewtwoImg from '../../assets/img/mewtwo.png';
import pikachuImg from '../../assets/img/pikachu.png';
import snorlaxImg from '../../assets/img/snorlax.png';
import umbreonImg from '../../assets/img/umbreon.png';
import vaporeonImg from '../../assets/img/vaporeon.png';
import './PokemonCard.css';

interface PokemonCardProps {
    pokemon: PokemonType;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    const [theme, setTheme] = useState<string>('darkTheme');
    const [currentPokemon, setCurrentPokemon] = useState<PokemonType>(pokemon);
    const [animatedOut, setAnimatedOut] = useState<boolean>(false);

    const { name, type, weight, height, ability, description } = currentPokemon;

    useEffect(() => {
        if (pokemon && currentPokemon !== pokemon) {
            setAnimatedOut(true);
            setTimeout(() => {
                setAnimatedOut(false);
                setCurrentPokemon(pokemon);
                setTheme(pokemon.name === "dewgong" || pokemon.name === "pikachu" ? 'lightTheme' : 'darkTheme');
            }, 1000);
        }
    }, [pokemon]);

    
    let imagePath;

    switch (name.toLowerCase()) {
        case 'vaporeon':
            imagePath = vaporeonImg;
            break;
        case 'charmander':
            imagePath = charmanderImg;
            break;
        case 'bulbasaur':
            imagePath = bulbasaurImg;
            break;
        case 'pikachu':
            imagePath = pikachuImg;
            break;
        case 'dewgong':
            imagePath = dewgongImg;
            break;
        case 'golem':
            imagePath = golemImg;
            break;
        case 'gengar':
            imagePath = gengarImg;
            break;
        case 'umbreon':
            imagePath = umbreonImg;
            break;
        case 'snorlax':
            imagePath = snorlaxImg;
            break;
        case 'jigglypuff':
            imagePath = jigglypuffImg;
            break;
        case 'mewtwo':
            imagePath = mewtwoImg;
            break;
        case 'ekans':
            imagePath = ekansImg;
            break;
        default:
            imagePath = '';
            break;
    }

    return (
        <div className={`pokemon-card`}>
            <div className="pokemon-image">
                <img src={imagePath} alt={name} height={400} className={animatedOut ? 'animate__animated animate__backOutDown' : 'animate__animated animate__backInLeft'}/>
            </div>
            <div className={theme}>
                <div className="pokemon-details card">
                    <h2 className='amaranth-bold'>{name}</h2>
                    <p>Type: {type}</p>
                    <p>Weight: {weight/10} kg</p>
                    <p>Height: {height/10} mts</p>
                    <p>Ability: {ability}</p>
                    {description && <p className="description">Description: {description}</p>}
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
