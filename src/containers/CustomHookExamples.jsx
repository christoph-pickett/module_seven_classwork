import React from "react";
import { SubscribeForm } from "../components/SubscribeForm";
import { CatFact } from "../components/CatFact";

export const CustomHookExamples = () => {
  // state var

  // function

  // return
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <h4>Custom Hook Examples</h4>
      <ExampleDecorator>
        <>
          <h5>Subscribe form</h5>
          <SubscribeForm />
        </>
      </ExampleDecorator>

      <ExampleDecorator>
        <CatFact />
      </ExampleDecorator>
    </div>
  );
};

const ExampleDecorator = ({ children }) => {
  return (
    <div
      className="exampleDecorator"
      style={{
        border: "solid blue 1px",
        width: "100%",
        padding: "10px",
        margin: "10px",
      }}
    >
      {children}
    </div>
  );
};
