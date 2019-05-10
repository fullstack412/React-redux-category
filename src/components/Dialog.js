import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
      <TextField onChange={handleChange} value={name} />
      <Button onClick={handleClose}>Ok</Button>
    </Dialog>
  )
};

export default SimpleDialog;
