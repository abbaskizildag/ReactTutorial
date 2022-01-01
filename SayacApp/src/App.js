import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CountDown from "./components/CountDown";
import clockImage from "./images/clock.jpg";

 const useStyles = makeStyles(theme=>({
   container: {
     display:"flex",
     flexDirection:"row",
     alingItems:"center",
     justifyContent:"center",
     height:"100vh",
     backgroundImage: `url(${clockImage})`,
     backgroundPosition:"center",
     backgroundSize:"cover",
     backgroundRepeat:false
   }
 }))

const App = () =>  {
  const classes = useStyles();
  return (
   <div className={classes.container}>
      <Container maxWidth="sm">
        <CountDown />
      </Container>
   </div>
  );
}

export default App;
