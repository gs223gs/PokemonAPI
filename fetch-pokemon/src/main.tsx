import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PokemonThemeProvider } from "./contexts/ColorContext";
import { App } from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root") as Element);

root.render(
  <StrictMode>
    <PokemonThemeProvider>
      <App />
    </PokemonThemeProvider>
  </StrictMode>
);
