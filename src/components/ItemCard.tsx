import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 80,
    width: 80
  },
});

type Props = {
  id: string;
  name: string;
};

export const ItemCard = ({id, name}: Props) =>  {
  const classes = useStyles();
  const imgUrl = `http://gameinfo.albiononline.com/api/gameinfo/items/${id}`;


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgUrl}
          title= {name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}