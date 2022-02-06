import Navbar from "./navbar.js";
import SearchBar from "./SearchBar.js";
import Footer from "./footer.js";
import React from "react";
import CardList from "./cardList.jsx";
import { useState } from "react";

import axios from "axios";
import Cards from "./AnimeCards.js";
const SearchPage = () =>
{
    
    
    return(
        <div>
            <div><Navbar/></div>
            <div><SearchBar /></div>
           <div><Cards/></div> 
            {/* <div><CardList /></div> */}
            <div><Footer/></div>
        </div>
    );
};
export default SearchPage;