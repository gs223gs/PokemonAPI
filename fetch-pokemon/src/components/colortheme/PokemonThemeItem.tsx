import { useTheme } from "../../contexts/ColorContext";

interface PokemonThemeItemProps {
  theme_color: string;
}

const PokemonThemeItem: React.FC<PokemonThemeItemProps> = ({ theme_color }) => {
  const themeContext = useTheme();
  if (!themeContext) {
    throw new Error("useTheme は ColorProvider 内で使用してください");
  }
  const [theme,] = themeContext;
  const [, setTheme] = themeContext;

  return (
    <label htmlFor={`theme-${theme_color}`} className={`label ${theme}`}>
      <input
        id={`theme-${theme_color}`}
        type="radio"
        name="theme-color_radio"
        value={theme_color}
        defaultChecked={theme === theme_color}
        onChange={(e) =>{
          setTheme(e.target.value)
        }}
        className={`input ${theme}`}
      />
      {theme_color}
    </label>
  );
};

export default PokemonThemeItem;
