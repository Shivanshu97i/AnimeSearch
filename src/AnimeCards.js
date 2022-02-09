import React from "react";
import "./AnimeCards.css"
let Cards = (props) => {

  const { anime } = props;

  return (



    <div className="card mb-3 mx-auto" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={anime.images.jpg.image_url} className="img-fluid rounded-start anime-image" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{anime.title}</h5>
            <p className="card-text">{anime.synopsis}.........</p>
            <p className="card-text">Score:{anime.score}</p>
          </div>
        </div>
      </div>
    </div >
  );
};
export default Cards;
