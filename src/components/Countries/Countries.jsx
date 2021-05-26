import React from 'react';
import {Typography, Card, CardContent, CardActionArea, Button }from '@material-ui/core';
import Flip from 'react-reveal/Flip';
import useStyles from "./CountriesStyle";

 export const Countries = ({myCountries, addLang}) => {
  const classes = useStyles();
  return (
      <div className={classes.cards}>
      <Flip left>

    <Card className={classes.card}>
      <CardActionArea className={classes.cardAction}>
        <CardContent>
          <Typography className={classes.emoji}  variant="h5"  component="h2">
          {myCountries.emoji}
          </Typography>
          <Typography  variant="h5"  component="h2">
          Name: &nbsp;
          {myCountries.name}
          </Typography>
         
         
          <Typography  variant="h5"  component="h2">
          Code: &nbsp;
          {myCountries.code}
          </Typography>

          <Typography  variant="h5"  component="h2">
          Phone: &nbsp;
          {myCountries.phone}
          </Typography>

          <Typography  variant="h5"  component="h2">
          Capital: &nbsp;
          {myCountries.capital}
          </Typography>
          
          <div >
          <Typography className={classes.languages}  gutterBottom   variant="h5" component="h2">
           Language/s &nbsp;
           {myCountries.languages.slice(0,5).map(individualLanguage=> (
          <Button className={classes.btn} key={`${individualLanguage.name}`}> {individualLanguage.name}</Button>   
           ))}
          </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
      </Flip>
    
    </div>
  );
}
