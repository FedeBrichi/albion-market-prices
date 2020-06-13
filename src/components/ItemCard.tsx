import React from 'react';
import {
  makeStyles,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  createStyles,
  CardActionArea,
} from '@material-ui/core';
import { FavoriteBorder } from '@material-ui/icons';
import { Link } from 'react-router-dom';

type Props = {
  id: string;
  name: string;
};

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      color: theme.palette.secondary.dark,
      backgroundColor: theme.palette.secondary.light,
      margin: '0.5rem 0.5rem',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },

    icon: {
      float: 'left',
      height: '70px',
      width: '70px',
    },
    playIcon: {
      margin: 0,
      padding: 0,
      height: 25,
      width: 25,
    },
  }),
);

export const ItemCard = ({ id, name }: Props) => {
  const classes = useStyles();
  const imgUrl = `http://gameinfo.albiononline.com/api/gameinfo/items/${id}`;

  return (
    <Card className={classes.root}>
      <Link to={`/details/${id}`} style={{ textDecoration: 'none' }}>
        <CardActionArea>
          <CardMedia className={classes.icon} image={imgUrl} title={name} />
          <div className={classes.details}>
            <CardContent>
              <Typography align="left" color="primary">
                {name}
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
      </Link>
      <IconButton style={{ float: 'right' }}>
        <FavoriteBorder className={classes.playIcon} />
      </IconButton>
    </Card>
  );
};
