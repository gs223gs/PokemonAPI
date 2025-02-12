import PokemonItem from "./PokemonItem";
import { PokemonContext, usePokemon } from "../contexts/PokemonContext";
interface Pokemon {
  id: number;
  pokeid: number;
  name: string;
  height: number;
}

const PokemonList = () => {
  const pokemons = usePokemon();
  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => {
          return (
            <li key={pokemon.id}>
              <PokemonItem
                id={pokemon.id}
                pokeid={pokemon.pokeid}
                name={pokemon.name}
                height={pokemon.height}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PokemonList;
