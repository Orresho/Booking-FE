import React, { Component } from 'react';
import routes from '../routes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// Routes are setup from the imported array of all the routes
// We iterate throuth the array of routes and pass their props to single Route component
// Furthur configuration to be done down the line.

/**
 * ROUTE RULES
 * - matching exact paths
 * - Switch to get a single path
 */

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            const { path, component, exact } = route;
            return (
              <Route
                key={index}
                path={path}
                component={component}
                exact={exact}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
