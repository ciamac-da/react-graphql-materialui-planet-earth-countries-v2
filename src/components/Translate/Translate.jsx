import React from "react";
import { Typography, Button } from "@material-ui/core/";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import ForwardIcon from "@material-ui/icons/Forward";
import myStyle from "./TranslateStyle";

const Footer = () => {
  const classes = myStyle();
  return (
    <div>
      <div className={classes.footer}>
        <Typography className={classes.TypoStyle}>
          {" "}
          Select 2 Languages and click here to Translate them
        </Typography>
      </div>
    </div>
  );
};
export default Footer;
