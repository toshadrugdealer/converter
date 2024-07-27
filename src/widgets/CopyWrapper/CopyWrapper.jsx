import { useTheme } from "../../app/context/ThemeContext";
import styles from "./styles.module.css";
export const CopyWrapper = ({ children }) => {
  const { isDark } = useTheme();
  const copyHandler = () => {
    navigator.clipboard.writeText(children);
  };
  return (
    <div
      className={`${styles.copyWrapper} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={`${styles.text} ${isDark ? styles.dark : styles.light}`}>
        {children}
      </div>
      <button
        onClick={copyHandler}
        className={`${styles.btnCopy} ${isDark ? styles.dark : styles.light}`}
      >
        Копировать
      </button>
    </div>
  );
};
