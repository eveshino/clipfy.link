import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Aiyu from "./components/pages/Aiyu";
import Nami from "./components/pages/Aiyunami";

import React from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/aiyu1002" component={Aiyu}></Route>
        <Route path="/aiyunami1002" component={Nami}></Route>
      </Switch>
    </Router>
  );
}

export default App;
