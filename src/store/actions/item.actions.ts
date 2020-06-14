import { Item } from '../../types/Item';

export const GET_ITEM_DETAILS = 'GET_ITEM_DETAILS';
export const GET_ITEMS = 'GET_ITEMS';

export const getItems = () => {
  return {
    type: GET_ITEMS as typeof GET_ITEMS,
  };
};

export const getItemDetails = (itemId: string) => {
  return {
    type: GET_ITEM_DETAILS as typeof GET_ITEM_DETAILS,
  };
};

export type ItemAction = ReturnType<typeof getItemDetails> | ReturnType<typeof getItems>;
