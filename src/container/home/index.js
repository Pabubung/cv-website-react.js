import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Navbar from '../../component/navbar';
import "./home.css"  
import Foto_Profile from "../../asset/image/Foto_Profile.jpg"
import Profile from '../section/profile';
import Experience from '../section/experience';
import Contact from '../section/contact';
import Certified from '../section/certified';

class Home extends Component {
    render() {
        return (
            <Router>
                <Navbar/>
                <Profile/>
                <Experience/>
                {/* <Certified/> */}
                <Contact/>

            </Router>
        );
    }
}

export default Home;