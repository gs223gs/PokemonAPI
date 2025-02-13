import PokemonList from "./components/disp/PokemonList";
import PokemonForm from "./components/fetch/PokemonForm";
import PokemonTheme from "./components/colortheme/PokemonTheme";
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
