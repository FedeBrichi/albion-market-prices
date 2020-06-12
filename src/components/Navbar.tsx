import React from 'react';
import { AppBar, Toolbar, Typography, Box, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
  appbar: {
    background: theme.palette.primary.dark,
    marginBottom: '0.5rem',
  },
  title: {
    color: theme.palette.secondary.main,
  },
}));

export const Navbar = () => {
  const classes = useStyle();

  return (
    <Box component="nav">
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography variant="h5" className={classes.title}>
              Albion MarketPrice
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
