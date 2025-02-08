interface PokemonItemProps {
  id: number;
  pokeid: number;
  name: string;
  height: number;
}

const PokemonItem = ({ pokeid, name, height }: PokemonItemProps) => {
  return (
    <div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeid}.png`}
        alt={name} // ポケモンの名前をalt属性に設定
      />
      <div>
        <p>
          No:<span>{pokeid}</span>
        </p>
        <p>
          Name:<span>{name}</span>
        </p>
        <p>
          Height:<span>{height}</span>
        </p>
      </div>
      <hr />
    </div>
  );
};

export default PokemonItem;
