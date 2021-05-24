import React, { useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import AppBar from "@material-ui/core/AppBar";
import { Typography, Input } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import myStyle from "./NavbarStyle";
import { GET_COUNTRIES } from "../../../graphql/get-countries";
import Countries from '../../Countries/Countries';

const Navbar = () => {
  const classes = myStyle();
  const { data: { countries = [] } = {} } = useQuery(GET_COUNTRIES, {});
  const [search, setSearch] = useState("");

  const myCountries = useMemo(() => {
    if (!search) return countries;
    return countries.filter((country) => {
      return (
        country.languages.filter((language) => {
          return language.name
            .toLowerCase()
            .startsWith(search.toLocaleLowerCase());
        }).length > 0
      );
    });
  }, [search, countries]);

  return (
    <>
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.t1}>
          Planet Earth Countries
          <img
            className={classes.img}
            src="https://img.icons8.com/cotton/30/000000/earth-planet--v2.png"
          />
        </Typography>
        <div className={classes.topDiv}>
          <Typography className={classes.typo}>
            Searching through Countries based on Languages...
            <SearchIcon className={classes.searchIcon} />
          </Typography>
          <Input
            type="text"
            placeholder="Search here...!"
            autoComplete="off"
            className={classes.inputStyle}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </Toolbar>
    </AppBar>
    {myCountries.map(country => {
      return <Countries key={country.name} myCountries={country} />
    })}
    </>
  );
};

export default Navbar;