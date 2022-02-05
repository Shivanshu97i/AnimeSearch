import {useState,useEffect} from "react";

import "./SearchBar.css"
let SearchBar = (props) =>
{
  const {onSearch} = props;
  const [anime, searchAnime] = useState("");
  


    return(
        <div className="container form">
          <div className="d-flex justify-content-center">
              
      <div className="wrap">
   
      <form className="search" onSubmit={(e) => {
         
          onSearch(anime)
        }}>
        <input type="text" 
      id="anime"
      value={anime}
      onKeyPress={(e)=>{if(e.key=== 'Enter') {
        onSearch(anime)
      }}}
      onChange={(e)=>{searchAnime(e.target.value)
        }
      }
      className="searchTerm form-control me-2" 
      placeholder="What are you looking for?" />
      
      <button type="submit"  className="searchButton">
        <i className="fa fa-search"></i>
     </button>
     </form>
      
     
   
</div>
          </div>
         
      </div>
        
    );
};
//   const [result,searchResult] = useState([]);
//   const [state,setState] = useState({results:[]});
//   let data = [];
//   useEffect(()=>{
   
//     if(url){
//       requestAnime();
//     }
      
    
//   },[url]); // eslint-disable-line react-hooks/exhaustive-deps

// async function requestAnime(){
  
//     try {
      
//       const results = await fetch(url);
      
//       const json = await results.json();
//       // updateanimejson(json.data[0].title);
//       // setState(prevState => {
//       //   return { ...prevState, response: response }})
      
//       setState(prevState => {
//         return { ...prevState, results: results }
//       })
//      setUrl(prevState => {
//       return { ...prevState, url: url }
//     })
//      searchResult(json.data);
//       console.log(state); 

//     } catch (error) {
//       console.log("error", error);
//     }
  
// }
  
export default SearchBar;