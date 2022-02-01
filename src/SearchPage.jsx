import Navbar from "./navbar.js";
import SearchBar from "./SearchBar.js";
import Footer from "./footer.js";
import React from "react";

const SearchPage = () =>
{
    return(
        <div>
            <div><Navbar/></div>
            <div><SearchBar/></div>
            <div><Footer/></div>
        </div>
    );
};
export default SearchPage;