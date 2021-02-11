import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReviewRoutes from './reviews/routes';
import Reviews from './reviews/containers/List';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Reviews} />
        {ReviewRoutes}
      </Switch>
    </Router>
  );
}

export default App;
