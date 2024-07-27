import { useCurConverter } from "../../hooks/useCurConverter";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import styles from "./styles.module.css";
export const CurConverter = () => {
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
  } = useCurConverter();
  return (
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
  );
};
