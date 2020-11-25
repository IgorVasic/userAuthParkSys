import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Singup from './Singup';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {NavLink} from 'react-router-dom';
import  Home  from './Home';
//import   NumberOfPeople from './NumberOfPeople';
//import  NumberOfCars from './NumberOfCars';
import Profile from './Profile';





    
 class App extends React.Component{

 
   render(){    
     return (
      <Router>
        <div>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path ="/">
              <Login/>
            </Route>
            <Route path="/Login">
              <Login/>
            </Route>
            <Route path="/Signup">
              <Singup/>
            </Route>
            <Route path="/Home">
              <Home/>
            </Route>
            <Route path="/Profile">
              <Profile/>
            </Route>
    
          </Switch>
        </div>
      </Router>
  )
}


   
 };   
    
  

export default App;
