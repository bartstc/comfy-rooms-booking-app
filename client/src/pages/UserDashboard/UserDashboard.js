import React, { Component } from 'react';

import Dashboard from '../../components/Dashboard/Dashboard';
import History from './userDashboard/History';
import AddComment from './userDashboard/AddComment';

class UserDashboard extends Component {
  state = {
    open: false,
    hotelId: '',
    rating: '',
    text: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  onSubmit = e => {
    e.preventDefault();

    this.onClose();
    console.log(this.state);
    this.setState({
      rating: '',
      text: ''
    });
  };

  onClickOpen = id => {
    this.setState({
      open: true,
      hotelId: id
    });
  };

  onClickClose = () => this.setState({ open: false });

  render() {
    return (
      <Dashboard name="John Doe" history={this.props.history}>
        <History
          handleClickOpen={this.onClickOpen}
        />
        <AddComment
          handleClose={this.onClickClose}
          handleChange={this.onChange}
          handleSubmit={this.onSubmit}
          open={this.state.open}
          values={this.state}
        />
      </Dashboard>
    );
  }
};

export default UserDashboard;