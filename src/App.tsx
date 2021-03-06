import React from 'react';
import { Items } from './components/Items';
import { Navbar } from './components/Navbar';
import { ItemDetails } from './components/ItemDetails';
import { Route, Switch, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  app: {
    height: '90vh',
    flex: 1,
  },
});

export const App = () => {
  const location = useLocation();
  const classes = useStyle();

  return (
    <>
      <Navbar />
      <div className={classes.app}>
        <Switch location={location}>
          <Route exact path="/" component={Items} />
          <Route exact path="/details/:id" component={ItemDetails} />
        </Switch>
      </div>
    </>
  );
};
