import React  from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import myStyle from "./NavbarStyle";



const Navbar = () => {
    const classes = myStyle();
    return (
  <AppBar className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      <Typography variant="h5" className={classes.t1}>
        Planet Earth Countries
      </Typography>
    </Toolbar>
  </AppBar> 
); 
}

export default Navbar;