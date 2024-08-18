import { useThemeContext } from "../../contexts";
import { CustomSwitch } from "./ui";

export const ThemeSwitch = () => {
  const { toggleTheme } = useThemeContext();

  return <CustomSwitch name="themeSwitch" onClick={toggleTheme} />;
};
