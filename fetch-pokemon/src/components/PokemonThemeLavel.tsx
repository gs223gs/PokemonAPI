import PokemonThemeItem from './PokemonThemeItem';

const THEMES_COLOR = ["dark", "light"];
const PokemonThemeLavel = () => {
  return (
    <>
          {THEMES_COLOR.map((theme_color) => {
            return (
              <PokemonThemeItem theme_color={theme_color} key={theme_color} />
            );
          })}
    </>
  )
}

export default PokemonThemeLavel