import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React from "react";
import Home from "./components/pages/Home";

import Profile from "./components/pages/Profile";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/aiyu" component={Profile}></Route>
      </Switch>
    </Router>
  );
}

export default App;
