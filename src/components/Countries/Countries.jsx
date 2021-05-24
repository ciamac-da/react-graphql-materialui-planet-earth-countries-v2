import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from "./CountriesStyle";


const Countries = (myCountries) => {
  const classes = useStyles();
  return (
      <div className={classes.cards}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Country Name
          {myCountries.name}
          </Typography>
          <Typography  gutterBottom  variant="h5"  component="h2">
          Code
          </Typography>
          <Typography gutterBottom   variant="h5" component="h2">
           Language/s
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

export default Countries;