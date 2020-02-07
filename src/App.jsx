import React from "react";
// import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import LandingPage from "./components/pageComponents/pages/landingPage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
          <LandingPage />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
