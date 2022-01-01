import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Counter from "./components/Counter.jsx";
 const useStyles = makeStyles(theme=>({
   container: {
     display:"flex",
     flexDirection:"row",
     alingItems:"center",
     justifyContent:"center",
     height:"100vh"
   }
 }))

const App = () =>  {
  const classes = useStyles();
  return (
   <div className={classes.container}>
      <Container maxWidth="sm">
        <Counter />
      </Container>
   </div>
  );
}

export default App;
