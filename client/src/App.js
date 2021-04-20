import React  from "react"
import Search from './pages/search'
import Saved from './pages/Saved'
import Nav from './components/nav/nav'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/saved">
          <Saved />
        </Route>
        <Route path="/">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;