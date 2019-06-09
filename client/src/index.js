import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setToken from './utils/setToken';
import { setCurrentUser, logoutUser } from './modules/auth/authActions';
import { store } from './store';
import Root from './store';

import auth from './hoc/auth';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import RoomDetails from './pages/RoomDetails/RoomDetails';
import Explore from './pages/Explore/Explore';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import DashboardUser from './pages/DashboardUser/DashboardUser';
import DashboardHotel from './pages/DashboardHotel/DashboardHotel';
import DashboardAdmin from './pages/DashboardAdmin/DashboardAdmin';
import NotFound from './pages/NotFound/NotFound';

// Check for token (was added throught login action)
if (localStorage.jwtToken) {
  // Set auth token header auth
  setToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to signin
    window.location.href = '/signin';
  };
};

const Index = () => (
  <Root>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/explore" component={Explore} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/user_dashboard" component={auth(DashboardUser, true)} />
          <Route path="/hotel_dashboard" component={auth(DashboardHotel, true)} />
          <Route path="/admin_dashboard" component={auth(DashboardAdmin, true)} />
          <Route path="/room/:id" component={RoomDetails} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  </Root>
);

ReactDOM.render(<Index />, document.getElementById('root'));