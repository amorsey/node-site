import React, { Component } from 'react'
import ReactDOM from "react-dom";
import LandingPage from "./components/LandingPage"


const Index = () => {
  return (
      <LandingPage/>
  )
};

ReactDOM.render(
  <Index />,
  document.getElementById("root")
);
