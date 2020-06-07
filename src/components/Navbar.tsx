import React from 'react';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Item } from '../types/Item';
import items from '../utils/baseItems.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);

const limitedItemsList = (items: Item[], input: string, limit: number) => {
  const regEx = new RegExp(`${input}`, 'gi');
  const filteredList: Item[] = [];

  for (let i = 0; i < items.length && filteredList.length < limit; i++) {
    if (items[i].name.match(regEx)) {
      filteredList.push(items[i]);
    }
  }
  return filteredList;
};

type Props = {
  setItemList: (newItems: Item[]) => void;
};

export const Navbar = ({ setItemList }: Props) => {
  const classes = useStyles();

  const searchChangeHandler = (searchInput: string) => {
    const filteredItems = limitedItemsList(items, searchInput, 20);
    setItemList(filteredItems);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Albion Online MarketPrices
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={e => {
                searchChangeHandler(e.target.value);
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
