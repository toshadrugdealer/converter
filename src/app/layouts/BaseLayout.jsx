import { Main } from "../../pages/MainPage";
import { Test } from "../../test/test";
import { useTheme } from "../context/ThemeContext";
import styles from "./styles.module.css";

export const BaseLayout = () => {
  const { isDark } = useTheme();
  if (isDark) {
    document.body.style.backgroundColor = "#171717";
  } else {
    document.body.style.backgroundColor = "#dfe0e4";
  }

  return (
    <div className={styles.wrapper}>
      <Main />

      {/* <Test /> */}
    </div>
  );
};
