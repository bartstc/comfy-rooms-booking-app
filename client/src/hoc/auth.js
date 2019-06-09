import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner/Spinner';

export default (Component, reload = false) => {
  const VerifyRole = (props) => {
    const { history, auth: { isAuth, user } } = props;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (!isAuth) history.push('/signin');

      /* ROLES
        - 0: user
        - 1: pending registration (after registration, the user can add his hotel offers)
        - 2: registered, allowed to add hotel offers
        - 3: admin
      */
      if (reload) {
        if (user.role === 0 || user.role === 1) history.push('/user_dashboard');
        if (user.role === 2) history.push('/hotel_dashboard');
        if (user.role === 3) history.push('/admin_dashboard');
      };

      setLoading(false);
    }, [isAuth, user, history]);

    if (loading && reload) return <Spinner />

    return <Component {...props} />
  };

  const mapStateToProps = ({ auth }) => ({ auth });

  return connect(mapStateToProps)(VerifyRole);
};

