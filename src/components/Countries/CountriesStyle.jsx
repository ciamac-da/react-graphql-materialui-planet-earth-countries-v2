import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cards: {
    position: "relative",
    top: "200px",
    [theme.breakpoints.down("sm")]: {
      left: "0px !important",
      top: "290px !important",
    },
    [theme.breakpoints.down("lg")]: {
      display: "inline-block",
      left: "140px",
      top: "250px !important",
    },
    [theme.breakpoints.up("lg")]: {
      display: "inline-block",
      left: "85px",
    },
    [theme.breakpoints.up("xl")]: {
      display: "inline-block",
      left: "16px !important",
      top: "240px",
    },
  },
  card: {
    width: "350px",
    height: "570px",
    textAlignLast: "center",
    backgroundColor: "#3273dc",
    margin: "12px",
    color: "#fff",
    fontWeight: "bolder",
  },
  cardAction: {
    height: "100%",
  },
  languages: {
    display: "flex",
    flexDirection: "column",
  },
  btn: {
    backgroundColor: "rgb(255, 0, 32);",
    color: "#fff",
    fontWeight: "bolder",
    fontSize: "16px",
    margin: "2px",
    marginTop: "10px",
    transition: "1s",
    "&:hover": {
      transition: "1s",
      backgroundColor: "#fff",
      color: "#3273dc",
    },
  },
  emoji: {
    fontSize: "40px",
  },
  name: {
    fontSize: "35px",
    marginBottom: "10px",
  },
}));
export default useStyles;