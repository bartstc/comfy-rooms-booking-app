import React from 'react';

import { Section, Title, Subtitle } from './AuthInfo.styles';

import NavLink from '../../../components/NavLink/NavLink';

const AuthInfo = () => (
  <Section>
    <Title>Sign up as householder</Title>
    <Subtitle>Create a special account to add your own offers. You will get access to the information panel that allows you to manage your properties in a simple way.</Subtitle>
    <NavLink to="/auth_householder">Sign up</NavLink>
  </Section>
);

export default AuthInfo;