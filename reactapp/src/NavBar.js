import "./NavBar.css";
import React from 'react';
import { Navbar } from 'react-bootstrap';
import scan from '../src/scan.png';
import news from '../src/news.png';
import employee from '../src/employee-card.png';
import { Link } from "react-router-dom";

const NavBar = (props) => {
        return(
        <div className="NavDiv">
            <Navbar>
                <Link id="link" to="/"><img alt="scan" src={employee} /> Home </Link>
                <Link id="link" to="/temperatures"><img alt="temp" src={scan} /> Temperature List </Link>
                <Link id="link" to="/news"><img alt="news" src={news}/> COVID-19 News </Link>
            </Navbar>
        </div>
        );
}
    
export default NavBar;