import "./Footer.css"

let Footer = () =>{
    return(
        <div className="container-fluid footer">
        <footer className="tag-footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="d-flex flex-row">
            <a href="https://github.com/Shivanshu97i/Aniime-Search-Site" className="icon p-2" ><i class="fab fa-github-alt"></i></a>
            <a href="https://www.linkedin.com/in/shivanshu-singh-4454311b8/" className="icon p-2"><i class="fab fa-linkedin"></i></a>
            <a href="" className="icon p-2"><i class="fab fa-discord"></i></a>
            </div>
 
 <p><a href="mailto:singhshivanshu97@gmail.com"><b>Contact Through Mail</b></a></p>
</footer>
      </div>
  
    );
};
export default Footer;