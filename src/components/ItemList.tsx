import React from 'react';
// import {Grid, TextField} from '@material-ui/core';
import { Item } from '../types/Item';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {ItemCard} from './ItemCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 400,
      maxWidth: 300,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

type Props = {
  items: Item[];
};

export const ItemList = ({ items }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {items.slice(0, 20).map((item, index) => {
        return <ItemCard {...item}/>
        // <div key={index} >
          
        // <img src={`http://gameinfo.albiononline.com/api/gameinfo/items/${item.id}`} alt={`${item.name}`}/>
        // <div >{item.name}</div>
        // </div>;
      })}
    </div>
  );
};
