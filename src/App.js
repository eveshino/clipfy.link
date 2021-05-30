import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React from "react";
import Home from "./components/pages/Home";
import Signin from "./components/forms/Signin";
import Register from "./components/forms/Register";
import Profile from "./components/pages/Profile";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Signin" component={Signin}></Route>
        <Route path="/Register" component={Register}></Route>
        <Route path="/shino" component={Profile}></Route>
      </Switch>
    </Router>
  );
}

export default App;
