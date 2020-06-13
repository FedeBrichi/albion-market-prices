import React from 'react';
import { Item } from '../types/Item';
import { ItemCard } from './ItemCard';
import { FixedSizeGrid, GridChildComponentProps } from 'react-window';

import AutoSizer from 'react-virtualized-auto-sizer';

type Props = {
  items: Item[];
};

export const ItemList = ({ items }: Props) => {
  const itemGrid = items.map(item => {
    return <ItemCard {...item} />;
  });

  const Row = ({ columnIndex, rowIndex, style }: GridChildComponentProps) => {
    return <div style={style}>{itemGrid[rowIndex * 2 + columnIndex + rowIndex]}</div>;
  };

  const getRowHeight = (width: number) => {
    if (width >= 1000) return 130;
    if (width >= 770) return 150;
    if (width >= 500) return 180;
    return 200;
  };

  return (
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
  );
};
