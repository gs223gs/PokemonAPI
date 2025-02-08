
const PokemonForm = ({ handleSubmit, handleChange, pokeid }) => {
  return (
    <div>
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
  );
}

export default PokemonForm;