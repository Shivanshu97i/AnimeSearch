import { useState, useEffect } from "react";
import "./SearchBar.css"





let SearchBar = (props) => {

  const [anime, searchAnime] = useState("");
  const [url, setUrl] = useState(``);
  const [indicator, updateIndicator] = useState(false);
  const { onSearch } = props;
  function handleClick() {
    if (indicator === false) {
      updateIndicator(true)
    }
    else {
      updateIndicator(false)

    }

  }
  useEffect(() => {
    onSearch(url);

  }, [indicator])
  return (
    <div className="container form">
      <div className="d-flex justify-content-center">

        <div className="wrap">

          <input type="text"

            id="anime"
            value={anime}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleClick();
              }
            }}
            onChange={(e) => {
              searchAnime(e.target.value)
              setUrl(`https://api.jikan.moe/v4/anime?q=${anime}`)
              // console.log(url)
            }
            }
            className="searchTerm form-control me-2"
            placeholder="What are you looking for?" />
          <div className="customclassbutton"> <button type="submit" className="searchButton" onClick={handleClick}>
            <i className="fa fa-search"></i>
          </button></div>





        </div>
      </div>

    </div >

  );
};

export default SearchBar;