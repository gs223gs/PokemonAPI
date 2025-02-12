import { useState, useContext, createContext, ReactNode } from 'react';

type Pokemon = {
  readonly id: number;
  pokeid: number;
  name: string;
  height: number;
};

interface PokemonProviderProps {
  children: ReactNode;
}

// 初期値は空配列や空関数など適宜設定
const PokemonContext = createContext<Pokemon[]>([]);
const PokemonFetchContext = createContext<
  [() => void, (e: React.ChangeEvent<HTMLInputElement>) => void, string]
>([
  () => {},
  () => {},
  ""
]);

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  // pokeidの状態を管理するためのuseStateフック
  const [pokeid, setPokeid] = useState("");
  // Pokemonのリストを管理するためのuseStateフック
  const [pokemons, setPokemon] = useState<Pokemon[]>([]);
  console.log(pokemons);

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
          pokeid: Number(pokeid), // pokeidを数値に変換
          name: data.name, // 取得したポケモンの名前
          height: data.height, // 取得したポケモンの高さ
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
    <PokemonContext.Provider value={pokemons}>
      <PokemonFetchContext.Provider value={[handleSubmit, handleChange, pokeid]}>
        {children}
      </PokemonFetchContext.Provider>
    </PokemonContext.Provider>
  );
};

// カスタムフックとして定義
export const usePokemon = () => useContext(PokemonContext);
export const useFetchPokemon = () => useContext(PokemonFetchContext);