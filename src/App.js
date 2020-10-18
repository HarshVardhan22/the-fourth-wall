import React, { useState } from "react";

import ReactDom from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import FrontPage from "./components/FrontPage"

import SecondPage from "./components/second page/SecondPage"

import Items from "./components/second page/Items"

const App = () => {
 

  return (
    <div>
      <FrontPage />
      <SecondPage />
      
    </div>
  );
};

export default App;
