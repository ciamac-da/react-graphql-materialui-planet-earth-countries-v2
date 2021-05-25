import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({

 cards: {
     display:"inline-block",
     position: "relative",
     top:"200px",
    [theme.breakpoints.down('sm')]: {
            
      },
      [theme.breakpoints.down('md')]: {
      position: "relative",
      left: "180px"
      },
      [theme.breakpoints.down('xl')]: {
        position: "relative",
        left: "120px"
      },
      [theme.breakpoints.up('xl')]: {
        position: "relative",
        left: "160px"
      },
    },
    card: {
        width: "350px",
        textAlignLast:"center",
        backgroundColor: "#3273dc",
        margin:"20px",
        color:"#fff",
        fontWeight:"bolder"
 },
 languages: {
   display: "flex",
   flexDirection:"column"
 },
 btn: {
   backgroundColor:"rgb(255, 0, 32);",
   color:"#fff",
   fontWeight:"bolder",
   fontSize:"16px",
   margin:"2px"
 }
    
}));
export default useStyles;

