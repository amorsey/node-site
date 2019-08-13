import React, { Component } from 'react';
import ReactDOM from "react-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProjectPage from "./components/ProjectPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./stylesheets/_All.scss";

const Index = () => {
  return (
    <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/about/" exact component={AboutPage} />
        <Route path="/projects/" exact component={ProjectPage} />
    </Router>
  );
};

ReactDOM.render(
  <Index />,
  document.getElementById("root")
);
