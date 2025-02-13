import PokemonList from "./components/disp/PokemonList";
import PokemonForm from "./components/fetch/PokemonForm";
import PokemonTheme from "./components/colortheme/PokemonTheme";
import { PokemonProvider } from "./contexts/PokemonContext";
import { useTheme } from "./contexts/ColorContext";

export const App = () => {
  const themeContext = useTheme();
  if (!themeContext) {
    throw new Error("useTheme は ColorProvider 内で使用してください");
  }
  const [theme,] = themeContext
  console.log(theme)
  return (
    <div className={`body ${theme}`}>
      <PokemonProvider>
          <PokemonTheme />
          <PokemonForm />
          <PokemonList />
      </PokemonProvider>
    </div>
  );
};
