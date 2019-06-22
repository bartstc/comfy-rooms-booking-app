import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHotels } from '../../modules/profile/profileActions';

import Dashboard from '../../components/Dashboard/Dashboard';
import AddHotel from './dashboardHotel/AddHotel';
import HotelList from './dashboardHotel/HotelList';

class HotelDashboard extends Component {
  componentDidMount() {
    this.props.getHotels();
  };

  render() {
    const { auth, history, profile: { profile } } = this.props;

    return (
      <Dashboard name={auth.user.fullname} history={history}>
        <HotelList
          hotels={profile && profile.hotels}
        />
        <AddHotel />
      </Dashboard>
    );
  }
};

HotelDashboard.propTypes = {
  getHotels: PropTypes.func.isRequired
};

export default connect(null, { getHotels })(HotelDashboard);