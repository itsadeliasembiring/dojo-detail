import React from "react";
import Main from "./Pages/Main/Main";
import Profile from "./Pages/Profile/Profile";
import Pengurus from "./Pages/Pengurus/Pengurus";
import Contact from "./Pages/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Main />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Profile} />
          <Route path="/pengurus-dojo" component={Pengurus} />
          <Route path="/contact-dojo" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
