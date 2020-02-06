import React from "react";
// import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import * as eventServices from "./services/eventService";
import { Logger } from "aws-amplify";
import Navbar from "./components/navigation/Navbar";
import LandingPage from "./components/pageComponents/pages/landingPage";
const logger = new Logger("App");
window.LOG_LEVEL = "DEBUG";

class App extends React.Component {
  state = {
    eventQuantity: 20
  };

  componentDidMount() {
    this.getEvents(this.state.eventQuantity);
    logger.info("Hello World");
  }

  getEvents = eventQuantity => {
    eventServices
      .getEvents(eventQuantity)
      .then(this.getEventsSuccess)
      .catch(this.onError);
  };

  getEventsSuccess = eventData => {
    logger.info(eventData);
  };

  onError = errResponse => {
    logger.debug(errResponse);
  };

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
