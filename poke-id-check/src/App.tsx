import { useState } from 'react';
type Pokemon = {
  readonly id : number;
  pokeid : string;
  name: string;
  height: number;
  // types: {
  //   slot: number;
  //   type: {
  //     name: string;
  //     url: string;
  //   };
  // }[];
};

// Appコンポーネントの定義
export const App = () => {
  //pokemonState
  const [pokeid, setPokeid] = useState('');
  const [pokemons, setPokemon] = useState<Pokemon[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokeid(e.target.value);
  };


  const handleSubmit = () => {
    if (!pokeid) return;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokeid}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const newPokemon: Pokemon = {
          id: new Date().getTime(),
          pokeid: pokeid,
          name: data.name,
          height: data.height,
          // types: [
          //   {
          //     slot: 0,
          //     type: {
          //       name: data.type.name,
          //       url: data.type.url,
          //     },
          //   },
          // ],
        };
        setPokemon((pokemon) => [newPokemon, ...pokemon]);
        setPokeid('');
      })
      .catch((error) => {
        console.error("エラー:", error);
      });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input type="text" value={pokeid} onChange={(e) => handleChange(e)} />
        <input type="submit" value="検索" />
      </form>
      <div>
        <ul>
        {pokemons.map((pokemon) => {
          return (
            <li key={pokemon.id}>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokeid}.png`} alt={pokemon.name} />
              <div>
                <p>No:<span>{pokemon.pokeid}</span></p>
                <p>Name:<span>{pokemon.name}</span></p>
                <p>Height:<span>{pokemon.height}</span></p>
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
      </div>


    </div>
  );
};