import React from "react";
import Cards from "./AnimeCards";

const CardList = (props) => {
  let data = [];
  data = props.anime;
  console.log(data);
  return (
    <div>
      {
        data.map((data) => {
          return (
            <Cards
              anime={data}

              key={data.mal_id} />

          );
        })
      }
    </div>
  );

}
export default CardList;