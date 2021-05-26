import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({

 cards: {
     position: "relative",
     top:"200px",
     [theme.breakpoints.down('sm')]: {
    },
    [theme.breakpoints.up('md')]: {
    },
    [theme.breakpoints.up('lg')]: {
     display:"inline-block",
     left:"180px"
    },
    },
    card: {
        width: "350px",
        height:"500px",
        textAlignLast:"center",
        backgroundColor: "#3273dc",
        margin:"20px",
        color:"#fff",
        fontWeight:"bolder"
 },
 cardAction: {
 height:"100%" 
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
 },
 emoji:{
   fontSize:"40px"
 }
    
}));
export default useStyles;

