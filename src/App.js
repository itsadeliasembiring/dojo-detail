import React from "react";
import Main from "./Pages/Main";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
