import React  from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Typography, Input} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import myStyle from "./NavbarStyle";




const Navbar = () => {
    const classes = myStyle();
    return (
  <AppBar className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      <Typography variant="h5" className={classes.t1}>
        Planet Earth Countries
      </Typography>
      <div className={classes.topDiv}>
      <Typography className={classes.typo}>
        Searching through Countries based on Languages...
      <SearchIcon className={classes.searchIcon}      /> 
      </Typography>
         <Input
            type="text"
            placeholder="Search here...!"
            autoComplete="off"
            className={classes.inputStyle}
           // onChange={e => setSearch(e.target.value)} 
           /> 
      </div>
    </Toolbar>
  </AppBar> 
); 
}

export default Navbar;