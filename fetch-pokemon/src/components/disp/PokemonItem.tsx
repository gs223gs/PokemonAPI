import { useTheme } from "../../contexts/ColorContext";
interface PokemonItemProps {
  id: number;
  pokeid: number;
  name: string;
  height: number;
}

const PokemonItem = ({ pokeid, name, height }: PokemonItemProps) => {
  const [theme,] = useTheme()
  return (
    <div className={`pokemonitem ${theme}`}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeid}.png`}
        alt={name} // ポケモンの名前をalt属性に設定
        className={`pokemonitem-img ${theme}`}
      />
      <div className={`pokemonitem-details ${theme}`}>
        <p className={`pokemonitem-details__no ${theme}`}>
          No:<span>{pokeid}</span>
        </p>
        <p className={`pokemonitem-details__name ${theme}`}>
          Name:<span>{name}</span>
        </p>
        <p className={`pokemonitem-details__height ${theme}`}>
          Height:<span>{height}</span>
        </p>
      </div>
      <hr className={`pokemonitem-details__separator ${theme}`} />
    </div>
  );
};

export default PokemonItem;
