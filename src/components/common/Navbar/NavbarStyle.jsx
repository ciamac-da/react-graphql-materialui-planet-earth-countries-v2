import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({

    appBar:{
        backgroundColor:"rgb(255, 0, 32);",
        height:"210px",
        width:"100%",

    },
    toolbar:{
        display:"flex",
        flexDirection: "column",
        backgroundColor:"rgb(255, 0, 32);",
        textShadow:"0px 1px 2px rgb(255, 0, 32)",
        width:"100%",
        marginTop: "30px",
      [theme.breakpoints.down('sm')]: {
        margin: "0 auto"
      },
      [theme.breakpoints.up('md')]: {
        marginLeft: "1px",
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: "1px",
      },
    },
    topDiv: {
        display: "flex",
        flexDirection: "column"
    },
    img: {
        position:"relative", 
        top:"4px", left:"1px" 
    },
  t1:{
     color: "#3273dc",
     fontWeight: "bolder !important",
     backgroundColor: "#fff",
     borderRadius:"5px",
     textShadow:"0px 1px 5px #3273dc",
     padding: "5px",
     position:"relative",
     top:"5px",
     transform: "translateX(0px) !important",
     transition: "1s",
     "&:hover":{
     transform: "translateX(10px) !important",
     transition: "1s"
   },
    },
    searchIcon: {
        marginTop:"5px",
    },
    inputStyle:{
        fontSize: "20px !important",
        textAlignLast: "center",
        color: "#fff",
    },
    googleTranslateTypoDiv: {
       display: "flex",
       flexDirection: "column",
       justifyContent: "center",
       alignItems: "center",
       position: "relative",
       top:"10px"
    },
    typo: {
        fontSize: "20px !important",
        textAlign: "center",
        position:"relative",
        top:"5px"
    },
    typoLangs : {
      fontSize: "20px !important",
    

    }
    
}));
export default useStyles;

