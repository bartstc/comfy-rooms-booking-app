import React from 'react';
import PropTypes from 'prop-types';
import { Choice, Title, Subtitle } from './SelectRole.styles';
import Button from '../../Button/Button';

const SelectRole = ({ createUserProfile, handleRegistration, handleLogout }) => {
  const createStandardProfile = () => createUserProfile();
  
  const askForRegistration = () => {
    handleRegistration();
    handleLogout();
  };

  return (
    <>
      <Title>Choose the type of account</Title>
      <Choice>
        <Subtitle>I want to create a standard account that allows searching and booking selected offers.
        <br />
          <span>Select this option to test the app.</span>
        </Subtitle>
        <Button onClick={createStandardProfile}>Standard</Button>
      </Choice>
      <Choice>
        <Subtitle>I want to create a special account that allows you to add your own hotel offers and access the management panel. After selecting this option for administrative purposes, you will be logged out.
        <br />
          <span>Requires acceptance by the admin!</span>
        </Subtitle>
        <Button onClick={askForRegistration}>Provider</Button>
      </Choice>
    </>
  );
};

SelectRole.propTypes = {
  createUserProfile: PropTypes.func.isRequired,
  handleRegistration: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired
};

export default SelectRole;