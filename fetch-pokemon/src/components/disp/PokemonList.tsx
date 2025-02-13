import PokemonItem from "./PokemonItem";
import { usePokemon } from "../../contexts/PokemonContext";
import { useTheme } from "../../contexts/ColorContext";


const PokemonList = () => {
  const pokemons = usePokemon();
  const [theme, ] =useTheme();
  return (
    <div className={`pokemon-list ${theme}`}>
      <ul className={`pokemon-list__list ${theme}`}>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id} className={`pokemon-list__item ${theme}`}>
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
