import React, { useState } from 'react';
// import {Grid, TextField} from '@material-ui/core';
import { useItems } from '../hooks/item-hooks';
import { Navbar } from './Navbar';
import { ItemList } from './ItemList';
import { Item } from '../types/Item';

export const Homepage = () => {
  const { items } = useItems();

  const [itemList, setItemList] = useState<Item[]>(items);

  return (
    <>
      <Navbar setItemList={setItemList} />
      <ItemList items={itemList} />
    </>
  );
};
