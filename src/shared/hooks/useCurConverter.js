import { useEffect, useState } from "react";
import axios from "axios";

// const BASE_URL = import.meta.env.VITE_BASE_URL;
// const API_KEY = import.meta.env.VITE_API_KEY;

// const API_URL = `${BASE_URL}${API_KEY}`;
const API_URL2 = import.meta.env.VITE_BASE_URL2;
const url = `${API_URL2}`;
export const useCurConverter = () => {
  const [amountOne, setAmountOne] = useState(1);
  const [amountTwo, setAmountTwo] = useState(1);
  const [currencyOne, setCurrencyOne] = useState("BYN");
  const [currencyTwo, setCurrencyTwo] = useState("USD");
  const [currencyRates, setCurrencyRates] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsloading(false);
    axios
      .get(url)
      .then((response) => setCurrencyRates(response.data[0]))
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => setIsloading(true));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyRates]);

  return {
    amountOne,
    amountTwo,
    currencyOne,
    currencyTwo,
    currencyRates,
    isLoading,
    handleAmountOneChange,
    handleAmountTwoChange,
    handleCurrencyOneChange,
    handleCurrencyTwoChange,
    formatCurrency,
    error,
  };
};
