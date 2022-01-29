import React from "react";
import{ render } from "react-dom";
import Navbar from "./navbar.js";
import SearchBar from "./SearchBar.js";
import Footer from "./footer.js";
// import Background from "./Background.js";
const App = () =>{ 
    return(
        <div>
            
            <div><Navbar/></div>
        <div><SearchBar/></div>
        {/* <div><Footer/></div> */}
        {/* <div><Background/></div> */}
        </div>
        
        
 );
};
render(<App/>, document.getElementById("root"));