import React from 'react';
import { Paper, makeStyles, Typography, Grid } from '@material-ui/core';
// import { Favorite, FavoriteBorder } from '@material-ui/icons';

type Props = {
  id: string;
  name: string;
};

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.secondary.light,
    margin: '0.5rem 0.5rem',
  },
  icon: {
    position: 'relative',
    top: 0,
    left: 0,
    height: '70px',
    width: '70px',
  },
  name: {},
}));

export const ItemCard = ({ id, name }: Props) => {
  const classes = useStyles();
  const imgUrl = `http://gameinfo.albiononline.com/api/gameinfo/items/${id}`;

  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container spacing={1}>
        <Grid item>
          <img src={imgUrl} className={classes.icon} alt={name} />
        </Grid>
        <Grid item>
          <Typography className={classes.name}>{name}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
