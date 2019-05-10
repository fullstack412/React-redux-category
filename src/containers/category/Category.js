import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';

import SimpleDialog from '../../components/Dialog';
import { selectItem, changeItem } from '../../reducer/category';

const styles = theme => ({
  card: {
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit
  },
  title: {
    borderBottom: '1px solid #454545'
  }
});

const Category = props => {
  const { no, items, selectItem, changeItem, editable, classes } = props;
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
      <Card className={classes.card}>
        <Typography
          className={classes.title}
          align="left"
          variant="body"
        >
          {categoryName}
        </Typography>
        <List>
        {items.map((item, id) => {
          const itemName = item.name ? item.name : `${categoryName} Item ${id + 1}`
          return (
            <ListItem key={id} button onClick={() => selectItem({ no, id})}>
              <ListItemText primary={itemName} />
              <ListItemText primary={`(${item.children.length})`} />
              {editable && (
                <ListItemIcon
                  onClick={e => {
                    e.stopPropagation();
                    handleOpen(item.id, item.name);}
                  }
                >
                  <EditIcon />
                </ListItemIcon>
              )}
            </ListItem>
          );
        })}
        </List>
        <SimpleDialog
          open={open}
          name={name}
          onClose={handleChange}
        />
      </Card>
    </Grid>
  );
};

const mapDispatchToProps = {
  selectItem,
  changeItem
};

const mapStateToProps = state => ({
  editable: state.category.editable
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Category));
