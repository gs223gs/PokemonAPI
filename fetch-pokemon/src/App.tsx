import PokemonList from "./components/PokemonList";
import PokemonForm from "./components/PokemonForm";
import { PokemonProvider } from "./contexts/PokemonContext";

export const App = () => {
  return (
    <div>
      <PokemonProvider>
        <PokemonForm />
        <PokemonList />
      </PokemonProvider>
    </div>
  );
};
