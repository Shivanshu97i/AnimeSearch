import {useState,useEffect} from "react";
import axios from "axios";
import "./SearchBar.css"
import CardList from "./cardList.jsx"
let SearchBar = () =>
{
  // const {onSearch} = props;
  const [anime, searchAnime] = useState("");
  const [url,setUrl] = useState(`https://api.jikan.moe/v4/anime`);
  const [state, setState] = useState([]);
  const [indicator,updateIndicator]= useState(false);
  const onSearch = async () => {
    const {data} = await axios.get(url);
    

    setState(data.data)
    
  };
  function handleClick() {
    if(indicator===false){
      updateIndicator(true)
    }
    else{
      updateIndicator(false)
    }
    
  }
useEffect(()=>{
  onSearch();
  
},[indicator])
    return(
        <div className="container form">
          <div className="d-flex justify-content-center">
              
      <div className="wrap">
   
     
        <input type="text" 
      id="anime"
      value={anime}
      onKeyPress={(e)=>{if(e.key=== 'Enter') {
        handleClick();
      }}}
      onChange={(e)=>{searchAnime(e.target.value)
        setUrl(`https://api.jikan.moe/v4/anime?q=${anime}`)
        // console.log(url)
        }
      }
      className="searchTerm form-control me-2" 
      placeholder="What are you looking for?" />
      
      <button type="submit"  className="searchButton" onClick={handleClick}>
        <i className="fa fa-search"></i>
     </button>
     
      
     
   
</div>
          </div>
         <div><CardList results={state}/></div>
      </div>
        
    );
};

export default SearchBar;