import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
// import { LoginForm } from "../components/formExample";

export const ContextWork = () => {
  // STATE / VAR
  //-----------------------------------------------
  const { currentUser, handleUpdateUser, mode, toggleMode } = useUserContext();
  //------------------------------------------------

  // USEEFFECT

  // FUNC
  const handleNameChange = (e) => {
    // -------------------------------------------------
    handleUpdateUser({ name: e.target.value });
    // -------------------------------------------------
  };

  // RETURN
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          border: "solid blue 1px",
          padding: "10px",
          margin: "10px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: mode === "dark" ? "black" : "lightgrey",
          color: mode === "dark" ? "white" : "black",
        }}
      >
        <p>FIRST CONTEXT EXPAMPLE</p>

        {/* //----------------------------------------------------------------------- */}
        <input value={currentUser.name} onChange={handleNameChange} />
        <button onClick={toggleMode}>{mode} mode</button>
        {/* //----------------------------------------------------------------------- */}
      </div>

      {/* <div
        style={{
          border: "solid blue 1px",
          padding: "10px",
          margin: "10px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: mode === "dark" ? "black" : "lightgrey",
          color: mode === "dark" ? "white" : "black",
        }}
      >
        <p>LOGIN EXPAMPLE</p>

        <LoginForm />
      </div> */}
    </div>
  );
};
