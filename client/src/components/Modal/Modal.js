import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import {Title} from './Modal.styles';
import Dialog from '@material-ui/core/Dialog';

const styles = {
  modal: {
    width: '90%',
    minWidth: '300px',
    maxWidth: '500px',
    padding: '1em'
  },
};

const Modal = ({ onClose, open, children, title, classes }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      classes={{ paper: classes.modal }}
    >
      <Title>{title}</Title>
      {children}
    </Dialog>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(Modal);