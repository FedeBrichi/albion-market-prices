import React from 'react';

export const ItemDetails = (props: any) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;

  return <div>{id}</div>;
};
