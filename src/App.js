import React from "react";
import reactDom from "react-dom";
import {  BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import{ render } from "react-dom";
import SearchPage from "./SearchPage.jsx";
import Cards from "./AnimeCards.js"

const App = () =>{ 
    return(
        <div>
           <Router>
               <Switch>
                   <Route exact path="/">
                   <div><SearchPage/></div>
                   </Route>
                   <Route exact path="/cards">
                    <Cards/>
                   </Route>
                   </Switch>
               
               </Router>
              
            
            
            
            
        </div>
        
 );
};
render( <App /> ,
document.getElementById("root"));