import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './Button.styles';

const Button = ({ disabled, onClick, btnType, type, children, customStyles }) => (
  <ButtonWrapper
    disabled={disabled}
    onClick={onClick}
    className={[btnType].join(' ')}
    type={type}
    style={customStyles}
  >
    {children}
  </ButtonWrapper>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  customStyles: PropTypes.object,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  type: 'button'
};

export default Button;