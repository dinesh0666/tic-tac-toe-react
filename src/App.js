import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Import Board and Scoreboard views
import { Board } from "./components/board";
import { Scoreboard } from "./components/scoreboard";

import "./styles/board.css";
import "./styles/box.css";
import "./styles/buttons.css";

// Create App component
export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path="/" component={Scoreboard} />
          <Route path="/board" component={Board} />
        </BrowserRouter>
      </div>
    );
  }
}
