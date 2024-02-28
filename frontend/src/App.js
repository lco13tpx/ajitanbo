import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RestaurantsList from './components/RestaurantsList';
import RestaurantDetail from './components/RestaurantDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={RestaurantsList} />
          <Route path="/restaurants/:id" component={RestaurantDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;