import { useEffect, useState } from "react";
// import data from "./../../q1.json";
import axios from "axios";

// const BASE_URL = import.meta.env.VITE_BASE_URL;
// const API_KEY = import.meta.env.VITE_API_KEY;

// const API_URL = `${BASE_URL}${API_KEY}`;
const API_URL2 = import.meta.env.VITE_BASE_URL2;

export const useCurConverter = () => {
  const [amountOne, setAmountOne] = useState(1);
  const [amountTwo, setAmountTwo] = useState(1);
  const [currencyOne, setCurrencyOne] = useState("BYN");
  const [currencyTwo, setCurrencyTwo] = useState("USD");
  const [currencyRates, setCurrencyRates] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL2)
      .then((response) => setCurrencyRates(response.data[0]))

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
  return {
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
  };
};
