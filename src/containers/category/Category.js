import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Typography
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import SimpleDialog from '../../components/Dialog';
import { selectItem, changeItem } from '../../reducer/category';

const Category = props => {
  const { no, items, selectItem, changeItem } = props;
  const categoryName = `Category ${no + 1}`;
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const handleOpen = (id, name) => {
    setSelectedId(id);
    setName(name);
    setOpen(true);
  };

  const handleChange = name => {
    changeItem({ id: selectedId, name });
    setOpen(false);
  };

  return (
    <Grid item>
      <Typography>{categoryName}</Typography>
      <List>
      {items.map((item, id) => {
        const itemName = item.name ? item.name : `${categoryName} Item ${id + 1}`
        return (
          <ListItem key={id} button onClick={() => selectItem({ no, id})}>
            <ListItemText primary={itemName} />
            <ListItemText primary={`(${item.children.length})`} />
            <ListItemIcon
              onClick={e => {
                e.stopPropagation();
                handleOpen(item.id, item.name);}
              }
            >
              <EditIcon />
            </ListItemIcon>
          </ListItem>
        );
      })}
      </List>
      <SimpleDialog
        open={open}
        name={name}
        onClose={handleChange}
      />
    </Grid>
  );
};

const mapDispatchToProps = {
  selectItem,
  changeItem
};

export default connect(null, mapDispatchToProps)(Category);
