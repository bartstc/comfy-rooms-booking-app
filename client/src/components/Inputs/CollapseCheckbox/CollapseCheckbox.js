import React, { useState } from 'react';
import useToggle from '../../../hooks/useToggle';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';

import { CheckboxWrapper } from './CollapseCheckbox.styles';

const CollapseCheckbox = ({ open, title, list, handleFilters, category }) => {
  const [state, toggle] = useToggle();
  const [checked, setChecked] = useState([]);

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

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    };

    setChecked(newChecked);
    handleFilters(newChecked, category);
  };

  const renderList = () => (
    list
      ? list.map(value => (
        <ListItem className="list-item" key={value._id}>
          <ListItemText
            primary={value.name}
          />
          <ListItemSecondaryAction>
            <Checkbox
              className="checkbox"
              color="default"
              onChange={handleToggle(value.name)}
              checked={checked.indexOf(value.name) !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>
      ))
      : null
  );

  return (
    <CheckboxWrapper>
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
            {renderList()}
          </List>
        </Collapse>
      </List>
    </CheckboxWrapper>
  )
};

CollapseCheckbox.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  handleFilters: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired
};

export default CollapseCheckbox;