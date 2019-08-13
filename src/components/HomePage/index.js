import React, { Component } from "react";
import Feed from "./Feed.js";
import "../../stylesheets/_HomePage.scss";
import Header from "../Header.js";

const HomePage = () => {
  return(
    <div className = "home-page">
      <Header />
      <Feed />
    </div>
  )
};

export default HomePage;
