import React from "react";
import { Link } from "react-router-dom";
import "./AnimeCards.css"

let Cards = (props) => {

  const { anime } = props;


  return (


    <Link to={{pathname: "/contents", state:{anime} }}>
    <div className="card mb-3 mx-auto" >
    <style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
</style>
      <div className="row g-0 font">
        <div className="col-md-4">
          <img src={anime.images.jpg.image_url} className="img-fluid rounded-start anime-image" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title "><b>{anime.title}</b></h5>
            <p className="card-text "><b>English Title: {anime.title_english}
             </b>
             </p>
            
             <p className="card-text"><b>Episodes:</b> {anime.episodes} </p>
            <p className="card-text"><b>Status:</b> {anime.status}</p>
            <p className="card-text "><b>MAL Rating: {anime.score}</b></p>
          </div>
        </div>
      </div>
    </div >
    </Link>
  );
};
export default Cards;
