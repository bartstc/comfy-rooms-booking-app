import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { AuthSection, AuthForm, Title, Subtitle } from './AuthWrapper.styles';

import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';

const AuthWrapper = ({
  children,
  handleSubmit,
  title,
  subtitle,
  path,
  pathName,
  auth: { loading }
}) => (
    <AuthSection>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Link to={path}>{pathName}</Link>
      <AuthForm onSubmit={handleSubmit}>
        {children}
        {loading
          ? <Spinner />
          : <Button
            type="submit"
          >Submit</Button>
        }
      </AuthForm>
    </AuthSection>
  );

AuthWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  pathName: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(AuthWrapper);