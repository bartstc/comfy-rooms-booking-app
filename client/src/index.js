import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import RoomDetails from './pages/RoomDetails/RoomDetails';

const Index = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/room/:id" component={RoomDetails} />
    </Layout>
  </Router>
);

ReactDOM.render(<Index />, document.getElementById('root'));