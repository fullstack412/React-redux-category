import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  TextField
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    padding: 20
  }
});

const SimpleDialog = props => {
  const [name, setName] = useState(props.name);

  const handleClose = () => {
    props.onClose(name);
  };

  const handleChange = e => {
    setName(e.target.value);
  };

  return (
    <Dialog onClose={handleClose} open={props.open}>
      <DialogTitle>Set Item Name</DialogTitle>
      <div className={props.classes.root}>
        <TextField
          label="Name"
          onChange={handleChange}
          value={name}
        />
        <Button variant="contained" onClick={handleClose}>Ok</Button>
      </div>
    </Dialog>
  )
};

export default withStyles(styles)(SimpleDialog);
