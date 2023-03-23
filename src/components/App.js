import React from "react";
import Header from "./header";
import Template from "./template";
import Mainbody from "./mainbody";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/form">
            
          </Route>
          <Route path="/">
            <Header />
            <Template />
            <Mainbody />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
