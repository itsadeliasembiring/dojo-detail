import React from "react";
import Menu from "./Pages/Menu/Menu";
import Profile from "./Pages/Profile/Profile";
import Pengurus from "./Pages/Pengurus/Pengurus";
import Contact from "./Pages/Contact/Contact";
import Schedule from "./Pages/Schedule";
import Cost from "./Pages/Cost";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Menu />
      <div className="App">
        <Switch>
          <Route path="/profile-dojo" exact component={Profile} />
          <Route path="/pengurus-dojo" component={Pengurus} />
          <Route path="/contact-dojo" component={Contact} />
          <Route path="/schedule-dojo" component={Schedule} />
          <Route path="/cost-dojo" component={Cost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
