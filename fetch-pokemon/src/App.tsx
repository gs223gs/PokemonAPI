import { useState } from "react";

type Pokemon = {
  readonly id: number;
  pokeid: string;
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


export const App = () => {
  // pokeidの状態を管理するためのuseStateフック
  const [pokeid, setPokeid] = useState("");
  // Pokemonのリストを管理するためのuseStateフック
  const [pokemons, setPokemon] = useState<Pokemon[]>([]);

  // 入力フィールドの値を更新する関数
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokeid(e.target.value);
  };

  // フォームの送信処理
  const handleSubmit = () => {
    // pokeidが空の場合は処理を中止
    if (!pokeid) return;
    // PokeAPIのURLを生成
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokeid}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        // 取得したデータをPokemon型にマッピング
        const newPokemon: Pokemon = {
          id: new Date().getTime(), // 一意のIDを生成
          pokeid: pokeid, // 入力されたpokeid
          name: data.name, // 取得したポケモンの名前
          height: data.height, // 取得したポケモンの高さ
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
        // 新しいポケモンをリストに追加
        setPokemon((pokemon) => [newPokemon, ...pokemon]);
        // 入力フィールドをクリア
        setPokeid("");
      })
      .catch((error) => {
        // エラーが発生した場合の処理
        console.error("エラー:", error);
      });
  };

  return (
    <>
      <div>
        <h1>ポケモン検索</h1>
        <p>ポケモンのIDを入力してください</p>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // フォームのデフォルトの送信を防ぐ
            handleSubmit(); // フォームの送信処理を実行
          }}
        >
          <input type="text" value={pokeid} onChange={(e) => handleChange(e)} />
          <input type="submit" value="検索" />
        </form>
      </div>
      <div>
        <ul>
          {pokemons.map((pokemon) => {
            return (
              <li key={pokemon.id}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokeid}.png`}
                  alt={pokemon.name} // ポケモンの名前をalt属性に設定
                />
                <div>
                  <p>
                    No:<span>{pokemon.pokeid}</span>
                  </p>
                  <p>
                    Name:<span>{pokemon.name}</span>
                  </p>
                  <p>
                    Height:<span>{pokemon.height}</span>
                  </p>
                </div>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
