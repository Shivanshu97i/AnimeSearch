import "./Navbar.css"
const Navbar= () =>{
    return(
    <nav className="navbar navbar-light navcolor">
  <a className="navbar-brand text-light Brand-Name" href='/'>Anime</a>
  <form className="form-inline my-2 my-lg-0">
      
 {/* opening Search bar */}
   
    <div className="box">
      <div className="container-2">
          <span className="icon"><i className="fa fa-search"></i></span>
          <input type="search" id="search" className="form-control mr-sm-2 rounded-pill" placeholder="Search..." />
      </div>
    </div>
    </form> 
</nav>
);
};



export default Navbar;