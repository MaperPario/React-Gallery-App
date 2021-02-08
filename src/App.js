import React, { Component }from 'react';
import './index.css';
import Search from './Components/Search';
import FourOhFour from './Components/404'
import {
  Redirect,
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/search/:searchText" component={Search}/>
            <Route exact path="/">
              <Redirect to="/search/cats" />
            </Route>
            <Route path="/search" component={Search}>
              <Redirect to="/search/cats" />
            </Route>
            <Route component={FourOhFour}/>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
