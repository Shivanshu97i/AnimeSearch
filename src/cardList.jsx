import React from "react";
import Cards from "./AnimeCards";

const CardList = ({results}) =>{
    let data = [];
    if (results.data) {
      data = results.data || [];
    }
    console.log(data);
    return (
      <div className="result">
        {data.map((data) => (
          <Cards key={data.data[0].mal_id} anime={data} />
        ))}
      </div>
    );

}
export default CardList;