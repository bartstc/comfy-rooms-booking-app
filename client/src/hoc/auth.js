import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner/Spinner';

export default (Component, reload = false) => {
  const VerifyRole = (props) => {
    const { history, auth: { isAuth, user }, profile: { profile } } = props;
    const [authLoading, setLoading] = useState(true);

    useEffect(() => {
      if (!isAuth) history.push('/signin');

      /* ROLES
        - 0: user
        - 1: pending registration (after registration, the user can add his hotel offers)
        - 2: registered, allowed to add hotel offers
        - 3: admin
      */
      // let profileExists = Object.keys(profile).length > 0;
      // if (!profileExists) history.push('/create_profile');

      if (reload) {
        if (user.role === 0 || user.role === 1) history.push('/user_dashboard');
        if (user.role === 2) history.push('/hotel_dashboard');
        if (user.role === 3) history.push('/admin_dashboard');
      };

      setLoading(false);
    }, [isAuth, user, history, profile]);

    if (authLoading && reload && !isAuth) return <Spinner />;

    return <Component {...props} />
  };

  VerifyRole.propTypes = {
    auth: PropTypes.object.isRequired
  };

  const mapStateToProps = ({ auth, profile }) => ({ auth, profile });

  return connect(mapStateToProps)(VerifyRole);
};

