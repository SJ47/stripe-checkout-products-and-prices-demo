import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Cancel from './Components/Cancel';
import Success from './Components/Success';
import StripeContainer from './Containers/StripeContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={StripeContainer} />
          <Route path="/success" component={Success} />
          <Route path="/cancel" component={Cancel} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
