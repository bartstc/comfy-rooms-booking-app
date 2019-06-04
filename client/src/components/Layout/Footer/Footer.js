import React from 'react';

import { FooterWrapper, FooterBottom, FooInfo, Register, Title, Subtitle } from './Footer.styles';

import NavLink from '../../NavLink/NavLink';

const Footer = () => (
  <FooterWrapper>
    <Register>
      <Title>Register your hotel</Title>
      <Subtitle>Create a special account to add your own offers. You will get access to the information panel that allows you to manage your properties in a simple way.</Subtitle>
      <Subtitle>All you need to do is create an account and after the first login, declare to create a special account to register the object.</Subtitle>
      <NavLink to="/signup" linkType="light">Sign up</NavLink>
    </Register>
    <FooterBottom>
      <FooInfo>Comfy Rooms. All Rights Reserved.</FooInfo>
      <FooInfo>Made by Bart.dsn</FooInfo>
    </FooterBottom>
  </FooterWrapper>
);

export default Footer;