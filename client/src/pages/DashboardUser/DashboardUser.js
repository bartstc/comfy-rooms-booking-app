import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handlePayment, addOpinion } from '../../modules/profile/profileActions';

import Dashboard from '../../components/Dashboard/Dashboard';
import History from './dashboardUser/History';
import Spinner from '../../components/Spinner/Spinner';

class UserDashboard extends Component {
  state = {
    open: false,
    hotelName: 'hotel',
    orderId: 'order'
  };

  onClickOpen = (hotelName, orderId) => {
    this.setState({
      open: true,
      hotelName,
      orderId
    });
  };

  onClickClose = () => this.setState({ open: false });

  render() {
    const {
      history,
      profile: { loading, profile },
      auth: { user: { fullname, role } },
      handlePayment,
      addOpinion
    } = this.props;
    const { open, hotelName, orderId } = this.state;

    return (
      <Dashboard name={fullname} history={history}>
        {(role === 1)
          ? <p>Registration in progress. Please be patient.</p>
          : <>
            {loading
              ? <Spinner />
              : <History
                handleClickOpen={this.onClickOpen}
                handleClickClose={this.onClickClose}
                history={profile && profile.history}
                handlePayment={handlePayment}
                addOpinion={addOpinion}
                open={open}
                hotelName={hotelName}
                orderId={orderId}
              />
            }
          </>
        }
      </Dashboard>
    );
  }
};

UserDashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  handlePayment: PropTypes.func.isRequired,
  addOpinion: PropTypes.func.isRequired
};

export default connect(null, { handlePayment, addOpinion })(UserDashboard);