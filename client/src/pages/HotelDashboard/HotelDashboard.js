import React, { Component } from 'react';

import Dashboard from '../../components/Dashboard/Dashboard';
import AddHotel from './hotelDashboard/AddHotel.js';
import HotelList from './hotelDashboard/HotelList';

const initState = {
  type: 'apartment',
  stars: '',
  name: '',
  city: '',
  contact: '',
  description: '',
  emailTitle: '',
  emailSubject: '',
  emailBody: '',
  // images
  // pin
};

class HotelDashboard extends Component {
  state = {
    open: false,
    ...initState
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  onSubmit = e => {
    e.preventDefault();

    console.log(this.state);
    this.setState({ open: false, ...initState });
  };

  onClickOpen = () => this.setState({ open: true });

  onClickClose = () => this.setState({ open: false });

  render() {
    return (
      <Dashboard name="John Doe" history={this.props.history}>
        <HotelList />
        <AddHotel
          open={this.state.open}
          handleClickOpen={this.onClickOpen}
          handleClickClose={this.onClickClose}
          handleChange={this.onChange}
          handleSubmit={this.onSubmit}
          values={this.state}
        />
      </Dashboard>
    );
  }
};

export default HotelDashboard;