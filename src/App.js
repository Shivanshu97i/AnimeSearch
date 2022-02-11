
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
    return (<>
    <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&family=Ubuntu:wght@300&display=swap" rel="stylesheet"/>
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"/>
      
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
       <link href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap" rel="stylesheet"/>
       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>
       <title>Anime Search</title>
    </head>
        <div>

            
<Router>
    <Route exact path={"/"}><div><Navbar /></div>
            <div><SearchBar onSearch={onSearch} /></div>
            <div><Footer /></div>
            <div><CardList anime={state} /></div>
</Route>
<Route exact path={"/contents"}><Contents/></Route>
</Router>





        </div ></>

    );
};
export default App;
