import React, { Component } from 'react';
import ReactDOM from "react-dom";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ArticlePage from "./components/ArticlePage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => {
  return (
    <Router>
      <div>
        <nav>
          <li>
            <Link to="/"
          </li>
        </nav>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <Index />,
  document.getElementById("root")
);
