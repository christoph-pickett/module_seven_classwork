import React, { useEffect, useState } from "react";
import { useData } from "../hooks/useData";

export const LabTwo = () => {
  // states/var

  // functions

  // return
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <h1>Lab Two</h1>
      <BitcoinCustom />
    </div>
  );
};

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
const BitcoinCustom = () => {
  const [currency, setCurrency] = useState(currencies[0]);
  const [rate, setRate] = useState(0);
  const [data, isLoading] = useData(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  );

  useEffect(() => {
    if (data && !isLoading) {
      setRate(data.data.bitcoin[currency.toLowerCase()]);
    }
  }, [data, isLoading]);

  const displayResultHandler = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <p>
        1 Bitcoin is equal to {rate} {currency}
      </p>
    );
  };

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));
  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>

      <div>
        <h4>Current rate:</h4>
        {displayResultHandler()}
      </div>
    </div>
  );
};
