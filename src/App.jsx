import { useState, useEffect } from "react";
import "./App.css";
import CurrencyInput from "./CurrencyInput";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const API_URL = `${BASE_URL}${API_KEY}`;
function App() {
  const [amountOne, setAmountOne] = useState(1);
  const [amountTwo, setAmountTwo] = useState(1);
  const [currencyOne, setCurrencyOne] = useState("BYN");
  const [currencyTwo, setCurrencyTwo] = useState("USD");
  const [currencyRates, setCurrencyRates] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setCurrencyRates(response.data.data))

      .catch((error) => {
        console.log(error);
        setCurrencyRates(null);
      });
  }, []);
  const formatCurrency = (number) => {
    return number.toFixed(3);
  };
  const handleAmountOneChange = (amountOne) => {
    setAmountTwo(
      formatCurrency(
        (amountOne * currencyRates[currencyTwo].value) /
          currencyRates[currencyOne].value
      )
    );
    setAmountOne(amountOne);
  };

  const handleAmountTwoChange = (amountTwo) => {
    setAmountOne(
      formatCurrency(
        (amountTwo * currencyRates[currencyOne].value) /
          currencyRates[currencyTwo].value
      )
    );
    setAmountTwo(amountTwo);
  };

  const handleCurrencyOneChange = (currencyOne) => {
    setAmountTwo(
      (amountOne * currencyRates[currencyTwo].value) /
        currencyRates[currencyOne].value
    );
    setCurrencyOne(currencyOne);
  };
  const handleCurrencyTwoChange = (currencyTwo) => {
    setAmountOne(
      (amountTwo * currencyRates[currencyOne].value) /
        currencyRates[currencyTwo].value
    );
    setCurrencyTwo(currencyTwo);
  };

  useEffect(() => {
    if (currencyRates.length === undefined) {
      handleAmountOneChange(1);
    }
  }, [currencyRates]);
  if (currencyRates === null) return <p>ошибка получения данных</p>;
  if (currencyRates.length === 0) return <p>Loading...</p>;
  return (
    <div>
      <h1>Currency Converter</h1>
      <p>1 {currencyOne} равен</p>
      <p>
        {formatCurrency(
          (1 * currencyRates[currencyTwo].value) /
            currencyRates[currencyOne].value
        )}
        {currencyTwo}
      </p>
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
}

export default App;
