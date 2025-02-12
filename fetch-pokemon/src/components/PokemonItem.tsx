interface PokemonItemProps {
  id: number;
  pokeid: number;
  name: string;
  height: number;
}

const PokemonItem = ({
  pokeid,
  name,
  height,
}: PokemonItemProps) => {
  return (
    <div className='pokemonitem'>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeid}.png`}
        alt={name} // ポケモンの名前をalt属性に設定
        className="pokemonitem-img"
      />
      <div className="pokemonitem-details">
        <p className="pokemonitem-details__no">
          No:<span>{pokeid}</span>
        </p>
        <p className="pokemonitem-details__name">
          Name:<span>{name}</span>
        </p>
        <p className="pokemonitem-details__height">
          Height:<span>{height}</span>
        </p>
      </div>
      <hr className="pokemonitem-details__separator" />
    </div>
  );
};

export default PokemonItem;
