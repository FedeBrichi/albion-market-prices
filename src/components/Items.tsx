import React, { useEffect } from 'react';
import { getItems } from '../store/actions/item.actions';

import { makeStyles, LinearProgress } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems } from '../store/reducers';

import { ItemCard } from './ItemCard';
import { FixedSizeGrid, GridChildComponentProps } from 'react-window';

import AutoSizer from 'react-virtualized-auto-sizer';

const useStyle = makeStyles({
  content: {
    height: '100%',
  },
});

export const Items = () => {
  const classes = useStyle();

  const items = useSelector(selectItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems())
  },[dispatch])
  
  if (!items) {
    return <LinearProgress color="secondary" />
  }

  const itemGrid = items.map(item => {
    return <ItemCard {...item} />;
  });

  const Row = ({ columnIndex, rowIndex, style }: GridChildComponentProps) => {
    const index=rowIndex * 2 + columnIndex + rowIndex;
    return <div style={style}>{itemGrid[index]}</div>;
  };
  
  const getRowHeight = (width: number) => {
    if (width >= 1000) return 130;
    if (width >= 770) return 150;
    if (width >= 500) return 180;
    return 200;
  };

  return (
    <div className={classes.content}>
      <AutoSizer>
    {({ height, width }) => (
      <FixedSizeGrid
        height={height}
        columnCount={3}
        columnWidth={width / 3}
        rowHeight={getRowHeight(width)}
        rowCount={1000}
        width={width}
      >
        {Row}
      </FixedSizeGrid>
    )}
  </AutoSizer>
    </div>
  );
};
