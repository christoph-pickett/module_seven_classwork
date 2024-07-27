import React, { useState, useEffect } from "react";
import { useData } from "../hooks/useData";

export const CatFact = () => {
  // Fetches a random activity

  const [catFactLength, setCatFactLength] = useState(20);

  // uses custom hook to handle the effect for loading external data
  const [data, isLoading] = useData(
    `https://catfact.ninja/facts?max_length=${catFactLength}`
  );

  const dropdownListChangeHandler = (e) => {
    console.log("dropdownListChangeHandler", e.target.value);
    setCatFactLength(e.target.value);
  };

  const displayCatFactHandler = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return data?.data.map((fact, index) => <p key={index}>{fact.fact}</p>);
  };

  return (
    <div className="CatFact componentBox">
      <h3>Cat Fact Finder</h3>
      <label>
        Choose number of Cat facts:
        <select value={catFactLength} onChange={dropdownListChangeHandler}>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
        </select>
      </label>
      <div>
        <strong>Cat Fact: </strong>
        {displayCatFactHandler()}
      </div>
    </div>
  );
}; // ++ Add a second use of useData to fetch activities based on type
