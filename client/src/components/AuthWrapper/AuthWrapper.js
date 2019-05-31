import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AuthSection, AuthForm, Title, Subtitle } from './AuthWrapper.styles';

import Button from '../Button/Button';

const AuthWrapper = ({
  children,
  handleSubmit,
  title,
  subtitle,
  path,
  pathName
}) => (

    <AuthSection>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Link to={path}>{pathName}</Link>
      <AuthForm onSubmit={handleSubmit}>
        {children}
        <Button
          type="submit"
        >Submit</Button>
      </AuthForm>
    </AuthSection>
  );

AuthWrapper.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  pathName: PropTypes.string.isRequired
};

export default AuthWrapper;