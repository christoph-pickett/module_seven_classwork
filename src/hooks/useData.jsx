import { useState, useEffect, useReducer } from "react";
import axios from "axios";

// hooks are usually named exports rather than default
export function useData(url) {
  // state variable for holding fetched json data

  const [data, dispatch] = useReducer(getDataReducer, {
    loading: true,
    data: [],
    error: "",
  });

  useEffect(() => {
    if (url) {
      let ignore = false;
      dispatch({ type: getDataReducerActions.FETCH_LOADING });
      axios
        .get(url)
        .then((response) =>
          dispatch({
            type: getDataReducerActions.FETCH_SUCCESS,
            payload: response.data,
          })
        )
        .catch((error) =>
          dispatch({
            type: getDataReducerActions.FETCH_ERROR,
            payload: error.message,
          })
        );

      // cleanup function, in case url changes before complete
      return () => {
        ignore = true;
      };
    }
  }, [url]); // re-run effect if url changes

  // return the data fetched from the given url
  return [data, data.loading];
}
// save as useData.jsx in the 'hooks' folder

export const getDataReducerActions = {
  // ACTION TYPES
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
  FETCH_LOADING: "FETCH_LOADING",
};

export function getDataReducer(state, action) {
  // TELL ME WHAT ACTION IS FIRED
  console.log("Action is fired:", action.type, action.payload);

  const cloneOfState = { ...state };
  switch (action.type) {
    case getDataReducerActions.FETCH_SUCCESS:
      return { loading: false, data: action.payload, error: "" };
    // insert change of state based on action here

    case getDataReducerActions.FETCH_ERROR:
      // insert change of state based on action here
      return { loading: false, data: [], error: action.payload };

    case getDataReducerActions.FETCH_LOADING:
      return { ...state, loading: true };
    default:
      return cloneOfState;
  }
}
