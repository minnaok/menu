import React from 'react';
import './App.css';
import { Tab, Tabs, TabPanel} from '@material-ui/core';
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Home from './Home';
import MyTodos from './MyTodos';
import { makeStyles } from '@material-ui/styles';





 
function App() {

  const useStyles = makeStyles(theme =>({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.tabs,
    },
  }));

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


 
  return (
    <div className="App">
      <BrowserRouter>
        <div>   
<Tabs color="primary" value={value} onChange={handleChange} indicatorColor="secondary">
              <Tab label="Home" to="/" component={Link} />
              <Tab label="My Todos" to="/MyTodos" component={Link} />
 </Tabs>        
             <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/MyTodos" component={MyTodos} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
