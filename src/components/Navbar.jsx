import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export const Navbar = () => {
  const { mode } = useUserContext();
  // State/var
  const linkList = [
    { to: "/lab-one", lable: "Lab One" },
    { to: "/lab-two", lable: "Lab Two" },
    { to: "/slide-work", lable: "Slide Work" },
    { to: "/movie-list", lable: "Movie List" },
    { to: "/post-list", lable: "Post List" },
    { to: "/custom-hook", lable: "Custom Hook" },
    { to: "/context-work", lable: "Context Work" },
  ];

  // func
  const linkListDisplayHandler = () => {
    return linkList.map((linkObject) => {
      return (
        <li key={linkObject.to}>
          <NavLink to={linkObject.to}>{linkObject.lable}</NavLink>
        </li>
      );
    });
  };

  //return

  return (
    <nav
      className="NavBar"
      style={{
        backgroundColor: mode === "light" ? "white" : "black",
        color: mode === "light" ? "black" : "white",
      }}
    >
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {linkListDisplayHandler()}
      </ul>
    </nav>
  );
};
