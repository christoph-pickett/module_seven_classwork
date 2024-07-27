import React, { createContext, useContext, useState } from "react";
import { useReducer } from "react";

const UserContext = createContext();

//----------------------- REDUCER -------------------
const userReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, currentUser: action.payload };
    case "TOGGLE_MODE":
      return { ...state, mode: state.mode === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

const initialState = {
  currentUser: { name: "Guest" },
  mode: "light",
  emoji: "🌞",
};

// --------------------------------------------------

export const UserProvider = (props) => {
  //--------------------------------------------------------
  const [state, dispatch] = useReducer(userReducer, initialState);
  //----------------------------------------------------------

  const handleUpdateUser = (user) => {
    //------------------------------
    dispatch({ type: "UPDATE_USER", payload: user });
    //------------------------------
  };

  const toggleMode = () => {
    //-----------------------------------
    dispatch({ type: "TOGGLE_MODE" });
    //-----------------------------------
  };
  // STATES

  return (
    <UserContext.Provider value={{ ...state, handleUpdateUser, toggleMode }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
