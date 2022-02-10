import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { render } from "react-dom";
import axios from "axios";
import Cards from "./AnimeCards.js"
import { useState } from "react";
import Navbar from "./navbar.js";
import SearchBar from "./SearchBar.js";
import Footer from "./footer.js";
import React from "react";
import CardList from "./cardList.jsx";
import Contents from "./Contents.jsx";
const App = () => {
    const [state, setState] = useState([]);
    const onSearch = async (url) => {
        const { data } = await axios.get(url);

        // console.log(data.data);
        setState(data.data)

    };
    return (
        <div>

            
<Router>
    <Route exact path={"/"}><div><Navbar /></div>
            <div><SearchBar onSearch={onSearch} /></div>
            <div><Footer /></div>
            <div><CardList anime={state} /></div>
</Route>
<Route exact path={"/contents"}><Contents/></Route>
</Router>





        </div >

    );
};
render(<App />,
    document.getElementById("root"));