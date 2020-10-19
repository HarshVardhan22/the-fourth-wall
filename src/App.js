import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import FrontPage from "./components/FrontPage"

import SecondPage from "./components/second page/SecondPage"

import ThirdPage from "./components/thirdPage/ThirdPage"

import Footer from "./components/footer/Footer"

const App = () => {
 

  return (
    <div>
      <FrontPage />
      <SecondPage />
      <ThirdPage/>
      <Footer/>
    </div>
  );
};

export default App;
