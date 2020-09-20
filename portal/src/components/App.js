import React from 'react';
import './App.scss';
import WindowTile from './WindowTile/WindowTiles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={WindowTile} />
        <Route path="/tile" component={WindowTile} />
      </Switch>
    </Router>
  );
}

export default App;
