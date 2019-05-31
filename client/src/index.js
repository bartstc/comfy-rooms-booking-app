import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import RoomDetails from './pages/RoomDetails/RoomDetails';
import Explore from './pages/Explore/Explore';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';

const Index = () => (
  <Router>
    <Layout>
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/room/:id" component={RoomDetails} />
      <Route exact path="/" component={Home} />
    </Layout>
  </Router>
);

ReactDOM.render(<Index />, document.getElementById('root'));