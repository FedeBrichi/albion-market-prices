import React, { createContext, useState, useContext } from 'react';
import baseItems from '../utils/baseItems.json';
import { Item } from '../types/Item';

const itemContextType = {
  items: baseItems,
  setItems: (items: Item[]) => {},
};

const ItemContext = createContext(itemContextType);

type Props = {
  children: React.ReactNode;
};

export const useItems = () => useContext(ItemContext);

export const ItemProvider = ({ children }: Props) => {
  const [items, setItems] = useState(itemContextType.items);
  return <ItemContext.Provider value={{ items, setItems }}>{children}</ItemContext.Provider>;
};
