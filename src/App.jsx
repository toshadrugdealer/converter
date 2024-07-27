import styles from "./App.module.css";
import CurrencyInput from "./components/CurrencyInput/CurrencyInput";
import { useTheme } from "./context/ThemeContext";
import { ThemeButton } from "./components/ThemeButton/ThemeButton";
import { useCurConverter } from "./hooks/useCurConverter";

function App() {
  const { isDark } = useTheme();
  const {
    amountOne,
    amountTwo,
    currencyOne,
    currencyTwo,
    currencyRates,
    handleAmountOneChange,
    handleAmountTwoChange,
    handleCurrencyOneChange,
    handleCurrencyTwoChange,
    formatCurrency,
  } = useCurConverter();
  if (isDark) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
  if (currencyRates === null) return <p>ошибка получения данных</p>;
  if (currencyRates.length === 0) return <p>Loading...</p>;
  return (
    <div
      className={`${styles.container} ${isDark ? styles.dark : styles.light}`}
    >
      <header>
        <p>1 {currencyOne} равен</p>
        <p className={styles.result}>
          {formatCurrency(
            (1 * currencyRates[currencyTwo].value) /
              currencyRates[currencyOne].value
          )}
          {` ${currencyTwo}`}
        </p>
      </header>
      <div className={styles.inputWrapper}>
        <CurrencyInput
          amount={amountOne}
          currency={currencyOne}
          currencies={Object.keys(currencyRates)}
          onAmountChange={handleAmountOneChange}
          onCurrencyChange={handleCurrencyOneChange}
        />
        <CurrencyInput
          amount={amountTwo}
          currency={currencyTwo}
          currencies={Object.keys(currencyRates)}
          onAmountChange={handleAmountTwoChange}
          onCurrencyChange={handleCurrencyTwoChange}
        />
      </div>
      <ThemeButton />
    </div>
  );
}

export default App;
