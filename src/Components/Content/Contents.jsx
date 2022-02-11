import "./Contents.css"
import { useLocation } from "react-router-dom"

let Contents = () =>{
    const location = useLocation();
    const {anime} = location.state;



    return(
    <div className="container">
        <div className="row bg-white content-container">
            <div className="col-3"><img src={anime.images.jpg.image_url} className="img-fluid rounded-start anime-image" alt="..." />
       </div>
       <div className="col-9">
           <h3 className="heading">{anime.title}</h3>
           <p><b>Alternate Title: </b>{anime.title_english}
           <br/>
           <b>Start & Ending Date :  </b>{anime.aired.string}
           <br/>
           <b>MAL Rating: </b>{anime.score}
           <br/>
           <b>Status:  </b>{anime.status}
           <br/>
           <b>Episodes:  </b>{anime.episodes}
           <br/>
           <b>Source:  </b>{anime.source}
           </p>
        <p>
           <b>Synopsis: </b>{anime.synopsis} 
            </p>           
       </div>
        </div>
    
</div>
)

}
export default Contents;