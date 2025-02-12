import PokemonItem from "./PokemonItem";
import { usePokemon } from "../contexts/PokemonContext";


const PokemonList = () => {
  const pokemons = usePokemon();
  return (
    <div className="pokemon-list">
      <ul className="pokemon-list__list">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id} className="pokemon-list__item">
            <PokemonItem
              id={pokemon.id}
              pokeid={pokemon.pokeid}
              name={pokemon.name}
              height={pokemon.height}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
