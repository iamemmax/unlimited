import React, {useState, useEffect} from 'react';
import "../component/App.css"
import Navbar from "../component/Navbar"
import Home from "../component/Home"
import About from "../component/About"
import Banner from "../component/Banner"
import Contact from "../component/Contact"
import Upload from "../component/Upload"
import Tag from "../component/Tag"
import SingleImg from "../component/SingleImg"

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
 
  return (
    <div className="wrapper">
      <Router>
        <Navbar/>
        
         
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/upload" component={Upload}/>
              <Route path="/:id" exact component={Tag}/>
              <Route path="/s/:id" exact component={SingleImg}/>
            </Switch>
        
      </Router>
    </div>
  );
}

export default App;
