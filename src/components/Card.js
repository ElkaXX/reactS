import {pokemon} from '../data/pokemon';
import '../styles/Card.css';
import Carapuce from '../assets/Carapuce.png';
import Rare from './Rare';

export default function Card(){
    return (
        <section onClick={testClick}>
            
            <ul>
                {pokemon.map((poke) => (
                <li key={poke.id}>
                    <p>{poke.id}</p>
                    <p>{poke.namePokemon}</p>
                    <img src={poke.image}/>
                    <p>Type feu ?{poke.type === 'feu' ? ' oui' : ' non'}</p>
                </li>
                ))}
            </ul>
            <Rare rarity={pokemon[0].namePokemon}/>
        </section>
    )
    function testClick(){
        alert('Hello world');
    }
}