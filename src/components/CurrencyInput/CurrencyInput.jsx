import { useTheme } from "../../context/ThemeContext";
import styles from "./styles.module.css";
const CurrencyInput = ({
  amount,
  currency,
  currencies,
  onAmountChange,
  onCurrencyChange,
}) => {
  const { isDark } = useTheme();
  return (
    <div className={styles.inputWrapper}>
      <input
        className={`${isDark ? styles.dark : styles.light}`}
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
      />
      <select
        className={`${isDark ? styles.dark : styles.light}`}
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencies.map((currency, index) => (
          <option key={index} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
