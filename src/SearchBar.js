import "./SearchBar.css"
let SearchBar = () =>
{
    return(
        <div className="container form">
          <div className="d-flex justify-content-center">
               {/* <form className="d-flex w-75 p-3">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> 
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div class="wrap">
   <div className="search">
   {/* <form className="d-flex w-75 p-3"> */}
      <input type="text" className="searchTerm form-control me-2" placeholder="What are you looking for?" />
      <button type="submit" className="searchButton">
        <i className="fa fa-search"></i>
     </button>
     {/* </form> */}
   </div>
</div>
          </div>
         
      </div>
        
    );
};
export default SearchBar;