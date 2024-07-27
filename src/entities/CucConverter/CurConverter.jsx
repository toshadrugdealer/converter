import CurrencyInput from "../../widgets/CurrencyInput/CurrencyInput";
import { useCurConverter } from "../../shared/hooks/useCurConverter";
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
    formatCurrency,
    isLoading,
  } = useCurConverter();
  return (
    <>
      {isLoading ? (
        <>
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
        </>
      ) : (
        <div>123</div>
      )}
    </>
  );
};
