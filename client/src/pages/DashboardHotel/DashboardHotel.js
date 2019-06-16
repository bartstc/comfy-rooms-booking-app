import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHotels, addHotel } from '../../modules/profile/profileActions';

import Dashboard from '../../components/Dashboard/Dashboard';
import AddHotel from './dashboardHotel/AddHotel';
import HotelList from './dashboardHotel/HotelList';

const initState = {
  type: 'apartment',
  stars: '1',
  name: '',
  city: '',
  address: '',
  contact: '',
  description: '',
  emailTitle: '',
  emailSubject: '',
  emailBody: '',
  images: [],
  longitude: 0,
  latitude: 0
};

class HotelDashboard extends Component {
  state = {
    open: false,
    ...initState
  };

  componentDidMount() {
    this.props.getHotels();
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onCordsChange = (longitude, latitude) => this.setState({ longitude, latitude });

  onSubmit = async e => {
    e.preventDefault();
    const { type, stars, name, city, address, contact, description, emailTitle, emailSubject, emailBody, images, longitude, latitude } = this.state;

    const hotelData = {
      type,
      stars,
      name,
      city,
      address,
      contact,
      description,
      emailTitle,
      emailSubject,
      emailBody,
      images,
      pin: {
        longitude,
        latitude,
        title: name,
        description: address
      }
    };

    await this.props.addHotel(hotelData);

    if (!Object.keys(this.props.errors).length > 0) // if error obj is empty
      this.setState({ open: false, ...initState });
  };

  onClickOpen = () => this.setState({ open: true });

  onClickClose = () => this.setState({ open: false });

  onImageUpload = images => this.setState({ images });

  render() {
    const { auth, history, profile: { profile }, errors } = this.props;
    const { longitude, latitude } = this.state;

    return (
      <Dashboard name={auth.user.fullname} history={history}>
        <HotelList
          hotels={profile && profile.hotels}
        />
        <AddHotel
          open={this.state.open}
          handleClickOpen={this.onClickOpen}
          handleClickClose={this.onClickClose}
          handleChange={this.onChange}
          handleCordsChange={this.onCordsChange}
          handleSubmit={this.onSubmit}
          handleUpload={this.onImageUpload}
          values={this.state}
          pin={{ longitude, latitude }}
          errors={errors}
        />
      </Dashboard>
    );
  }
};

HotelDashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getHotels: PropTypes.func.isRequired,
  addHotel: PropTypes.func.isRequired
};

const mapStateToProps = ({ errors }) => ({ errors });

export default connect(mapStateToProps, { getHotels, addHotel })(HotelDashboard);