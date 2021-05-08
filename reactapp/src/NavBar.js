import "./NavBar.css";
import React from 'react';
import { Navbar } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import scan from '../src/scan.png';
import vaccine from '../src/vaccine.png';
import news from '../src/news.png';
import { Link } from "react-router-dom";

const NavBar = (props) => {
        return(
        <div className="NavDiv">
            <Navbar>
                <Link id="link" to="/"><img alt="scan" src={scan} /> Home </Link>
                <Link id="link" to="/vaccine"><img alt="vaccine" src={vaccine}/> Vaccine Finder </Link>
                <Link id="link" to="news"><img alt="news" src={news}/> COVID-19 News </Link>
            </Navbar>
        </div>
        );
}
    
export default NavBar;