import { combineReducers } from 'redux';
import { Action } from '../actions';
import { ItemsState, itemsReducer } from './items.reducer';
import { ItemState, itemReducer } from './item.reducer';

export type AppState = {
  items: ItemsState;
  item: ItemState;
};

export const reducer = combineReducers<AppState, Action>({
  items: itemsReducer,
  item: itemReducer,
});

export const selectItems = (state: AppState) => state.items;

export const selectStaticItem = (itemId: string) => (state: AppState) => {
  if (!state.items) return null;

  const item = state.items.find(item => item.id === itemId);
  return item ? item : null;
};
