import React, { useRef, useState, useEffect, useReducer } from "react";
import axios from "axios";
import { useUserContext } from "../context/UserContext";
import { useParams, useSearchParams } from "react-router-dom";

export const SlideWork = () => {
  // STATE and VAR

  // FUNCTIONS

  // RETURN
  return (
    <div>
      <h1>Slide work</h1>
      <div
        style={{ border: "solid blue 1px", padding: "10px", margin: "10px" }}
      >
        <p>NAME REF EXAMPLE</p>
        <NameComponentForRefExample name={"Joby"} />
      </div>

      <div
        style={{ border: "solid blue 1px", padding: "10px", margin: "10px" }}
      >
        <p>REDUCER EXAMPLE</p>
        <MovieListExample />
      </div>

      <div
        style={{ border: "solid blue 1px", padding: "10px", margin: "10px" }}
      >
        <p>REDUCER EXAMPLE SLIDE 23-24</p>
        <PostListReducer />
      </div>
    </div>
  );
};

export const PostListReducer = () => {
  const [postsResult, dispatch] = useReducer(reducer, {
    // initial state for postsResult state variable
    loading: true, // true when loading and no data in posts
    posts: [], // empty until data is fetched
    error: "", // empty unless there was an error
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/post?_limit=5") // modify this URL to test the error case
      .then((response) => {
        // object passed to dispatch holds all data needed for updating state: both type of update and associated data
        dispatch({
          type: reducerActions.FETCH_SUCCESS,
          payload: response.data,
        }); // dispatch calls reducer function and triggers re-render
      })
      .catch((error) => {
        dispatch({ type: reducerActions.FETCH_ERROR, payload: error.message }); // lets us handle different types of state changes differently
      });
  }, []);

  // Hooks - useReducer

  // continued from previous slide

  // returned JSX uses the 3 things stored in postsResult state object to conditionally render data or an error message
  return (
    <div className="PostList componentBox">
      {postsResult.loading ? (
        <div>Loading posts...</div>
      ) : (
        postsResult.posts.map(
          (
            post // list of posts is just one of the things stored in the postsResult state object
          ) => (
            <div className="post" key={post.id}>
              <h3>
                Post #{post.id}: {post.title}
              </h3>
              <p>{post.body}</p>
            </div>
          )
        )
      )}
      <div className="error">{postsResult.error}</div>
      <button onClick={() => dispatch({ type: reducerActions.FETCH_CLEAR })}>
        Clear Posts
      </button>
    </div>
  );
};
// reducer function for axios fetch response
// called from dispatch when state is updated, lets us handle different actions
// return object should match same structure as initial state passed to useReducer
const reducerActions = {
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
  FETCH_CLEAR: "FETCH_CLEAR",
};
function reducer(postsResult, action) {
  switch (action.type) {
    case reducerActions.FETCH_SUCCESS:
      return { loading: false, posts: action.payload, error: "" };
    case reducerActions.FETCH_ERROR:
      return { loading: false, posts: [], error: action.payload };
    case reducerActions.FETCH_CLEAR:
      return { loading: false, posts: [], error: "" };
    default:
      return { ...postsResult, loading: false };
  }
} // What would this component look like using useState instead of useReducer?

//----------------------------------------------------------------------------------
function movieListReducer(state, action) {
  console.log("Action is fired:", state.type);
  switch (action.type) {
    case "ADD_MOVIE":
      const cloneOfState = { ...state };
      cloneOfState.listOfMovies.push({ title: "The Matrix", year: 1999 });
      return cloneOfState;
    case "DELETE_MOVIE":
      const updatedState = {
        listOfMovies: { ...state }.listOfMovies.filter(
          (movie) => movie.title !== "Rodger Rabbit"
        ),
      };
      console.log("updatedState", updatedState);
      return updatedState;
    default:
      return { ...state };
  }
}

