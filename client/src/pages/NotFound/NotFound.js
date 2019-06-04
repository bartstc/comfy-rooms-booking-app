import React from 'react';
import {PageNotFound, Status, Message} from './NotFound.styles';
import NavLink from '../../components/NavLink/NavLink';

const NotFound = () => (
  <PageNotFound>
    <Status>404</Status>
    <Message>Page not found</Message>
    <NavLink to="/">Back to home</NavLink>
  </PageNotFound>
);

export default NotFound;