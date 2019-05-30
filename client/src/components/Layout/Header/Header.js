import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrapper, Logo } from './Header.styles';

const Header = () => (
  <HeaderWrapper>
    <Link to="/"><Logo>Comfy rooms</Logo></Link>
    <Link className="auth-link" to="auth">
      <p>My profile</p>
      <i className="far fa-user"></i>
    </Link>
  </HeaderWrapper>
);

export default Header;