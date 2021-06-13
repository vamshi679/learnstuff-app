import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav';
import Section1 from './components/section1';
import Javacourse from './pages/javacourse';
import Advjava from './pages/advjava';
import pythoncourse from './pages/pythoncourse';
import Djangocourse from './pages/djangocourse';
import Csscourse from './pages/css';
import JavaScriptC from './pages/javascriptcourse';
import './App.css';

const App = () => {

  // const java = React.lazy(()=> import('./components/javacourse'));

  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Section1} />
          <Route path="/java" component={Javacourse} />
          <Route path="/advjava" component={Advjava} />
          <Route path="/js" component={JavaScriptC} />
          <Route path="/python" component={pythoncourse} />
          <Route path="/django" component={Djangocourse} />
          <Route path="/css" component={Csscourse} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
