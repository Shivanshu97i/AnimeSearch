import Navbar from "./navbar.js";
import SearchBar from "./SearchBar.js";
import Footer from "./footer.js";
import React from "react";
import CardList from "./cardList.jsx";
import { useState } from "react";
import APIFetch from "./APIFetch.jsx";
const SearchPage = () =>
{
    const [state, setState] = useState({
        results: []
      });
    
      const onSearch = async (anime) => {
        const results = await APIFetch.get("?", {
          params: { q: anime },
        });
        console.log(anime);
    
        setState(prevState => {
          return { ...prevState, results: results }
        })
        
      };
    
    return(
        <div>
            <div><Navbar/></div>
            <div><SearchBar onSearch={onSearch}/></div>
            <div><CardList results={state.results}/></div>
            <div><Footer/></div>
        </div>
    );
};
export default SearchPage;