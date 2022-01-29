import Giphy from "/Gifs/giphy.mp4"
let Background = () =>
{
    return(<div>
    <vidoeo 
    autoPlay
    loop
    muted
    style={{
       

    }}>
        <source src={Giphy} type="video/mp4"/>
    </vidoeo>
  </div>
    
            );
};
export default Background;