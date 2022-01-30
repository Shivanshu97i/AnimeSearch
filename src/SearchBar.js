import {useState,useEffect} from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";
import "./SearchBar.css"
let SearchBar = () =>
{
  const [anime, searchAnime] = useState("");
  useEffect(()=>{
    requestAnime();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

async function requestAnime(){
  let url = 'https://api.jikan.moe/v4/anime?q='+ anime; 
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log("error", error);
    }
  
}
  

    return(
        <div className="container form">
          <div className="d-flex justify-content-center">
              
      <div className="wrap">
   <div className="search">
   
      <input type="text" 
      id="anime"
      value={anime}
      onChange={(e)=>searchAnime(e.target.value)}
      className="searchTerm form-control me-2" 
      placeholder="What are you looking for?" />
      <button type="submit" className="searchButton">
        <i className="fa fa-search"></i>
     </button>
     
   </div>
</div>
          </div>
         
      </div>
        
    );
};
export default SearchBar;