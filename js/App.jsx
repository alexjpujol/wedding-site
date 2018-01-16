import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Photos from './Photos';
import Weather from './Weather';

const FourOhFour = () => <h1>Uh oh, there is nothing here!</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/photos" component={Photos} />
        <Route exact path="/weather" component={Weather} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
