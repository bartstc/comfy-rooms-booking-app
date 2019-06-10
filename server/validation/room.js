const { isEmpty } = require('validator');
const empty = require('../utils/isEmpty');

module.exports = signinValidation = ({ price, adults, children }) => {
  let errors = {};

  price = !empty(price) ? price : '';
  adults = !empty(adults) ? adults : '';
  children = !empty(children) ? children : '';

  if (isEmpty(price.toString())) errors.price = 'Price field is required';
  if (isEmpty(adults.toString())) errors.adults = 'Adults field is required';
  if (isEmpty(children.toString())) errors.children = 'Children field is required';

  return {
    errors,
    isValid: empty(errors)
  };
};
