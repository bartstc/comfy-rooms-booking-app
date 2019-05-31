import React, { useState } from 'react';
import useToggle from '../../../hooks/useToggle';
import PropTypes from 'prop-types';

import { RadioWrapper } from './CollapseRadio.styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CollapseRadio = ({ open, title, list, handleFilters, category }) => {
  const [state, toggle] = useToggle();
  const [value, setValue] = useState('0');

  // useEffect(() => {
  //   if (open) {
  //     toggle(!state);
  //   };
  // }, []);

  const handleClick = () => toggle(!state);

  const handleAngle = () => (
    state
      ? <i className="fas fa-angle-up"></i>
      : <i className="fas fa-angle-down"></i>
  );

  const renderList = () => (
    list
      ? list.map(value => (
        <FormControlLabel
          key={value._id}
          value={`${value._id}`}
          control={<Radio color="default" className="radio" />}
          label={value.name}
        />
      ))
      : null
  );

  const handleChange = (e) => {
    handleFilters(e.target.value, category);
    setValue(e.target.value);
  };

  return (
    <RadioWrapper>
      <List className="list">
        <ListItem className="title" onClick={handleClick}>
          <ListItemText
            primary={title}
          />
          {handleAngle()}
        </ListItem>
        <Collapse
          in={state}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            <RadioGroup
              aria-label="prices"
              name="prices"
              value={value}
              onChange={handleChange}
            >
              {renderList()}
            </RadioGroup>
          </List>
        </Collapse>
      </List>
    </RadioWrapper>
  )
};

CollapseRadio.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  handleFilters: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired
};

export default CollapseRadio;