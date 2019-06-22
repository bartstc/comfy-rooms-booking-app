import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrapper, Logo } from './Header.styles';

const Header = () => (
  <HeaderWrapper>
    <Link to="/"><Logo>Comfy rooms</Logo></Link>
    <Link className="auth-link" to="/signin">
      <p>My profile</p>
      <i aria-hidden="true" className="far fa-user" title="Go to profile"></i>
    </Link>
  </HeaderWrapper>
);

export default Header;