import "./App.css";
import React from "react";
import { UserProvider } from "./context/UserContext";
import { WelcomePage } from "./containers/WelcomePage";
import { Routes, Route } from "react-router-dom";
import { LabOne } from "./components/LabOne";
import { LabTwo } from "./components/LabTwo";

import {
  MovieListExample,
  NameComponentForRefExample,
  SlideWork,
  PostListReducer,
} from "./containers/SlideWork";
import { CustomHookExamples } from "./containers/CustomHookExamples";
import { ContextWork } from "./containers/ContextWork";
import { Navbar } from "./components/Navbar";

const App = () => {
  //RETURN
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="test" element={<div>something</div>} />

        <Route path="lab-one" element={<LabOne />} />
        <Route path="lab-two" element={<LabTwo />} />

        <Route path="slide-work">
          <Route index element={<SlideWork />} />
          <Route path="name-ref" element={<NameComponentForRefExample />} />
          <Route
            path="name-ref/:name"
            element={<NameComponentForRefExample />}
          />
          <Route path="movie-list" element={<MovieListExample />} />
          <Route path="post-list" element={<PostListReducer />} />
        </Route>

        <Route path="custom-hook" element={<CustomHookExamples />} />
        <Route path="context-work" element={<ContextWork />} />

        <Route
          path="*"
          element={<div>Hey this path doesnt exist yet...</div>}
        />
      </Routes>
    </UserProvider>
  );
};

export default App;
