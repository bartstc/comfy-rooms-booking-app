import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

const Index = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={Home} />
    </Layout>
  </Router>
);

ReactDOM.render(<Index />, document.getElementById('root'));