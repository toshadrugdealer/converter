import { useEffect, useState } from "react";
import { useTheme } from "../app/context/ThemeContext";

export const Test = () => {
  const { isDark } = useTheme();
  const [seconds, setSeconds] = useState(0);
  const [min, setMin] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (!isStarted) return;
    let interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isStarted]);
  if (seconds === 59) {
    setMin((prev) => prev + 1);
    setSeconds(0);
  }

  const light = {
    color: "#171717",
  };
  const dark = {
    color: "#dfe0e4",
  };
  return (
    <>
      <p style={isDark ? dark : light}>
        {min > 0 ? `${min} : ${seconds}` : seconds}
      </p>
      <button
        onClick={() => {
          setIsStarted((prev) => !prev);
        }}
      >
        {isStarted ? "Стоп" : "Старт"}
      </button>
      <button
        onClick={() => {
          setSeconds(0);
          setMin(0);
        }}
      >
        Очистка
      </button>
      <button
        onClick={() => {
          setIsVisible((prev) => !prev);
        }}
      >
        Нажми на меня
      </button>
      {isVisible && <p style={isDark ? dark : light}>{`Ты жаба)`}</p>}
    </>
  );
};
