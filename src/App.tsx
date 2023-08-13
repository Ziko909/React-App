
import './App.css';
import Navbar from "./Navbar"
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import BlogDetails from './BlogDetails';




function App() : JSX.Element {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="/blog/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
