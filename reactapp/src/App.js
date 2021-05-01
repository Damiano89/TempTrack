import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Responsive.css';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import './NavBar.css';
import ReactDOM from 'react-dom';
import EmployeePage from './Pages/Employee/EmployeePage';

import{
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { EmployeeButton } from './EmployeeButton';
import { GuestButton } from './GuestButton';

//Import Pages
//import MainPage from "/Pages";
//import EmployeePage from "./Pages/Employee/employee";
 
export class ProfilePage extends React.Component {
  render() {
    return (
      <div>
      <Router>
      <NavBar />
       <Switch>
         <Route exact path="/"><EmployeeButton />
       <GuestButton /></Route>
       <Route path="/employee"><EmployeePage /></Route>
       </Switch>
       <Footer />
      </Router>
      
      </div>
    );
   
  }
}

//ReactDOM.render(<ProfilePage />, document.getElementById('root'));