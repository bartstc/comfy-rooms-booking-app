import React from 'react';

import { FooterWrapper, FooterTitle, SocialList, SocialItem, FooterBottom, FooInfo } from './Footer.styles';

const Footer = () => (
  <FooterWrapper>
    <FooterTitle>Social Media</FooterTitle>
    <SocialList>
      <SocialItem><i className="fab fa-facebook-f"></i></SocialItem>
      <SocialItem><i className="fab fa-twitter"></i></SocialItem>
      <SocialItem><i className="fab fa-instagram"></i></SocialItem>
    </SocialList>
    <FooterBottom>
      <FooInfo>Comfy Rooms. All Rights Reserved.</FooInfo>
      <FooInfo>Made by Bart.dsn</FooInfo>
    </FooterBottom>
  </FooterWrapper>
);

export default Footer;