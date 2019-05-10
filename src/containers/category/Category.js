import React, { useState } from 'react';
import { connect } from 'react-redux';

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
    <div>
      <p>{categoryName}</p>
      <ul>
        {items.map((item, id) => (
          <li
            key={id}
            onClick={() => selectItem({no, id})}
          >{
            `${item.id} => ${item.name || categoryName} Item ${id + 1}`
          }
          <a
            onClick={e => {
              e.stopPropagation();
              handleOpen(item.id, item.name);}
            }
          >Edit</a>
          </li>
        ))}
      </ul>
      <SimpleDialog
        open={open}
        name={name}
        onClose={handleChange}
      />
    </div>
  );
};

const mapDispatchToProps = {
  selectItem,
  changeItem
};

export default connect(null, mapDispatchToProps)(Category);
