import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({

    appBar:{
        backgroundColor:"rgb(255, 0, 32);",
        width:"100%",
        [theme.breakpoints.down('sm')]: {
          height:"300px !important",
        },
        [theme.breakpoints.down('lg')]: {
          height:"260px",
        },
        [theme.breakpoints.up('lg')]: {
          height:"200px",
        },
        [theme.breakpoints.up('xl')]: {
          height:"200px",
        },

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
        [theme.breakpoints.down('sm')]: {
          position: "relative",
          top:"15px"
         },
         [theme.breakpoints.down('lg')]: {
          
         },
         [theme.breakpoints.up('lg')]: {
      
         },
         [theme.breakpoints.up('xl')]: {
         
         },
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
        top:"5px",
        [theme.breakpoints.down('sm')]: {
          position: "relative",
          top:"10px"
         },
         [theme.breakpoints.down('lg')]: {
          
         },
         [theme.breakpoints.up('lg')]: {
      
         },
         [theme.breakpoints.up('xl')]: {
         
         },
    },
    typoLangs : {
      fontSize: "20px !important",
      [theme.breakpoints.down('sm')]: {
       position: "relative",
       top:"20px"
      },
      [theme.breakpoints.down('lg')]: {
       
      },
      [theme.breakpoints.up('lg')]: {
   
      },
      [theme.breakpoints.up('xl')]: {
      
      },
    },
    translateBtn: {
      color: "#fff",
      backgroundColor: "#3273dc",
      fontWeight: "bolder",
      [theme.breakpoints.down('sm')]: {
        position: "relative",
        top:"30px"
       },
       [theme.breakpoints.down('lg')]: {
        
       },
       [theme.breakpoints.up('lg')]: {
    
       },
       [theme.breakpoints.up('xl')]: {
       
       },
      "&:hover": {
        backgroundColor: "#fff",
        color: "#3273dc",
      }
    },
    icon: {
      color: "#fff",
      [theme.breakpoints.down('sm')]: {
        position: "relative",
        top:"30px"
       },
       [theme.breakpoints.down('lg')]: {
        
       },
       [theme.breakpoints.up('lg')]: {
    
       },
       [theme.breakpoints.up('xl')]: {
       
       },
    },
    firstLastBtn:{
      backgroundColor: "#fff",
      color: "#3273dc",
      [theme.breakpoints.down('sm')]: {
        position: "relative",
        top:"30px"
       },
       [theme.breakpoints.down('lg')]: {
        
       },
       [theme.breakpoints.up('lg')]: {
    
       },
       [theme.breakpoints.up('xl')]: {
       
       },
    }
    
}));
export default useStyles;

