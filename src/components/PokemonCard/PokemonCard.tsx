import 'animate.css';
import { useEffect, useState } from 'react';
import { PokemonType } from '../../App';
import BulbasaurImg from '../../assets/img/bulbasaur.png';
import CharmanderImg from '../../assets/img/charmander.png';
import DewgongImg from '../../assets/img/dewgong.png';
import EkansImg from '../../assets/img/ekans.png';
import GengarImg from '../../assets/img/gengar.png';
import GolemImg from '../../assets/img/golem.png';
import JigglypuffImg from '../../assets/img/jigglypuff.webp';
import MewtwoImg from '../../assets/img/mewtwo.png';
import PikachuImg from '../../assets/img/pikachu.png';
import SnorlaxImg from '../../assets/img/snorlax.png';
import UmbreonImg from '../../assets/img/umbreon.png';
import VaporeonImg from '../../assets/img/vaporeon.png';
import './PokemonCard.css';

interface PokemonCardProps {
    pokemon: PokemonType;
    theme: string;
}

const PokemonCard = ({ pokemon, theme }: PokemonCardProps) => {
    const [currentPokemon, setCurrentPokemon] = useState<PokemonType>(pokemon);
    const [animatedOut, setAnimatedOut] = useState<boolean>(false);
    const { name, type, weight, height, ability, description } = currentPokemon;

    useEffect(() => {
        if (pokemon && currentPokemon !== pokemon) {
            setAnimatedOut(true);
            setTimeout(() => {
                setAnimatedOut(false);
                setCurrentPokemon(pokemon);
            }, 1000);
        }
    }, [pokemon]);

    
    let imagePath;

    switch (name) {
        case 'vaporeon':
            imagePath = VaporeonImg;
            break;
        case 'charmander':
            imagePath = CharmanderImg;
            break;
        case 'bulbasaur':
            imagePath = BulbasaurImg;
            break;
        case 'pikachu':
            imagePath = PikachuImg;
            break;
        case 'dewgong':
            imagePath = DewgongImg;
            break;
        case 'golem':
            imagePath = GolemImg;
            break;
        case 'gengar':
            imagePath = GengarImg;
            break;
        case 'umbreon':
            imagePath = UmbreonImg;
            break;
        case 'snorlax':
            imagePath = SnorlaxImg;
            break;
        case 'jigglypuff':
            imagePath = JigglypuffImg;
            break;
        case 'mewtwo':
            imagePath = MewtwoImg;
            break;
        case 'ekans':
            imagePath = EkansImg;
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
