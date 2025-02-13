import { useFetchPokemon } from "../../contexts/PokemonContext";
import { useTheme } from "../../contexts/ColorContext";
const PokemonForm = () => {
  const [handleSubmit,handleChange,pokeid] = useFetchPokemon()
  const [theme,] =useTheme()

  return (
    <div className={`pokemonform ${theme}`}>
      <form className={`pokemonform-form ${theme}`}
          onSubmit={(e) => {
            e.preventDefault(); // フォームのデフォルトの送信を防ぐ
            handleSubmit(); // フォームの送信処理を実行
          }}
        >
          <input className={`pokemonform-input ${theme}`} type="text" value={pokeid} onChange={(e) => handleChange(e)} />
          <input className={`pokemonform-submit ${theme}`} type="submit" value="検索" />
        </form>
    </div>
  );
}

export default PokemonForm;