import React, { Component } from 'react';
import Feed from "./Feed.js";
import Banner from "./Banner.js";
import "../../stylesheets/_All.scss";

const LandingPage = () => {
  return(
    <div className = "landing-page">
      <Banner />
      <Feed />
    </div>
  )
};

export default LandingPage;
