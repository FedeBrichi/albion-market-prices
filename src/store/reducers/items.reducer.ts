import { GET_ITEMS } from '../actions/item.actions';
import { Action } from '../actions';
import { Item } from '../../types/Item';
import baseItems from '../../utils/baseItems.json';

export type ItemsState = Item[] | null;

export const itemsReducer = (state: ItemsState = null, action: Action): ItemsState => {
  switch (action.type) {
    case GET_ITEMS:
      return baseItems;
    default:
      return state;
  }
};
