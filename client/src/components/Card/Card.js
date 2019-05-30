import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import { CardItem, CardImage, CardContent } from './Card.styles';

const Card = ({ background, path, children }) => (
  <CardItem>
    <Link to="/">
      <CardImage background={background}>
      </CardImage>
    </Link>
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