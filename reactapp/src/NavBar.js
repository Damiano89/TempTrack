import "./NavBar.css";
import React from 'react';
import { Navbar, NavLink } from 'reactstrap';
import scan from '../src/scan.png';
import vaccine from '../src/vaccine.png';
import news from '../src/news.png';


export const NavBar = (props) => {
        return(
        <div className="NavDiv">
            <Navbar>
                <NavLink to="/home"><img alt="scan" src={scan} /> Home </NavLink>
                <NavLink href="./VaccineLocator.js"><img alt="vaccine" src={vaccine}/> Vaccine Finder </NavLink>
                <NavLink href="./News.js"><img alt="news" src={news}/> COVID-19 News </NavLink>
            </Navbar>
        </div>
        );
    }
    
