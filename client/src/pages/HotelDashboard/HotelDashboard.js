import React, { Component } from 'react';
import { Empty } from './HotelDashboard.styles';

import Button from '../../components/Button/Button';
import Hotel from './hotelDashboard/Hotel';
import Dashboard from '../../components/Dashboard/Dashboard';
import Modal from '../../components/Modal/Modal';

class HotelDashboard extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Dashboard name="John Doe" history={this.props.history}>
        {/* <Empty>No offer has been added yet.</Empty> */}
        <Hotel />
        <Hotel />
        <Hotel />
        <Button onClick={this.handleClickOpen}>New hotel</Button>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
        >
          <Button onClick={this.handleClose}>Close</Button>
        </Modal>

      </Dashboard>
    );
  }
};

export default HotelDashboard;