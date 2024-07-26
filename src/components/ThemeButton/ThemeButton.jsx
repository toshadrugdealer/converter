import { useTheme } from "../../context/ThemeContext";
import styles from "./styles.module.css";
export const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={`${styles.btnTheme} ${isDark ? styles.dark : styles.light}`}
    >
      Tема
    </button>
  );
};