export const MovieListExample = () => {
  const { currentUser } = useUserContext();
  console.log("currentUser", currentUser.name);
  const [state, dispatch] = useReducer(movieListReducer, {
    listOfMovies: [
      { title: "Rodger Rabbit", year: 1988 },
      { title: "Edge of Tomorrow", year: 2014 },
      { title: "The Lighthouse", year: 2019 },
      { title: "Hot Fuzz", year: 2007 },
    ],
  });

  // FUNCTIONS
  const MoviesDisplayHandler = () => {
    return state.listOfMovies.map((movie) => {
      return <li key={movie.title}>{movie.title}</li>;
    });
  };

  const addMovie = () => {
    dispatch({ type: "ADD_MOVIE" });
  };

  const deleteMovie = () => {
    dispatch({ type: "DELETE_MOVIE" });
  };

  // RETURN
  return (
    <div>
      {currentUser.name}
      <ul>{MoviesDisplayHandler()}</ul>
      <button onClick={addMovie}>ADD</button>
      <button onClick={deleteMovie}>DELETE</button>
    </div>
  );
};

export const NameComponentForRefExample = () => {
  // STATE and VAR
  const { name } = useParams();
  const [searchParams] = useSearchParams();
  //let [searchParams, setSearchParams] = useSearchParams();
  const nameRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      nameRef.current.textContent = "Nuh, your name is Christoph";
      nameRef.current.style.color = "red";

      // ..all code will run
    }, 2000);
  }, []);
  // FUNC

  // RETURN
  return <div ref={nameRef}>{name || searchParams.get("variantName")}</div>;
};

// ----------------------------------
const Revision = () => {
  const [count, setCount] = useState(0);
  const previousCountRef = useRef(0);

  useEffect(() => {
    // Update the previous count when count changes
    previousCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current STATE Count: {count}</p>
      <p>Previous Count: {previousCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
//---------------------------------
const BonusNameComponent = () => {
  return <div>BonusNameComponent</div>;
};

const ShowingTheUseRef = () => {
  const inputRef = useRef();
  const topofPageRef = useRef();

  const focusInput = () => {
    console.log("inputRef", inputRef.current);
    inputRef.current.focus();
  };

  return (
    <div>
      <div className="topOfPage" ref={topofPageRef}></div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
};

// import { useState, useRef } from 'react';
function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null); // 1. Create the ref

  function handleClick() {
    // use the current property of the ref object to access play and pause functions
    isPlaying ? videoRef.current.pause() : videoRef.current.play(); // 3. Use the ref to call DOM functions
    setIsPlaying(!isPlaying); // switch between playing and paused
  }

  return (
    <div className="VideoPlayer componentBox">
      {/* button to play or pause the video */}
      <button onClick={handleClick}> {isPlaying ? "Pause" : "Play"} </button>
      {/* 2. Initialise the ref */}
      <video ref={videoRef} width="250">
        <source
          type="video/mp4"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      </video>
    </div>
  );
}
// see https://react.dev/learn/manipulating-the-dom-with-refs for more examples

function ReducerCounter() {
  // useReducer takes a reducer function and the initial state value
  // returns array with the state variable and a dispatch function
  const [counter, dispatch] = useReducer(reducer, 0);

  const handleIncrement = () => {
    // we call the dispatch function to make all state updates
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    // dispatch takes a single argument - object passed to reducer
    dispatch({ type: "decrement" });
  };
  return (
    <div className="ReducerCounter componentBox">
      <h2>Count: {counter}</h2>
      <button onClick={handleIncrement}>Reducer Increment</button>
      <button onClick={handleDecrement}>Reducer Decrement</button>
    </div>
  );
}
// reducer function - can be called anything
// takes two arguments: the current state, and the action to be taken
// action is passed via dispatch, state is stored in component
// const reducer = (state, action) => {
//   switch (
//     action.type // switch statements are common in reducers
//   ) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     default:
//       return state;
//   }
// };
// reducer function returns the new value of state after taking action

// ++ Try to add more buttons for incrementing and decrementing by 5:
// 1. Add the buttons
// 2. Add handler functions which dispatch new types
// 3. Update the reducer function to handle the new types
export default ReducerCounter;
