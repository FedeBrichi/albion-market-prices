import { GET_ITEM_DETAILS } from '../actions/item.actions';
import { Action } from '../actions';
import { Item } from '../../types/Item';

export type ItemState = {};

const initialState: ItemState = {};

export const itemReducer = (state: ItemState = initialState, action: Action): ItemState => {
  switch (action.type) {
    case GET_ITEM_DETAILS: {
      return state;
    }
    default:
      return state;
  }
};
