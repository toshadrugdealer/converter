import { useTheme } from "../app/context/ThemeContext";
import { useCurConverter } from "../shared/hooks/useCurConverter";
import { CurConverter } from "../entities/CucConverter/CurConverter";
import styles from "./styles.module.css";

export function Main() {
  const { isDark } = useTheme();
  const { error } = useCurConverter();
  return (
    <>
      {error ? (
        <p>ошибка получения данных</p>
      ) : (
        <>
          <div
            className={`${styles.container} ${
              isDark ? styles.dark : styles.light
            }`}
          >
            <CurConverter />
          </div>
        </>
      )}
    </>
  );
}
