import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Profile from "./components/pages/Profile";
import React from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Profile}></Route>
      </Switch>
    </Router>
  );
}

export default App;
