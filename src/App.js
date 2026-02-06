import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Section1 from './components/section1';
import Javacourse from './pages/javacourse';
import Advjava from './pages/advjava';
import Pythoncourse from './pages/pythoncourse';
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
        <Routes>
          <Route path="/" element={<Section1 />} />
          <Route path="/java" element={<Javacourse />} />
          <Route path="/advjava" element={<Advjava />} />
          <Route path="/js" element={<JavaScriptC />} />
          <Route path="/python" element={<Pythoncourse />} />
          <Route path="/django" element={<Djangocourse />} />
          <Route path="/css" element={<Csscourse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
