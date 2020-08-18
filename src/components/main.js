import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./landingpage";

import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";
import About from "./aboutme";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/aboutme" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default Main;