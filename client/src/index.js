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
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';

const Index = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/profile" component={Profile} />
        <Route path="/room/:id" component={RoomDetails} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

ReactDOM.render(<Index />, document.getElementById('root'));