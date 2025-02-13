import PokemonList from "./components/PokemonList";
import PokemonForm from "./components/PokemonForm";
import PokemonTheme from "./components/PokemonTheme";
import { PokemonProvider } from "./contexts/PokemonContext";
import { PokemonThemeProvider } from "./contexts/ColorContext";

export const App = () => {
  return (
    <div>
      <PokemonProvider>
        <PokemonThemeProvider>
          <PokemonTheme />
          <PokemonForm />
          <PokemonList />
        </PokemonThemeProvider>
      </PokemonProvider>
    </div>
  );
};
