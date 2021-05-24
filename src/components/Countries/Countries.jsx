import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from "./CountriesStyle";


 export const Countries = ({myCountries, addLang}) => {
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
          <Typography  >
          Country Name
          {console.log(myCountries)}
          </Typography>
          <Typography  gutterBottom  variant="h5"  component="h2">
          Code
          {myCountries.code}
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
