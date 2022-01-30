import React from "react";
import { Route, Switch } from "react-router-dom";
import{ render } from "react-dom";
import Navbar from "./navbar.js";
import SearchBar from "./SearchBar.js";
import Footer from "./footer.js";

import Cards from "./AnimeCards.js"

const App = () =>{ 
    return(
        <div>
            
           <Switch>
               <Route path="/">
                   <div><Navbar/></div>
        <div><SearchBar/></div>
        <div><Footer/></div>
        </Route>
                <Route exact path="/cards"><Cards/></Route> 
                
            </Switch>
        
        
        </div>
        
        
 );
};
render(<App/>, document.getElementById("root"));