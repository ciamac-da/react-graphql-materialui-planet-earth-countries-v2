import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({

    appBar:{
        backgroundColor:"rgb(255, 0, 32);",
        height:"200px"
    },
    toolbar:{
        backgroundColor:"rgb(255, 0, 32);",
        textShadow:"0px 1px 2px rgb(255, 0, 32)",
        width: "fit-content",
        transform: "translateX(0px) !important",
        transition: "1s",
        "&:hover":{
        transform: "translateX(10px) !important",
        transition: "1s"
      },
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
  t1:{
     color: "#3273dc",
     fontWeight: "bolder !important",
     backgroundColor: "#fff",
     borderRadius:"5px",
     textShadow:"0px 1px 2px #3273dc",
     padding: "5px",
    },
    
}));
export default useStyles;

