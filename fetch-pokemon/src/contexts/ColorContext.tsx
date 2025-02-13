import React, { createContext, useState, ReactNode, useContext } from "react";

interface PokemonThemeProviderProps {
  children: ReactNode;
}

type PokemonThemeContextType = [string, React.Dispatch<React.SetStateAction<string>>];

const PokemonColorThemeContext = createContext<PokemonThemeContextType | undefined>(undefined);

export const PokemonThemeProvider = ({ children }: PokemonThemeProviderProps): JSX.Element => {
  const [theme, setTheme] = useState("dark");
  return (
    <PokemonColorThemeContext.Provider value={[theme,setTheme]}>
      {children}
    </PokemonColorThemeContext.Provider>
  );
};

export const useTheme = () => useContext(PokemonColorThemeContext);
