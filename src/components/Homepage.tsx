import React from 'react';
import { ItemList } from './ItemList';

import baseItems from '../utils/baseItems.json';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  content: {
    height: '100%',
  },
});

export const Homepage = () => {
  const classes = useStyle();
  return (
    <div className={classes.content}>
      <ItemList items={baseItems} />
    </div>
  );
};
