import React, { useState, useEffect } from "react";
// Renders a digital time that updates every second

export function Clock() {
  // STATE / VARIABLES
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // first arg is usually an arrow function

    const clockInterval = setInterval(() => tick(), 1000);
    console.log("Clock component mounted");

    // function returned from useEffect is run on unmount
    // and used to cleanup any side effects
    return () => {
      console.log("Clock component unmounted");
      clearInterval(clockInterval);
    };
  }, []); // second arg is an array of dependencies

  // FUNCTION
  const tick = () => {
    setDate(new Date());
    console.log("tick"); // track the effect frequency
  };

  // RETURN
  return (
    <div className="Clock">
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()}
    </div>
  );
}

// ++ Try removing the dependency array from useEffect
// and notice the difference in ‘tick’ log messages
// ++ Why do the console messages appear double?
