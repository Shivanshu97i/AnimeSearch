import {useState,useEffect} from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";
import "./SearchBar.css"
let SearchBar = () =>
{
  const [anime, searchAnime] = useState("");
  const [clicked,updateClick]= useState(false);
  const [animejson,updateanimejson]= useState("Hello");
  useEffect(()=>{
    requestAnime();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

async function requestAnime(){
  
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}`);
      const json = await response.json();
      updateanimejson(json.data[0].title);
      console.log(animejson);

    } catch (error) {
      console.log("error", error);
    }
  
}
  

    return(
        <div className="container form">
          <div className="d-flex justify-content-center">
              
      <div className="wrap">
   
      <form className="search">
        <input type="text" 
      id="anime"
      value={anime}
      onChange={(e)=>searchAnime(e.target.value)}
      className="searchTerm form-control me-2" 
      placeholder="What are you looking for?" />
      <button type="submit" onClick={()=>updateClick(!clicked)} className="searchButton">
        <i className="fa fa-search"></i>
     </button>
     </form>
      
     
   
</div>
          </div>
         
      </div>
        
    );
};
export default SearchBar;