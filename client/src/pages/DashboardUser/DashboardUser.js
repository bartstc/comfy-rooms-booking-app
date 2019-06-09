import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dashboard from '../../components/Dashboard/Dashboard';
import History from './dashboardUser/History';
import AddComment from './dashboardUser/AddComment';

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
    const {
      profile: { loading, profile },
      history,
      auth: { user: { fullname, role } }
    } = this.props;

    return (
      <Dashboard name={fullname} history={history}>
        {(role === 1)
          ? <p>Registration in progress. Please be patient.</p>
          : <>
            <History handleClickOpen={this.onClickOpen} />
            <AddComment
              handleClose={this.onClickClose}
              handleChange={this.onChange}
              handleSubmit={this.onSubmit}
              open={this.state.open}
              values={this.state}
            />
          </>
        }

      </Dashboard>
    );
  }
};

UserDashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = ({ profile }) => ({ profile });

export default connect(mapStateToProps)(UserDashboard);