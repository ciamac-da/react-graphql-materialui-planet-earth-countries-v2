import React, { useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import AppBar from "@material-ui/core/AppBar";
import { Typography, Input, Button } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import myStyle from "./NavbarStyle";
import { GET_COUNTRIES } from "../../../graphql/get-countries";
import { Countries } from "../../Countries/Countries";
import GTranslateIcon from '@material-ui/icons/GTranslate';
import ForwardIcon from '@material-ui/icons/Forward';

export const Navbar = () => {
  const classes = myStyle();
  const { data: { countries = [] } = {} } = useQuery(GET_COUNTRIES, {});

  const [search, setSearch] = useState("");
  const [langs, setLangs] = useState([]);
  const [firstLang, secondLang] = langs;
  const selectLang = (lang) => setLangs([...langs, lang].slice(0,2))

  // Filter search hook
  const mycountries = useMemo(() => {
    if (!search) return countries;
    return countries.filter((country) => {
      return (
        country.languages.filter((l) =>
          l.name.toLowerCase().startsWith(search.toLowerCase())
        ).length > 0
      );
    });
  }, [search, countries]);

  return (
    <div>
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
              // Search filter throught countries list...!
            />
            <div className= {classes.googleTranslateTypoDiv}>
             <Typography 
             className={classes.typoLangs}
             >
          {" "}
          Select 2 Languages and click here to Translate!
        </Typography>
        
          <Button
          className={classes.translateBtn}
          onClick = { e =>
            window.open(`https://translate.google.com/?sl=${firstLang.code}&tl=${secondLang.code}&op=translate`) 
          }
          >Translate   <GTranslateIcon /></Button>
          <Button>
           { firstLang ? <Button className={classes.firstLastBtn}>{firstLang.name}</Button> : null }
           { firstLang  && secondLang ?  <ForwardIcon className={classes.icon} />    : null    } 
           { secondLang ? <Button className={classes.firstLastBtn}>{secondLang.name}</Button> : null }
            </Button>
          </div>
            </div>
        </Toolbar>
      </AppBar>
      {mycountries.map((country) => {
        return <Countries key={country.name} myCountries={country} addLang={selectLang} />;
      })}
    </div>
  );
};
