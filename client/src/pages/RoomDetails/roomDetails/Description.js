import React from 'react';
import PropTypes from 'prop-types';
import { Text, Facilities, Facility } from './Description.styles';
import { Section, Key, Warning } from '../RoomDetails.styles';

const iconClasses = {
  parking: 'fas fa-parking',
  freewifi: 'fas fa-wifi',
  swimmingpool: 'fas fa-swimming-pool',
  gym: 'fas fa-dumbbell',
  restaurant: 'fas fa-utensils',
  airporttransfer: 'fas fa-plane-departure',
  petsareallowed: 'fas fa-paw',
  nonsmokingrooms: 'fas fa-smoking-ban',
  terrace: 'fas fa-umbrella-beach',
  airconditioning: 'fas fa-wind'
};

const Description = ({ facilities, description }) => (
  <Section>
    <Key>Description</Key>
    <Text>{description}</Text>
    <Key>Facilities</Key>
    <Facilities>
      {facilities.length === 0
        ? <Warning>No facilities</Warning>
        : facilities.map(item => (
          <Facility key={item}>
            <i className={iconClasses[item.replace(/\s/g, "")]}></i>
            <p>{item}</p>
          </Facility>
        ))
      }
    </Facilities>
  </Section>
);

Description.propTypes = {
  facilities: PropTypes.array,
  description: PropTypes.string.isRequired
};

export default Description;