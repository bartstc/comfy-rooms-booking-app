import React from 'react';
import PropTypes from 'prop-types';
import { LinkWrapper } from './NavLink.styles';

const NavLink = ({ linkType, children, to, customStyles }) => {
  return (
    <LinkWrapper 
      className={[linkType].join(' ')} 
      style={customStyles} 
      to={to}
    >
      {children}
    </LinkWrapper>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  linkType: PropTypes.string,
  customStyles: PropTypes.object,
  children: PropTypes.node.isRequired
};

export default NavLink;