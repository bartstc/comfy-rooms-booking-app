import React from 'react';
import PropTypes from 'prop-types';

import { CardItem, CardImage, CardImageOverlay, CardContent } from './Card.styles';

import NavLink from '../../components/NavLink/NavLink';

const Card = ({ background, path, children }) => (
  <CardItem>
    <CardImage background={background}>
      <CardImageOverlay>
        <NavLink to={path}>Check</NavLink>
      </CardImageOverlay>
    </CardImage>
    <CardContent>
      {children}
    </CardContent>
  </CardItem>
);

Card.propTypes = {
  background: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

Card.defaultProps = {
  background: '/images/Showcase.jpg'
};

export default Card;