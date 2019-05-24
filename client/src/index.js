import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';

const Index = () => (
  <Router>
    <Route exact path="/" component={Home} />
  </Router>
);

ReactDOM.render(<Index />, document.getElementById('root'));